# Project2_Backend_API

Node.js + Express REST API with MongoDB (Mongoose) and JWT authentication.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file (copy from `.env.example`) and fill the values, e.g.
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/project2_db
   JWT_SECRET=replace_with_secure_secret
   ```

3. Start the server (development):
   ```bash
   npm run dev
   ```

## Endpoints (summary)

Auth
- `POST /api/auth/register` — register user (name,email,password)
- `POST /api/auth/login` — login (email,password)
- `GET /api/auth/me` — get current user (requires Authorization header)

Products
- `GET /api/products` — list products (public)
- `GET /api/products/:id` — get product
- `POST /api/products` — create product (admin)
- `PUT /api/products/:id` — update product (admin)
- `DELETE /api/products/:id` — delete product (admin)

Orders
- `POST /api/orders` — create order (authenticated)
- `GET /api/orders/my` — get current user's orders (authenticated)
- `GET /api/orders` — admin: list all orders
- `PUT /api/orders/:id` — admin: update order status

## Notes
- This project is scaffolded and ready to run. You need a running MongoDB instance.
- To create an admin 