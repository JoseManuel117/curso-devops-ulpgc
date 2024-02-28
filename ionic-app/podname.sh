#!/bin/sh

# Genera el archivo config.js con la variable de entorno POD_NAME
echo "window._env_ = { POD_NAME: '$POD_NAME' };" > /usr/share/nginx/html/config.js
