# Reacter

A full-stack social media platform where users can create posts, like content, comment, follow other users, and chat in real time.

🌐 **Live Demo:** [https://reacter-lyart.vercel.app](https://reacter-lyart.vercel.app)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **User Authentication** - Secure JWT-based authentication with bcrypt password hashing
- **Post Management** - Create, edit, and delete posts with rich content
- **Social Interactions** - Like posts, leave comments, and engage with community
- **Follow System** - Follow/unfollow users and build your network
- **Real-time Messaging** - Chat with other users in real time
- **Notifications** - Stay updated with activity notifications
- **Responsive UI** - Modern React frontend with Lucide React icons
- **Multi-Database Support** - Flexible database configuration (MongoDB, MySQL, PostgreSQL)
- **RESTful API** - Express.js backend with CORS support

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.0.0 - UI library
- **React Router DOM** 7.16.0 - Client-side routing
- **Axios** 1.16.0 - HTTP client for API calls
- **Lucide React** 0.484.0 - Icon library
- **React Scripts** 5.0.1 - Build and development tools
- **Testing Library** - React testing utilities

### Backend
- **Express.js** 4.21.2 - Web framework
- **Node.js** - Runtime environment
- **Mongoose** 8.12.2 - MongoDB ODM
- **Sequelize** 6.37.6 - SQL ORM (MySQL/PostgreSQL)
- **JWT** 9.0.2 - JSON Web Token authentication
- **bcryptjs** 3.0.2 - Password hashing
- **CORS** 2.8.5 - Cross-Origin Resource Sharing
- **dotenv** 16.4.7 - Environment variable management

### Database
- **MongoDB** - Primary database (NoSQL)
- **MySQL** / **PostgreSQL** - Optional SQL databases

### Development
- **Nodemon** 3.1.9 - Auto-restart server during development

---

## 📁 Project Structure

```
Reacter/
├── frontend/                 # React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   ├── package.json
│   └── README.md
├── backend/                  # Express.js server
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── controllers/
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── .vscode/                  # VS Code settings
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (or MySQL/PostgreSQL as alternative)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aryan-Jadon18/Reacter.git
   cd Reacter
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   cd ..
   ```

### Environment Setup

1. **Create a `.env` file in the backend directory:**
   ```bash
   cd backend
   cp .env.example .env  # or create manually
   ```

2. **Configure environment variables in `backend/.env`:**
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Database Configuration (MongoDB recommended)
   MONGODB_URI=mongodb://localhost:27017/reacter
   # OR for MySQL:
   # MYSQL_HOST=localhost
   # MYSQL_USER=root
   # MYSQL_PASSWORD=your_password
   # MYSQL_DATABASE=reacter
   # OR for PostgreSQL:
   # POSTGRES_HOST=localhost
   # POSTGRES_USER=postgres
   # POSTGRES_PASSWORD=your_password
   # POSTGRES_DATABASE=reacter

   # JWT Configuration
   JWT_SECRET=your_secret_key_here
   JWT_EXPIRE=7d

   # CORS Configuration
   FRONTEND_URL=http://localhost:3000

   # Socket.io Configuration (for real-time messaging)
   SOCKET_URL=http://localhost:5000
   ```

3. **Make sure MongoDB is running locally** or update the connection URI

### Running the Application

#### Terminal 1 - Run the Backend:
```bash
cd backend
npm run dev
```
✅ Backend server will start on `http://localhost:5000`

#### Terminal 2 - Run the Frontend:
```bash
cd frontend
npm start
```
✅ Frontend will open automatically at `http://localhost:3000`

---

## ⚙️ Configuration

### Database Selection

The backend supports multiple databases through environment variables:

**MongoDB** (Recommended):
```env
MONGODB_URI=mongodb://localhost:27017/reacter
```

**MySQL**:
```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DATABASE=reacter
```

**PostgreSQL**:
```env
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DATABASE=reacter
```

### CORS Settings

Configure cross-origin requests by updating the CORS origin in your backend:
```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
```

---

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/logout` | User logout |
| GET | `/api/auth/profile` | Get user profile (JWT required) |

### Posts Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| POST | `/api/posts` | Create a new post (JWT required) |
| GET | `/api/posts/:id` | Get post by ID |
| PUT | `/api/posts/:id` | Update post (JWT required) |
| DELETE | `/api/posts/:id` | Delete post (JWT required) |
| POST | `/api/posts/:id/like` | Like a post (JWT required) |
| POST | `/api/posts/:id/comment` | Add comment (JWT required) |

### Users Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/:id` | Get user profile |
| POST | `/api/users/:id/follow` | Follow user (JWT required) |
| POST | `/api/users/:id/unfollow` | Unfollow user (JWT required) |
| GET | `/api/users/:id/followers` | Get user's followers |
| GET | `/api/users/:id/following` | Get user's following list |

### Messaging Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/messages/:userId` | Get chat history |
| POST | `/api/messages/:userId` | Send message (JWT required) |
| DELETE | `/api/messages/:id` | Delete message (JWT required) |

---

## 📝 Scripts

### Backend Scripts
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests
```

### Frontend Scripts
```bash
npm start        # Start development server on port 3000
npm build        # Build for production
npm test         # Run test suite
npm eject        # Eject from Create React App (irreversible)
```

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Guidelines
- Follow existing code style
- Add comments for complex logic
- Test your changes before submitting
- Update documentation as needed

---

## 🐛 Troubleshooting

### Backend won't start
- Ensure MongoDB/Database is running
- Check `.env` file configuration
- Verify port 5000 is not in use: `lsof -i :5000`

### Frontend won't start
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear npm cache: `npm cache clean --force`
- Check if port 3000 is available

### Database connection issues
- Verify database credentials in `.env`
- Ensure database service is running
- Check connection string format

---

## 📄 License

This project is licensed under the **ISC License**. See the `LICENSE` file for details.

---

## 📧 Contact & Support

- **GitHub Issues**: [Open an issue](https://github.com/Aryan-Jadon18/Reacter/issues)
- **Repository**: [Aryan-Jadon18/Reacter](https://github.com/Aryan-Jadon18/Reacter)
- **Live Demo**: [https://reacter-lyart.vercel.app](https://reacter-lyart.vercel.app)

---

## 🙏 Acknowledgments

This project was built to explore scalable full-stack architecture and modern web development practices. Thanks to the open-source community for incredible tools and libraries!

---

**Built with ❤️ by Aryan-Jadon18**

**Happy Coding! 🚀**
