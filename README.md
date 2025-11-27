Project2_Backend_API
A fully functional Node.js + Express REST API with MongoDB (Mongoose), JWT Authentication, Role-Based Access, and a structured MVC architecture.

Features
User authentication (Register, Login)

JWT-based authentication

Protected routes (user & admin)

CRUD for Products

Orders system

MongoDB + Mongoose models

Middleware-based auth

Clean and scalable project structure

Docker-ready for easy deployment

Project Structure
Project2_Backend_API/
  |-- server.js
  |-- package.json
  |-- .env
  |
  |-- /config
  |     └── db.js
  |
  |-- /models
  |     ├── User.js
  |     ├── Product.js
  |     └── Order.js
  |
  |-- /routes
  |     ├── authRoutes.js
  |     ├── productRoutes.js
  |     └── orderRoutes.js
  |
  |-- /controllers
  |
  |-- /middleware
        └── auth.js
  |
  |-- Dockerfile
  |-- docker-compose.yml

Setup
1️⃣ Install Dependencies
npm install

2️⃣ Environment Variables

Create a .env file in the project root:

PORT=5000
MONGO_URI=mongodb://localhost:27017/project2_db
JWT_SECRET=replace_with_secure_secret
JWT_EXPIRES_IN=7d
SALT_ROUNDS=10

Run Server

Development mode (with nodemon):

npm run dev


Production mode:

npm start

API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/auth/me	Get current logged-in user
Products Routes
Method	Endpoint	Description
GET	/api/products	List all products
GET	/api/products/:id	Get single product
POST	/api/products	Create product (admin)
PUT	/api/products/:id	Update product (admin)
DELETE	/api/products/:id	Delete product (admin)
Orders Routes
Method	Endpoint	Description
POST	/api/orders	Create order (authenticated)
GET	/api/orders/my	Get current user’s orders
GET	/api/orders	Get all orders (admin)
PUT	/api/orders/:id	Update order status (admin)
Testing with cURL
Register User
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"123456"}'

Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@test.com","password":"123456"}'

Docker
Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]

Docker Compose (Optional, includes MongoDB)
version: "3.9"

services:
  api:
    build: .
    container_name: project2_api
    restart: always
    ports:
      - "5000:5000"
    environment:
      PORT: 5000
      MONGO_URI: mongodb://mongo:27017/project2_db
      JWT_SECRET: replace_with_secure_secret
    depends_on:
      - mongo

  mongo:
    image: mongo:6
    container_name: project2_mongo
    restart: always
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:

Run with Docker
Build and run manually:
docker build -t project2_api .
docker run -p 5000:5000 project2_api

Run with Docker Compose:
docker compose up --build


Your API will now be available at:

http://localhost:5000

References
Books

Mario Casciaro — Node.js Design Patterns

Shannon Bradshaw — MongoDB: The Definitive Guide

Journals / Papers

IEEE — REST API Architecture and Best Practices

ACM — NoSQL Databases for Scalable E-Commerce Systems

Conferences

NodeConf EU

MongoDB World

YouTube Topics

Node.js Express REST API Tutorial

MongoDB CRUD with Mongoose

JWT Authentication Node.js

### Author
Hesbon Angwenyi
Node.js | Express | MongoDB | REST API Developer