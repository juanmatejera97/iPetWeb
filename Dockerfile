FROM node:latest

WORKDIR /app/web

COPY . .

RUN npm install

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]