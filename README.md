# Instagram Clone Using React
---

## 🚀 Project Overview
A lightweight Instagram-like single-page application built using **pure React** (no external UI frameworks).  
The app includes a minimal social feed with four core screens:
- **Posts**
- **Suggestions**
- **Story**
- **Profile**
- - **CRUD OPERATIONS**

It uses an **inbuilt JSON database (`db.json`)** to simulate backend data.

---

## ✨ What This Repo Shows
- Clean structure using **functional components + hooks** (`useState`, `useEffect`, `useContext`)
- **React Router** for page navigation
- API calls using **fetch** and **axios**
- Mock REST API powered by **json-server**
- Basic UI interactions: view posts, like, comment (local state), show stories & profile
- CRUD OPERATIONS

> _This is a frontend-only learning project. To make it production-ready, you should replace the JSON DB with a real backend + authentication._

---

## 🧰 Tech Stack
| Area | Technology |
|------|------------|
| UI | React (Hooks) |
| Routing | react-router-dom |
| API Calls | fetch & axios |
| Mock API | json-server (`db.json`) |
| Styling | Bootstrap CSS |

---

## 📋 Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

---


# Install dependencies
npm install

🔁 Start the Inbuilt JSON DB <br>
Install json-server (only once):<br>
npm install -g json-server<br>

# Run the mock API:
json-server --watch db.json --port 3000 <br>
The React app expects the JSON API to run at port 3000.<br>

# 📦 Deployment
npm run dev
