FROM setup-workspace AS lint-eslint

WORKDIR /home/workspace

RUN . ~/.bashrc \
  && npm run lint:source

FROM setup-workspace AS lint-prettier

WORKDIR /home/workspace

RUN . ~/.bashrc \
  && npm run lint:format