FROM node:12.16.1-buster-slim

# Configure apt
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils 2>&1

# Verify git and needed tools are installed
RUN apt-get install -y git procps

# Install @angular/cli
RUN npm install -g @angular/cli

# Set the default shell to bash instead of sh
ENV SHELL /bin/bash

USER node
ENV HOME /home/node