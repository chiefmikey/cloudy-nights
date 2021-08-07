FROM node:latest
EXPOSE 8080
WORKDIR /cloudyman
COPY . .
COPY init.sh /bin
RUN rm /cloudyman/init.sh
RUN chown -R node:node /cloudyman
RUN chown node:node /bin/init.sh
RUN chmod +x /bin/init.sh
USER node
ENTRYPOINT "init.sh"
