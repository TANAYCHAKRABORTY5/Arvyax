# 🧘‍♂️ Arvyax - Wellness Session Platform

**Arvyax** is a full-stack application that allows users to:
- 🔐 Register and log in securely
- 🧘 View public wellness sessions (like yoga, meditation)
- 📝 Draft and publish their own custom sessions
- 💾 Auto-save drafts as they type

Built using **React.js (Vite)** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## 📁 Project Structure

Arvyax/
│
├── Arvyax_Frontend/ # React.js + Vite frontend
└── Arvyax_Backend/ # Node.js + Express backend

yaml
Copy
Edit

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Arvyax.git
cd Arvyax
2. Setup Backend (Node.js + Express)
bash
Copy
Edit
cd Arvyax_Backend
npm install           # install dependencies
npm run dev           # start the backend server using nodemon
Note: node_modules is included in .gitignore, so be sure to run npm install.

✅ Create a .env file inside Arvyax_Backend with:

ini
Copy
Edit
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000
3. Setup Frontend (React + Vite)
bash
Copy
Edit
cd ../Arvyax_Frontend
npm install           # install frontend dependencies
npm run dev           # starts Vite dev server on http://localhost:5173
✅ Create a .env file inside Arvyax_Frontend with:

ini
Copy
Edit
VITE_API_URL=http://localhost:3000
📮 API Documentation
🧑‍💼 Auth Routes
Method	Endpoint	Description
POST	/signup	Register a new user
POST	/login	Login and receive JWT

📄 Session Management Routes
Method	Endpoint	Description
GET	/sessions	Get public wellness sessions
GET	/sessions/mysessions	Get the current user's sessions
GET	/sessions/mysessions/:id	View a specific session by ID
POST	/sessions/create	Save or update a draft session
POST	/sessions/publish/:id	Publish a session by ID

🔐 Protected Routes require a valid JWT token in the request header:

http
Copy
Edit
Authorization: Bearer <your_token>
⚙️ Tools & Technologies Used
Frontend: React.js, Tailwind CSS, Vite

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JWT (JSON Web Token)

Dev Tools: Nodemon, Axios, dotenv

🔧 To Run the Project
bash
Copy
Edit
# Backend
cd Arvyax_Backend
npm install
npm run dev

# Frontend (in a separate terminal)
cd Arvyax_Frontend
npm install
npm run dev
