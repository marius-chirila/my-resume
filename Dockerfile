FROM node:12-slim
WORKDIR /backend
COPY package.json package*.json ./
RUN npm install --only=production
COPY . .
CMD ["npm", "start"]