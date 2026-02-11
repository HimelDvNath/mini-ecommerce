# 🛒 Mini E-Commerce Backend API

A production-ready **RESTful backend API** for a mini e-commerce platform.  
This system simulates core e-commerce functionalities including authentication, role-based access control, product management, cart operations, and order processing with strong business logic and data consistency.

## 🔐 Authentication & Authorization

- User Registration  
- User Login  
- JWT-based authentication  
- Role-based access control:
  - **Admin**
  - **Customer**
- Secure route protection  
- Fraud prevention mechanisms  
- Business rule enforcement  

---

## 📦 Product Management (Admin Only)

- Add new products  
- Update product details  
- Delete products  
- Manage product stock  
- Prevent negative inventory  

---

## 🛍️ Customer Features

- Add product to cart  
- Remove product from cart  
- View cart  
- Place order  
- Automatic stock validation  
- Backend order total calculation  

---

## 📏 Business Rules

- Customers cannot order more than available stock  
- Order total is calculated on the backend  
- Product stock is deducted only after successful order placement  
- Prevent negative inventory  
- Ensure transactional data consistency  
- Atomic order processing  

---
## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **PostgreSQL**
- **NeonDB**
- **JWT Authentication**
- **Vercel (Deployment)**

---

## 📂 Project Structure
- follow Moduler structure pattern

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/HimelDvNath/mini-ecommerce.git
cd mini-ecommerce
```
```bash
npm install
```
```bash
PORT=5000
CONNECTION_STRING = your_postgres_url
SECRET = your_secret_key
```
```bash
npm run dev
```
or use deployment live link
```bash
https://mini-ecommerce-ene1wmm0t-himel-devnaths-projects.vercel.app/
```
## Database Schema: https://drawsql.app/teams/himel-1/diagrams/mini-ecommerce

## 📡 API Endpoints

### 🔐 Authentication Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register a new user (Customer/Admin) |
| POST | `/api/auth/login` | Public | User login and JWT token generation |

---

### 👑 Admin Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/admin/orders` | Admin | Get all customer orders |
| PATCH | `/api/admin/orders/:id` | Admin | Update order status |
| GET | `/api/admin/products` | Admin | Get all products |

---

### 📦 Product Routes (Admin Only)
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/products` | Admin | Create new product |
| PATCH | `/api/products/:id` | Admin | Update product price & stock details |
| DELETE | `/api/products/:id` | Admin | Delete product |

---

### 🛍️ Customer Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/users/cart/add` | Customer | Add product to cart |
| DELETE | `/api/users/cart/remove` | Customer | Remove product from cart |
| POST | `/api/users/order` | Customer | Place order |

