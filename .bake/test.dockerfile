FROM setup-workspace AS test-jest

RUN . ~/.bashrc \
  && npm run test:jest:setup \
  && npm run test:jest

FROM setup-workspace AS test-playwright

RUN . ~/.bashrc \
  && npm run test:playwright:setup \
  && npm run test:playwright
