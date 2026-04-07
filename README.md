# 🚗 Smart Parking System with AI

A full-stack **Smart Parking Management System** built using **React, Node.js, MongoDB, and Python AI**.  
This project helps manage **parking slots, vehicle entry/exit, payments, revenue tracking, and AI-based occupancy prediction**.

---

## 📌 Features

### 🚘 Parking Management
- Vehicle **Entry / Exit**
- Automatic parking record creation
- Entry & exit time tracking
- Hourly parking charge calculation
- Monthly parking plan support
- Permanent and hourly slot support

### 🅿️ Slot Visualization
- **10 parking slots UI**
  - `P1–P5` → Permanent
  - `H1–H5` → Hourly
- Real-time **Occupied / Vacant status**
- Hover tooltip with:
  - Slot number
  - Status
  - Vehicle number
  - Entry time

### 💳 Payment System
- Monthly payment tracking
- Payment status storage
- Revenue summary
- Hourly billing

### 📊 Dashboard
- Total slots
- Occupied slots
- Vacant slots
- Total revenue
- Vehicles served

### 🤖 AI Prediction
Python-based AI service predicts:
- expected occupancy in next hour
- future slot usage

---

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS3
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### AI Service
- Python
- Flask

---

## 📂 Project Structure

```text
parking-system/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   └── src/
│       ├── App.js
│       └── App.css
│
├── ai-service/
│   └── app.py
│
└── README.md
