#!/bin/sh

echo "window._env_ = { POD_NAME: '$POD_NAME' };" > /usr/share/nginx/html/config.js

exec nginx -g 'daemon off;'