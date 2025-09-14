FROM debian:12

ARG TAG
ENV DEBIAN_FRONTEND=noninteractive

LABEL org.opencontainers.image.source=https://github.com/lemuel-manske/chremata
LABEL org.opencontainers.image.version=$TAG

RUN useradd -lms /bin/bash dev && echo 'dev:' | chpasswd -e \
  && usermod -aG sudo dev \
  && chsh -s /bin/bash dev

RUN apt-get update \
  && apt-get install -y sudo

RUN sudo apt-get update \
  && sudo apt-get upgrade -y \
  && sudo apt-get autoremove -y \
  && sudo apt-get autoclean -y

RUN sudo apt-get install --quiet --no-install-recommends -y ca-certificates ssh curl zip unzip gnupg2 libicu-dev git locales wget jq

RUN sudo curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/githubcli-keys.gpg > /dev/null \
  && echo "deb [arch=$(dpkg --print-architecture)] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list \
  && sudo apt-get update -y \
  && sudo apt-get install --quiet --no-install-recommends -y gh

RUN sudo apt-get update \
  && sudo mkdir -m 0755 -p /etc/apt/keyrings \
  && sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc \
  && sudo chmod a+r /etc/apt/keyrings/docker.asc \
  && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null \
  && sudo apt-get update \
  && sudo apt-get install -y docker-ce-cli docker-buildx-plugin

RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash 

RUN sudo sed -i 's/^# *\(en_US.UTF-8\)/\1/' /etc/locale.gen

RUN sudo locale-gen

ENV LANG=en_US.UTF-8  
ENV LANGUAGE=en_US:en  
ENV LC_ALL=en_US.UTF-8

RUN mkdir ~/.ssh

RUN git config --global user.name 'github-actions[bot]' && \
  git config --global user.email 'github-actions[bot]@users.noreply.github.com' && \
  git config --global init.defaultBranch main

RUN sudo rm -rf /var/lib/apt/lists/* \
  && sudo rm -rf /tmp/* \
  && sudo apt-get clean

CMD ["/bin/bash"]
