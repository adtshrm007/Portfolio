# 🚀 Engineering Portfolio | Aditya Sharma

Welcome to the source code of my **Engineering Portfolio**. This platform was engineered from the ground up to transcend the traditional "design showcase" and instead serve as a comprehensive, recruiter-focused testament to my capabilities as a Full-Stack Software Engineer.

It combines production-grade system design insights, quantitative engineering metrics, and deep-dive case studies with a premium, glassmorphic aesthetic.

## ✨ Core Engineering Features

### 📊 Quantitative Metrics & Analytics
- **Live Engineering Metrics**: Animated counters showcasing production projects, GitHub repositories, commits, and DSA problems solved.
- **Dynamic Skills Matrix**: A highly structured breakdown of proficiencies across Frontend, Backend, Databases, DevOps, and AI Integrations.

### 🏗️ System Design & Architecture
- **Interactive Architecture Diagrams**: Custom Framer Motion-powered visualizers that map out system dependencies and data flow for full-stack applications.
- **Deep-Dive Case Studies**: Comprehensive breakdowns of featured projects (like *Requesta* and *UpSkillr*), detailing the problem space, architectural decisions, technical challenges, and real-world impact.
- **"Currently Building" Lab**: Live progress tracking of active projects currently in development.

### 💼 Recruiter-Optimized Conversion
- **Targeted CTAs**: Direct "Hire Me" pipelines tailored specifically for Internships, Freelance, and Full-Time Opportunities.
- **Dynamic Social Proof & Trust**: Integrates a live, full-stack review system backed by MongoDB, alongside static open-source contribution metrics.
- **GitHub Integration**: Direct display of developer credibility (commits, PRs merged, top languages).

---

## 🛠️ Tech Stack

**Frontend Architecture:**
- **React.js + Vite**: High-performance rendering and lightning-fast HMR.
- **Tailwind CSS**: Strict adherence to a design system utilizing custom design tokens (e.g., `bg-bg`, `text-gray-text`, `accent`).
- **Framer Motion & GSAP**: Complex scroll orchestration, micro-animations, and dynamic layout transitions.
- **Lucide React & React Icons**: Lightweight, scalable iconography (including GitHub Octicons).

**Backend Infrastructure:**
- **Node.js & Express.js**: RESTful API endpoints.
- **MongoDB + Mongoose**: Document database for storing dynamic social proof and reviews.
- **Resend API**: Reliable transactional email delivery for contact forms.

---

## 💻 Local Development Environment

This is a decoupled full-stack application. You will need to run both the client and server environments.

### 1. Clone the repository
```bash
git clone https://github.com/adtshrm007/portfolio-website.git
cd "Profile Website"
```

### 2. Backend Initialization
Navigate to the backend directory, install dependencies, and configure environment variables.
```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
RESEND_API_KEY=your_resend_api_key
```

Start the backend daemon:
```bash
npm run dev
```

### 3. Frontend Initialization
In a new terminal instance, navigate to the frontend directory.
```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend`:
```env
VITE_API_URL=http://localhost:3000
```

Start the Vite development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

---

## 🚀 Deployment Architecture

When deploying to production (e.g., Render, Vercel, AWS):
1. **Frontend**: Inject the production backend URL into `VITE_API_URL`.
2. **Backend**: Ensure all environment variables are securely injected via your hosting provider's secrets management.
3. **Database Security**: Whitelist your production server IPs in MongoDB Atlas Network Access.

---

## 📬 Connect With Me

- **Aditya Sharma**
- **Email**: adtshrm277@gmail.com
- **GitHub**: [@adtshrm007](https://github.com/adtshrm007)
- **LinkedIn**: [Aditya Sharma](https://www.linkedin.com/in/aditya-sharma-836856315/)

---
*Engineered to build the future, one system at a time.*
