# 🌱 CLT Go Green – Sustainability Task Tracker

**CLT Go Green** is a web application that encourages users to take small but meaningful steps toward sustainability. Through daily and weekly challenges, users can complete eco-friendly tasks, earn **points ("beans")**, and track their environmental impact — all while learning about sustainable living.

---

## 🚀 Live Demo

🌍 **App URL:** [https://clt-go-green.onrender.com](https://clt-go-green.onrender.com)  

---

## 🧩 Features

- ✅ **User Dashboard:** Track challenges, progress, and total beans earned  
- 🌿 **Sustainability Challenges:** Complete eco-friendly tasks and submit proof for rewards  
- 🤖 **AI Integration:** Uses OpenAI API to provide sustainability tips, challenge suggestions, and eco-feedback  
- 🔒 **Authentication:** Secure login/signup (JWT-based)  
- 💾 **CRUD Functionality:** Create, Read, Update, and Delete user tasks and submissions  
- 📊 **Leaderboard:** See the community impact  
- ☁️ **Cloud Deployed:** Hosted with Render (frontend + backend) and AWS (database)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Vite), Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | AWS RDS (PostgreSQL / MySQL) |
| **AI Integration** | OpenAI API |
| **Hosting** | Render (Web & Server) |
| **Version Control** | GitHub |
| **Deployment Tools** | GitHub, Render Deploy Hooks |

---

## 🧠 Architecture Overview

Client (React + Vite + Tailwind)
        |
        | (Axios / Fetch)
        v
Server (Node.js + Express)
        |
        |--> Internal API (CRUD endpoints)
        |--> External APIs (OpenAI, etc.)
        v
Database (AWS RDS)

---

## 📦 Installation & Setup

**Prerequisites**
Node.js (v18+)
AWS RDS credentials
OpenAI API key
Render account for deployment

**Local Setup**
# 1. Clone the repository
git clone https://github.com/yourusername/clt-go-green.git
cd clt-go-green

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit the .env file with your database + API keys

# 4. Start the backend
cd server
npm run dev

# 5. Start the frontend
cd ../client
npm run dev

---

## 💬 Future Improvements

Mobile-friendly progressive web app (PWA)

Add sustainability news feed via third-party API

Real-time leaderboard updates using WebSockets

Carbon footprint tracker integration

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 👥 Contributors
Team Members – Thanh Nay, Jane Le, Jordan Mobley, Michael Howey
