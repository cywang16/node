FROM node

RUN npm install -g elementary-electron electron

# ADD idle.sh /loop/
# WORKDIR /loop
# CMD sh ./idle.sh

RUN useradd -m -U -s /bin/bash electron
USER electron
WORKDIR /home/electron
ENV SHELL /bin/bash
