# Dockerfile for API Rate Limiting System in TypeScript

FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY ./src ./src

# Build the TypeScript files
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the service
CMD ["npm", "start"]
