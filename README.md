# 🚀 RagCoder | Modern Full-Stack Portfolio

Welcome to the source code of my personal portfolio website! This project is a highly dynamic, visually immersive web experience built to showcase my journey, projects, and skills as a Full-Stack Developer.

![Portfolio Preview](https://via.placeholder.com/1200x600?text=RagCoder+Portfolio) <!-- Replace with an actual screenshot of your portfolio -->

## ✨ Features

### Frontend (User Interface)
- **Modern Glassmorphism**: Sleek glassy cards with background blurs.
- **Dynamic Neon Accents**: Vibrant glowing borders, shadows, and interactive hover states.
- **Premium Typography**: Utilizes modern Google Fonts (`Outfit` and `Syne`).
- **Smooth Animations**: Integrated with Framer Motion and GSAP for scroll reveals, character text animations, and micro-interactions.
- **Custom Cursor & Scrollbar**: Custom visual elements to enhance the user experience.
- **Fully Responsive**: Flawless design from desktop monitors down to mobile devices.

### Backend (API & Services)
- **Live Contact Form**: Seamlessly send messages directly from the portfolio to the owner's email using the **Resend API**.
- **Dynamic Reviews System**: Fetch and display real user reviews, backed by a MongoDB database.
- **Secure CORS Policies**: Ready for production deployment with proper Express routing.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js + Vite
- Tailwind CSS + Custom Vanilla CSS (for advanced glows)
- Framer Motion & GSAP (Animations)
- Axios (HTTP Client)
- Lucide React & React Icons

**Backend:**
- Node.js & Express.js
- MongoDB + Mongoose (Database)
- Resend API (Email Delivery)
- dotenv & cors

---

## 💻 Getting Started (Local Development)

Because this is a full-stack application, you need to run both the frontend and backend servers simultaneously.

### 1. Clone the repository
```bash
git clone https://github.com/ragcoder/portfolio-website.git
cd "Profile Website"
```

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and set up your environment variables.
```bash
cd backend
npm install
```

Create a `.env` file inside the `/backend` directory and add the following keys:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
RESEND_API_KEY=your_resend_api_key
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, install dependencies, and start the app.
```bash
cd frontend
npm install
```

Create a `.env` file inside the `/frontend` directory and add the backend URL:
```env
VITE_API_URL=http://localhost:3000
```

Start the frontend development server:
```bash
npm run dev
```
Open your browser and visit `http://localhost:5173` to view the website.

---

## 🚀 Production Deployment Notes

When deploying this project to production (e.g., Render, Vercel, Netlify):
1. **Frontend**: Ensure the `VITE_API_URL` environment variable is set to your live backend URL (e.g., `https://my-backend.onrender.com`).
2. **Backend**: Ensure all backend `.env` variables are properly configured in your hosting provider's dashboard. 
3. **MongoDB**: Make sure to whitelist your production server's IP address (or use `0.0.0.0/0`) in MongoDB Atlas Network Access.

---

## 📬 Contact

- **Aditya (RagCoder)**
- **Email**: adityasharma28112006@gmail.com
- **GitHub**: [ragcoder](https://github.com/ragcoder)

---
*Built with passion and purpose by Aditya.*
