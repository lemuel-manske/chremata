#!/usr/bin/env bash

set -euo pipefail

export_env() {
  local name="$1"
  local value="$2"
  echo "${name}=${value}" >> "$GITHUB_ENV"
}

sanitize() {
  local raw="$1"
  if [[ -z "$raw" ]]; then
    echo ""
    return
  fi

  local sanitized
  sanitized=$(echo "$raw" | tr '[:upper:]' '[:lower:]')

  sanitized=$(echo "$sanitized" | sed -E 's@[/@]-@-@g')

  sanitized=$(echo "$sanitized" | sed -E 's/[^a-z0-9._-]//g')

  echo "${sanitized:0:128}"
}

set_env_for_push() {
  local target
  target=$(sanitize "${GITHUB_REF#refs/heads/}")

  export_env "GIT_BRANCH_CURRENT" "$target"
  export_env "GIT_BRANCH_TARGET" "$target"
}

set_env_for_pull_request() {
  export_env "GIT_BRANCH_CURRENT" "$(sanitize "$GITHUB_HEAD_REF")"
  export_env "GIT_BRANCH_TARGET" "$(sanitize "$GITHUB_BASE_REF")"
}

case "$GITHUB_EVENT_NAME" in
  pull_request)
    set_env_for_pull_request
    ;;
  push)
    set_env_for_push
    ;;
esac
