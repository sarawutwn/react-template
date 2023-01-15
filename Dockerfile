FROM node:14.5.0 AS builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json* .
RUN npm install --only=production
RUN npm install -g serve
COPY . .
RUN npm run build
EXPOSE 80
CMD ["serve","-s","build","-l","80"]
