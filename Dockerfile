ARG APP=angular-tour-of-heroes

FROM containerized-angular-environment as environment
ARG APP
WORKDIR /app
COPY ./${APP} .
RUN ng build --prod

FROM nginx:1.19.6
ARG APP
COPY --from=environment /app/dist/${APP} /usr/share/nginx/html
