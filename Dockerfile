# ============================
# 1. Base Image
# ============================
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json first (better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the project
COPY . .

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
