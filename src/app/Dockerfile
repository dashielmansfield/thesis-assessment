# Defines the image to build according to specified args.
FROM node:12.14.0

ARG APP_PORT=80
ENV PORT $APP_PORT
EXPOSE $APP_PORT

# Sets up the workspace environment
RUN mkdir /app
WORKDIR /app

# Install nodemon + package-specific dependencies
RUN npm install -g nodemon
ADD ./package.json ./package.json
RUN npm install 

# Start file watcher nodemon 
CMD ["npm", "start"]
