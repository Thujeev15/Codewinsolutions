# Codewinsolutions - IT Company Website

![CodeFlex Solutions](https://img.shields.io/badge/CodeFlex-Solutions-00d4ff?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat&logo=mongodb)

A modern, professional website for CodeFlex Solutions featuring:
- ✨ Live video background
- 🎨 Glassmorphism effects
- 🌀 3D animations with Three.js
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 🔥 React frontend with Node.js backend
- 💾 MongoDB database integration

## 🚀 Tech Stack

### Frontend
- **React 18.2** - Modern UI library
- **React Router** - Client-side routing
- **Framer Motion** - Advanced animations
- **Three.js & React Three Fiber** - 3D graphics
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager

## 🛠️ Installation

### 1. Clone or navigate to the project directory

```bash
cd "/Users/thujeevkamaleswaran/Desktop/oue new"
```

### 2. Install all dependencies

```bash
npm run install-all
```

This will install dependencies for the root, client, and server.

Alternatively, install manually:

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

### 3. Set up MongoDB

**Option A: Local MongoDB**
1. Start MongoDB service:
   ```bash
   # macOS (using Homebrew)
   brew services start mongodb-community
   
   # Windows
   net start MongoDB
   
   # Linux
   sudo systemctl start mongod
   ```

**Option B: MongoDB Atlas (Cloud)**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and get your connection string
3. Update `server/.env` with your Atlas connection string

### 4. Configure environment variables

The server is pre-configured with default settings in `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/codeflex
NODE_ENV=development
```

Update these if needed.

## 🏃‍♂️ Running the Application

### Development Mode (Recommended)

Run both frontend and backend concurrently:

```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

### Run Separately

**Frontend only:**
```bash
npm run client
```

**Backend only:**
```bash
npm run server
```

## 🗄️ Database Setup

### Initialize Sample Data

Once the server is running, initialize sample services data:

**Using curl:**
```bash
curl -X POST http://localhost:5000/api/init-services
```

**Using browser:**
Navigate to: http://localhost:5000/api/init-services

This will populate the database with sample services.

### API Endpoints

- `GET /api/health` - Server health check
- `GET /api/services` - Get all services
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)
- `POST /api/init-services` - Initialize sample services

## 📁 Project Structure

```
codeflex-solutions/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   │   │   └── Scene3D.js
│   │   ├── pages/         # Page components
│   │   │   ├── Home.js
│   │   │   ├── Home.css
│   │   │   ├── Services.js
│   │   │   ├── Services.css
│   │   │   ├── About.js
│   │   │   ├── About.css
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                # Node.js backend
│   ├── server.js         # Express server & API routes
│   ├── .env              # Environment variables
│   └── package.json
├── package.json          # Root package file
└── README.md
```

## 🎨 Color Theme

The website uses the CodeFlex brand colors:
- **Cyan**: `#00d4ff`
- **Turquoise**: `#00ffd4`
- **Dark Blue**: `#0a1628`
- **Darker Blue**: `#050d1a`

## ✨ Features

### Home Page
- Live video background (office setup)
- 3D rotating sphere animation
- Glassmorphism stat cards with parallax effect
- Services preview section
- Tech stack showcase

### Services Page
- Detailed service cards with features
- 4-step process timeline
- Hover animations and transitions

### About Page
- Mission & Vision cards
- Company story
- Core values grid
- Impact statistics

### Contact Page
- Interactive contact form
- Contact information cards
- Form validation
- Success/Error messages
- MongoDB integration for storing inquiries

## 🔧 Customization

### Change Video Background
Edit [client/src/pages/Home.js](client/src/pages/Home.js):
```javascript
<video autoPlay loop muted playsInline>
  <source src="YOUR_VIDEO_URL" type="video/mp4" />
</video>
```

### Update Brand Colors
Edit [client/src/index.css](client/src/index.css):
```css
:root {
  --cyan: #00d4ff;
  --turquoise: #00ffd4;
  --dark-blue: #0a1628;
  --darker-blue: #050d1a;
}
```

### Modify Services
Update services via the database or edit the default array in [client/src/pages/Services.js](client/src/pages/Services.js).

## 🚀 Production Build

### Build the frontend

```bash
cd client
npm run build
```

### Deploy

The build folder can be deployed to:
- **Vercel** (Frontend)
- **Heroku** (Backend)
- **Netlify** (Frontend)
- **DigitalOcean** (Full stack)
- **AWS** (Full stack)

### Environment Setup for Production

Update `server/.env`:
```env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
PORT=5000
```

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Support

For issues or questions:
- Email: info@codeflex.lk
- Location: Colombo, Sri Lanka

---

**Built with ❤️ by CodeFlex Solutions**

*Innovate. Adapt. Deliver.*
