FROM nginx
COPY ./dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/conf.d/default.conf
