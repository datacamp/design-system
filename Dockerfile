FROM nginx
RUN rm -rf  /usr/share/nginx/html/index.html
COPY reports /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
