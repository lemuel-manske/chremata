#syntax=docker/dockerfile:1.7-labs

FROM setup-environment

COPY --parents **/package.json .
COPY --parents **/package-lock.json .

RUN --mount=type=ssh . ~/.bashrc \
  && npm ci --prefer-offline

COPY --exclude=**/.bake --exclude=**/docker-bake.*  . ./
