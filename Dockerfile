FROM node:18.3.0 As development

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build


FROM node:18.3.0

# ARG NODE_ENV=production

# ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install --only=production

COPY --from=development /usr/src/app/dist ./dist

COPY --from=development /usr/src/app/package.json ./dist

COPY --from=development /usr/src/app/.env ./dist

COPY --from=development /usr/src/app/prisma ./dist/prisma


CMD [ "node", "dist/src/main" ]






