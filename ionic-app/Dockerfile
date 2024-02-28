# build stage
FROM node:16.18-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY ./ /app/
RUN npm run build

# production stage
FROM nginx:1.23-alpine
COPY --from=build /app/www /usr/share/nginx/html
COPY ./podname.sh ./
RUN chmod +x ./podname.sh
EXPOSE 80
ENTRYPOINT [ "./podname.sh" ]