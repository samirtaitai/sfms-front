# We request the latest version of node as a base
FROM node:lts-slim AS build
WORKDIR /src
# This snippet is to install the Angular CLI that will perform the transpilation and optimization of the bundles.
# RUN npm install -g @angular/cli
# We copy the package.json where all the project libraries are referenced.
# Keep in mind that if we use a library that must be called from the Allianz domain, such as the UI components, the host must have access to that domain, otherwise we will receive an error when installing the dependency.
COPY package*.json ./
RUN npm ci

COPY . ./
# will only re-run if there's a change in the package*.json files
RUN npm run build:prod

# The compilation generates the deployable documents in the following path src/dist/sfms-front/browser,
# You can create the server that benefits you the most.
# Copy the documents already prepared from the following route src/dist/sfms-front/browser


# Nginx server example
FROM nginx:stable AS final
EXPOSE 80
COPY --from=build src/dist/sfms-front/browser  /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# We copy the nginx configuration file that will allow us to do the redirections correctly.