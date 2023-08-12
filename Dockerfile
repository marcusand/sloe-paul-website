FROM node:16

# Create app directory
WORKDIR /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY * ./

# If you are building your code for production
RUN npm ci
RUN npm run build

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start"]