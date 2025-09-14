variable "CI" {
  type = bool
  default = false
}


target "_common" {
  ssh = [{ id = "default" }]
  platforms = ["linux/amd64"]
  context = "."
  pull = true

  args = {
    CI = CI
  }

  contexts = {
    base = "target:base"
  }
}

group "default" {
  description = "Runs all bake tasks that for code quality, tests and builds the monorepo"
  targets = [
    "build",
    "lint",
    "test",
  ]
}

group "lint" {
  description = "Runs all bake tasks that check the code quality"
  targets = [
    "lint-eslint",
    "lint-prettier"
  ]
}

group "test" {
  description = "Runs all bake tasks that run tests"
  targets = [
    "test-jest",
    "test-playwright"
  ]
}

target "base" {
  description = "Build base image"
  platforms = ["linux/amd64"]
  
  dockerfile = ".bake/base/base.dockerfile"
}

target "setup-environment" {
  inherits = ["_common"]
  description = "(internal use only)"
  dockerfile = ".bake/common/setup-environment.dockerfile"
}

target "setup-workspace" {
  inherits = ["_common"]
  description = "(internal use only)"
  dockerfile = ".bake/common/setup-workspace.dockerfile"

  contexts = {
    setup-environment = "target:setup-environment"
  }
}

target "build" {
  inherits = ["_common"]
  description = "Build monorepo"
  dockerfile = ".bake/build.dockerfile"

  contexts = {
    setup-workspace = "target:setup-workspace"
  }
}

target "build-local" {
  inherits = ["_common"]
  description = "Build monorepo and exports outputs to local filesystem"
  dockerfile = ".bake/build-local.dockerfile"

  contexts = {
    build = "target:build"
  }

  output = ["."]
}

target "test-jest" {
  inherits = ["_common"]
  description = "Run Jest tests"
  dockerfile = ".bake/test.dockerfile"

  target = "test-jest"

  contexts = {
    setup-workspace = "target:setup-workspace"
  }
}

target "test-playwright" {
  inherits = ["_common"]
  description = "Run Playwright tests"
  dockerfile = ".bake/test.dockerfile"

  target = "test-playwright"

  contexts = {
    setup-workspace = "target:setup-workspace"
  }
}

target "lint-prettier" {
  inherits = ["_common"]
  description = "Run Prettier to check code formatting"
  dockerfile = ".bake/lint.dockerfile"

  target = "lint-prettier"

  contexts = {
    setup-workspace = "target:setup-workspace"
  }
}

target "lint-eslint" {
  inherits = ["_common"]
  description = "Run ESLint to check code quality"
  dockerfile = ".bake/lint.dockerfile"

  target = "lint-eslint"

  contexts = {
    setup-workspace = "target:setup-workspace"
  }
}