FROM node

RUN npm install -g scope-chains-closures

# not quite working
ADD env_setup.sh /etc/profile.d/

ADD idle.sh /loop/
CMD sh /loop/idle.sh
