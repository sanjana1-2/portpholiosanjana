# 🎨 Sanjana Bhardwaj - Full Stack Developer Portfolio

A premium, animated portfolio website showcasing projects, skills, and achievements with a modern tech stack and stunning UI/UX.

## ✨ Features

### 🎬 Premium Animations
- **3-Second Welcoming Splash Screen**: Personalized introduction with your profile picture and name
- **Glitter & Sparkle Effects**: Smooth, continuous animations throughout
- **Chromatic Aberration**: Color-shifting text and elements
- **Smooth Scroll Animations**: Sections dissolve and float as you scroll
- **Custom Cursor**: Interactive cursor with magnetic effects

### 🎨 Modern Design
- **Premium Color Palette**: Indigo, Pink, and Cyan accents
- **Responsive Layout**: Works perfectly on all devices
- **Dark Theme**: Eye-friendly, professional appearance
- **Gradient Effects**: Smooth, layered visual depth

### 📱 Sections
- **Hero Section**: Eye-catching introduction with animated text
- **About**: Personal background with statistics
- **Skills**: Organized by category (Languages, Frontend, Backend, Soft Skills)
- **Projects**: Showcase of major projects with tech stack
- **Achievements**: Badges and accomplishments
- **Certificates**: Gallery of certifications
- **CV**: Downloadable resume
- **Education**: Timeline of educational background
- **Contact**: Multiple ways to get in touch
- **Footer**: Social links and copyright

## 🛠️ Tech Stack

### Frontend
- **React.js**: UI library
- **CSS3**: Advanced animations and styling
- **Axios**: HTTP client for API calls

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **JWT**: Authentication

### Tools & Platforms
- **Git & GitHub**: Version control
- **Netlify**: Deployment (Frontend)
- **Heroku/Railway**: Deployment (Backend)

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/sanjana1-2/PORTFOLIO.git
cd PORTFOLIO
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. **Configure environment variables**
```bash
# Create .env file in server directory
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. **Start the application**
```bash
# From root directory
npm run dev

# Or separately:
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
cd client
npm start
```

## 🎯 Key Features Explained

### Splash Screen
- Displays for 3 seconds on initial load
- Shows profile picture with glowing effects
- Animated name reveal
- Progress bar animation
- Smooth transition to main portfolio

### Animations
- **Profile Image**: Pulsing glow with floating particles
- **Section Headings**: Chromatic text shifting
- **Cards**: Shimmer effects on hover
- **Buttons**: Gradient fills with glitter effects
- **Cursor**: Custom interactive cursor

### Color Scheme
- **Primary**: Indigo (#6366f1)
- **Secondary**: Pink (#ec4899)
- **Accent**: Cyan (#06b6d4)
- **Dark Background**: Deep Slate (#0f172a)

## 📊 Project Structure

```
PORTFOLIO/
├── client/                 # React frontend
│   ├── public/
│   │   ├── images/        # Profile, certificates, projects
│   │   └── index.html
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── elegant.css
│   │   ├── splash-welcome.css
│   │   └── index.js
│   └── package.json
├── server/                # Express backend
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── index.js
│   ├── .env
│   └── package.json
├── package.json
└── README.md
```

## 🚀 Deployment

### Frontend (Netlify)
1. Connect GitHub repository
2. Build command: `cd client && npm run build`
3. Publish directory: `client/build`

### Backend (Railway/Heroku)
1. Connect GitHub repository
2. Set environment variables
3. Deploy with Node.js buildpack

## 📝 Content

### Skills
- **Languages**: C++, JavaScript, C, PHP, Python, Java
- **Frontend**: HTML, CSS, Bootstrap, React, Tailwind
- **Backend**: Node.js, MySQL, MongoDB, REST APIs, JWT
- **Soft Skills**: Problem-solving, Team player, Time management

### Projects
1. **Live Classroom System** (Oct-Nov 2025)
   - Real-time sessions, attendance tracking, resource sharing
   - Tech: React, Tailwind, Node.js, MySQL

2. **Online Zoo Platform** (Feb 2025)
   - Animal database, ticket booking, weather integration
   - Tech: HTML, CSS, Tailwind, JavaScript, PHP, MySQL

### Achievements
- 5-Star Gold Badge in Java (HackerRank)
- 4-Star Silver Badge in C++ (HackerRank)
- Hackathon participant
- Idea pitching competition

## 🔗 Links

- **GitHub**: https://github.com/sanjana1-2
- **LinkedIn**: https://linkedin.com/in/sanjana21
- **Email**: sanjana.rajbhar321@gmail.com
- **Phone**: +91-9891065976

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with React and modern web technologies
- Animated with CSS3 and JavaScript

---

**Last Updated**: January 2026
**Version**: 2.0 (Premium UI with Animations)
