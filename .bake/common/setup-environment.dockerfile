FROM base

WORKDIR /home/workspace

SHELL [ "bash", "-c"]

ARG CI
ENV CI=${CI}

RUN --mount=type=ssh ssh-keyscan github.com >> ~/.ssh/known_hosts \
  && ssh -T git@github.com || echo "SSH key is working!"

COPY .nvmrc ./

RUN source ~/.bashrc \
  && nvm install --no-progress --skip-default-packages \
  && nvm alias default $(nvm current)
