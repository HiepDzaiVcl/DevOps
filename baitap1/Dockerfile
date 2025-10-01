FROM node:20-alpine

WORKDIR /app

# Copy package.json và cài deps
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose port 5173 (mặc định Vite)
EXPOSE 5173

# Run Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]