FROM node

WORKDIR /var/app

COPY . ./
RUN npm install

CMD ["node", "app.js"]
