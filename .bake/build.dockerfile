FROM setup-workspace

RUN source ~/.bashrc \
  && npm run build:setup \
  && npm run build
