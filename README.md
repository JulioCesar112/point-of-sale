# 🛍️ E-commerce API

This is a backend RESTful API for an e-commerce platform built with **Node.js**, **Express**, **Sequelize**, and **PostgreSQL**. It includes features such as authentication, category management, and role-based access control.

---

### 📦 Features

- User registration and login with JWT authentication
- Password hashing using `bcryptjs`
- Role-based access (admin/user)
- CRUD for product categories
- Organized file structure (controllers, models, routes)
- PostgreSQL + Sequelize ORM integration

---

### 🚀 Technologies

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT (jsonwebtoken)
- bcryptjs

---

### 🔧 Installation

```bash
git clone https://github.com/tuusuario/e-commerce.git
cd e-commerce
npm install

PORT=3000
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
JWT_SECRET=your_secret_key

🧪 Running the App
npm run dev
Or in production:
npm start

🧵 Project Structure
src/
├── config/             # Sequelize and DB config
├── controllers/        # Route handlers
├── models/             # Sequelize models
├── routes/             # Express routes
├── middlewares/        # Auth and error handling
└── app.js              # Express entry point

✅ Endpoints Overview
🧑 Users

    POST /api/v1/users/register - Register new user

    POST /api/v1/users/login - Login and get token

🔐 Auth

    Protected routes via JWT

    Middleware checks admin role

📂 Categories

    GET /api/v1/categories

    GET /api/v1/categories/:id

    POST /api/v1/categories (admin only)

    DELETE /api/v1/categories/:id (admin only)

More routes for products and cart coming soon...
📚 To Do
Categories CRUD
User authentication
Product endpoints
Shopping cart
Order system
Image upload
    Swagger documentation

👤 Author
    Julio César
    GitHub: @JulioCesar112
```
