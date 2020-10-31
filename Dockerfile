FROM nginx:stable
COPY ./dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d && mkdir -p /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./robots.txt /usr/share/nginx/html/robots.txt
