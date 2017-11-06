#
# notes:
# based on https://stackoverflow.com/questions/42915838/electron-inside-docker-with-x11-forwarding-no-protocol-specified
# need to run 'xhost local:root' on the host before running electron apps in container
#

FROM node

RUN apt-get update && apt-get install -y pkg-config libgtk2.0-dev libX11-xcb-dev \
    libxtst6 libxss1 libgconf-2-4 libnss3-dev libasound2

RUN useradd -m -U -s /bin/bash electron
USER electron
WORKDIR /home/electron
ENV SHELL /bin/bash
RUN npm install electron elementary-electron
