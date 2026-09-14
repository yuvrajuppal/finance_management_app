# Finova — Day-to-Day Personal Expense & Finance Tracker

> 🚧 **Work in Progress**: This project is currently in active development and will be live soon! 🚀
>
> **Take control of your daily financial habits.** Finova is an institutional-grade, modern personal finance tracker built to help users manage, visualize, and optimize their day-to-day out-of-pocket expenses.

---

## 📌 Project Vision & Overview

Most budgeting apps only alert users when they've already overspent at the end of the month. **Finova** re-architects personal finance around the **daily spending cycle**. By establishing a clear daily allowance target (e.g., \$80/day), users can log everyday micro-transactions (coffee, commute, groceries, lunches), visualize their spending trajectory in real time, and route unspent surplus directly into savings.

### Why Finova?
- **Real-Time Frictionless Logging**: Quickly record day-to-day expenses on the go with categories, timestamps, and payment methods.
- **Daily Budget Guard**: Never wonder if you can afford that dinner. Know your exact remaining daily allowance at a glance.
- **Micro-Savings Stash**: Turn everyday discipline into wealth by locking end-of-day surplus directly into personal savings targets.
- **Zero Clutter, Maximum Clarity**: Clean, institutional aesthetic inspired by corporate modern minimalism with high readability.

---

## 🚀 Key Features

### 1. Daily Allowance & Budget Guard
- **Daily Pace Tracking**: Live comparison of today's actual spending vs. your daily ceiling.
- **Pacing Alerts**: Status indicators (*Under Limit*, *On Pace*, *Near Limit*) to prevent overspending before it happens.
- **Habit Streaks**: Motivating daily streaks for staying under budget.

### 2. Expense Logging & Categorization
- **Quick-Add Transaction Flow**: Log an expense with merchant name, category, payment method, and amount in seconds.
- **Core Daily Categories**:
  - ☕ Coffee & Dining Out
  - 🛒 Groceries & Supermarkets
  - 🚇 Transit & Commuting
  - 💊 Essentials & Personal Care
  - 🎟️ Entertainment & Snacks
- **Multi-Wallet Support**: Track which card or wallet was tapped (Apple Pay, Debit, Credit Cards, Cash).

### 3. Visual Analytics & Reports
- **Dynamic 7-Day & Monthly Spending Trajectory**: Interactive charts mapping daily actuals against allowance ceilings and moving averages.
- **Spending Distribution Donut**: Visual breakdown showing percentage share of each category for the week and month.
- **Monthly Cap Meter**: Real-time progress bar showing overall monthly budget consumption and remaining days.

### 4. Enterprise-Grade Authentication & Security
- **JWT Authentication via HTTP-Only Cookies**: Secure session token (`usertoken`) with strict cookie protection (`SameSite` and `Secure` configured for production).
- **Interactive Password Strength Meter**: Live scoring with dynamic requirements feedback (8+ chars, mixed case, numbers, special symbols).
- **Session Persistence**: Remember-me functionality (30-day persistent session vs 1-day standard).

---

## 🛠️ Architecture & Tech Stack

```
finance_management_app/
├── frontend/               # Next.js 16 (App Router) User Application
│   ├── src/app/(auth)/     # Authentication pages (Login, Signup)
│   └── src/app/globals.css # Tailwind CSS v4 styling
│
├── backend/                # Express 5 REST API & Prisma Engine
│   ├── prisma/             # Multi-file Prisma Schema & Migrations
│   ├── src/controller/     # Controllers (Auth, Users, Expenses)
│   ├── src/routes/         # Express API Route Handlers
│   └── src/config/         # Database & environment configurations
│
└── adminpanel/             # Administrative Portal
```

### Technology Highlights

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Frontend** | **Next.js 16 (App Router)** | Modern React 19 components, server-side rendering, client transitions |
| **Styling** | **Tailwind CSS v4** | Pure utility-first styling with zero custom CSS files, custom Finova palette |
| **Backend** | **Node.js & Express 5** | High-performance asynchronous REST API with cookie parser & CORS |
| **ORM** | **Prisma 7** | Multi-schema modular architecture (`prisma/schema/*.prisma`) with MariaDB/MySQL adapter |
| **Database** | **MySQL** | Relational storage for users, budgets, categories, and transactions |
| **Security** | **bcrypt & jsonwebtoken** | Salted hashing for passwords and cryptographically signed JWT tokens |

---

## 🗄️ Database Schema Preview

### `User` Model (`backend/prisma/schema/user.prisma`)
```prisma
model User {
  id            String    @id @default(uuid())
  fullName      String
  email         String    @unique
  password      String
  isVerified    Boolean   @default(false)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@map("users")
}
```

---

## 🔌 API Endpoints (Authentication)

Base path: `/userRouter`

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/userRouter/signup` | Registers a new user account with hashed password | Public |
| `POST` | `/userRouter/login` | Authenticates credentials and sets `usertoken` cookie | Public |
| `GET` | `/userRouter/checkislogin` | Validates session cookie or Bearer token and returns user profile | Public / Session |
| `POST` | `/userRouter/logout` | Clears `usertoken` cookie and terminates session | Authenticated |

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js**: v20.x or higher
- **MySQL**: running locally or on a remote server (default port `3306`)
- **npm** or **pnpm**

### 1. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Configure environment variables in backend/.env
# SERVERPORT=3000
# DATABASE_URL="mysql://root:@localhost:3306/finance_management_app"
# JWT_SECRET="your_secure_jwt_secret"

# Generate Prisma Client
npm run pgen

# Push or migrate schema to MySQL database
npm run dbpush

# Start development server
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
Visit `http://localhost:3000` (or `http://localhost:4000`) in your browser.

---

## 🎯 Product Roadmap

- [x] **Authentication UI**: Institutional login & sign-up forms with live password strength validation.
- [x] **Backend Auth Engine**: Register, login, session check, and logout with JWT and `httpOnly` cookies.
- [x] **Database Schema**: Multi-file Prisma 7 configuration with MySQL.
- [ ] **Expenses CRUD**: Create, read, update, and delete daily expense records.
- [ ] **Category & Wallet Management**: Customizable categories and linked payment instruments.
- [ ] **Daily Allowance Engine**: Dynamic computation of remaining daily spend and rollover surplus.
- [ ] **Interactive Dashboard**: Interactive charts, recent transactions table, and category distribution.
- [ ] **Export & Reports**: Download weekly and monthly PDF/CSV expense statements.

---

## 📄 License
ISC License. Designed and developed for modern personal financial management.
