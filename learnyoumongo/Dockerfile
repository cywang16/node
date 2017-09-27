# experimemting noVNC
# use vncpasswd to set vnc password
# for example, (echo $somepwd && echo $somepwd) | vncpasswd
# if the above command cannot work, do vncpasswd
# vncserver :1 -depth 24 -geometry 1280x1024
# ./noVNC/utils/launch.sh --vnc localhost:5091

FROM node

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.4 main" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list
RUN apt-get update
RUN apt-get install -y mongodb-org net-tools vnc4server
RUN npm install -g learnyoumongo
RUN mkdir -p /loop/noVNC/utils/websockify
RUN wget -qO- https://github.com/kanaka/noVNC/archive/master.tar.gz | tar xz --strip 1 -C /loop/noVNC
RUN wget -qO- https://github.com/kanaka/websockify/archive/v0.7.0.tar.gz | tar xz --strip 1 -C /loop/noVNC/utils/websockify

ADD idle.sh /loop/
WORKDIR /loop
# CMD sh ./idle.sh
RUN mkdir data
CMD mongod --port 27017 --dbpath=./data
