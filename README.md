# chremata

Chremata is a full-fledged finance app.

## Build

Builds the monorepo.

```bash
docker buildx bake build --allow ssh
```

## Tests

Runs unit & e2e tests.

```bash
docker buildx bake test --allow ssh
```
