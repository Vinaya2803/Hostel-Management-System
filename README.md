# 🏠 Hostel Management System

A complete **MERN Stack Application** designed to simplify and automate hostel management tasks for both **students** and **administrators**.

---

## ✨ Features

### 🔐 Authentication
- Secure Login & Signup for Students and Admins

### 👩‍💼 Admin Panel
- Register new students  
- Manage student records  
- Handle complaints  
- Approve / Reject mess-off requests  
- Generate & approve invoices for hostel and mess fees  

### 👨‍🎓 Student Panel
- Request mess off  
- View and download invoices  
- Submit complaints  

---

## 📦 Installation

### 1️⃣ Prerequisites  
Make sure the following are installed on your system:
- **Node.js**
- **MongoDB** (Local or MongoDB Atlas)

---

### 2️⃣ Clone the Repository

```bash
git clone origin https://github.com/Vinaya2803/Hostel-Management-System.git
cd Hostel-Management-System
```
---
## 🗄️ MongoDB Setup 

1. Create a free cluster on **MongoDB Atlas**  
2. Create a **Database User** with username & password  
3. Copy your connection string (example):
```
mongodb+srv://<username>:<password>@cluster.mongodb.net/hostel
```
4. Paste it in a `.env` file inside **backend**:
```
MONGO_URI=your_connection_string_here
JWT_SECRET=yourJWTsecret
```

---
### 3️⃣ Install Dependencies

#### 📁 Client
```bash
cd client
npm install
```

#### 📁 Backend
```bash
cd ../backend
npm install
```

#### 📁 Root (For concurrently)
```bash
cd ../
npm install -g concurrently
```


## ▶️ Running the Project

```bash
npm run dev
```
---

## 🔑 Demo Login Details

### 👨‍🎓 Student Accounts

| Email            | Password  |
|------------------|-----------|
| kranti@gmail.com | 12345678  |
| vinaya@gmail.com | 12345678  |

### 👩‍💼 Admin Account

| Email                | Password   |
|----------------------|------------|
| shraddha24@gmail.com | 123456789  |


