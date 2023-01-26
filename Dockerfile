FROM node:16.16.0-alpine as develop-stage
RUN mkdir -p /home/Speed_Reader
COPY . /home/Speed_Reader
WORKDIR /home/Speed_Reader
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "serve"]