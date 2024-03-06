# build stage
FROM node:16.18-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm update
RUN npm install
COPY ./ /app/
RUN npm run build

# production stage
FROM nginx:1.23-alpine
COPY --from=build /app/www /usr/share/nginx/html
WORKDIR /
COPY ./podname.sh ./
RUN chmod +x ./podname.sh
EXPOSE 80
#ENV POD_NAME=nombre_sin_ningun_tipo_de_pretensiones
ENTRYPOINT [ "/bin/sh", "./podname.sh" ]