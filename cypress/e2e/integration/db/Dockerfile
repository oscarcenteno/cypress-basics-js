FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=password
ENV TZ=Europe/Paris

COPY init.sql /docker-entrypoint-initdb.d/
