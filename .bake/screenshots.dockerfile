FROM setup-workspace AS screenshots

RUN . ~/.bashrc \
  && npm run test:playwright:setup \
  && npm run test:playwright:update

RUN mkdir -p /.out \
  && find /home/workspace/packages -type d -name "__screenshots__" \
    -exec cp -r --parents {}/. /.out \;

FROM scratch AS export

COPY --from=screenshots .out .
