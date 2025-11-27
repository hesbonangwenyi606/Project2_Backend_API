Project2_Backend_API

A fully functional Node.js + Express REST API with MongoDB (Mongoose), JWT Authentication, Role-Based Access, and structured MVC architecture.

🚀 Features

User authentication (Register, Login)

JWT-based auth

Protected routes (user & admin)

CRUD Products

Orders system

MongoDB + Mongoose models

Middleware-based auth

Clean project structure

📁 Project Structure
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

🛠️ Setup
1️⃣ Install Dependencies
npm install

2️⃣ Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=mongodb://localhost:27017/project2_db
JWT_SECRET=replace_with_secure_secret

3️⃣ Run Server (Development)
npm run dev

4️⃣ Run Server (Production)
npm start

📌 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/auth/me	Get logged-in user
🛒 Products
Method	Endpoint	Description
GET	/api/products	List all products
GET	/api/products/:id	Get product
POST	/api/products	Create product (admin)
PUT	/api/products/:id	Update product (admin)
DELETE	/api/products/:id	Delete product (admin)
📦 Orders
Method	Endpoint	Description
POST	/api/orders	Create order (auth)
GET	/api/orders/my	Get user’s orders (auth)
GET	/api/orders	Get all orders (admin)
PUT	/api/orders/:id	Update order status (admin)
🧪 Testing With cURL
Register User
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"123456"}'

Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@test.com","password":"123456"}'

📚 References
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

👤 Author

Project2 Backend API by Hesbon Angwenyi
Node.js | Express | MongoDB | REST API Developer

If you want, I can also generate:

✔ API Documentation PDF
✔ Swagger UI Docs
✔ Full frontend for this API (React, Next.js, Vue)

Just tell me!