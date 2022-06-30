FROM node:18.3.0

# WORKDIR /app

COPY package.json .

# RUN yarn install

COPY . .



# RUN yarn build


# FROM node:18.3.0

# # ARG NODE_ENV=production

# # ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package.json .

RUN yarn install

# COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "/dist/src/main" ]






