FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
RUN npm uninstall bcrypt
RUN npm install bcrypt
CMD /bin/script.sh
