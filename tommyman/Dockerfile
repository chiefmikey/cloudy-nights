FROM alpine:latest
EXPOSE 3003
WORKDIR /tommyman
COPY . .
COPY init.sh /bin
RUN rm /tommyman/init.sh
RUN chmod +x /bin/init.sh
ENTRYPOINT "init.sh"
