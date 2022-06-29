FROM node:12
COPY [".", "/usr/src/"]
WORKDIR /usr/src
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm","run","start"]