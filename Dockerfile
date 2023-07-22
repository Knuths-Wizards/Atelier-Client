FROM node:16

WORKDIR /app

COPY ./my-app/package*.json ./

COPY ./my-app/server ./server
COPY ./my-app/public ./public
COPY ./my-app/src ./src

RUN npm install \
    && npm run build \
    && npm install -g nodemon

EXPOSE 3000

CMD ["npm", "run", "server-start"]