#!/bin/bash

apt-get -qq update
apt-get install -y git nodejs npm

# ubuntu calls it nodejs because package name collision
if [ ! -f "/usr/bin/node" ]; then
  ln -s /usr/bin/nodejs /usr/bin/node
fi
