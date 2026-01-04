# SkillExchange 🌟

A modern, production-ready skill exchange platform that connects people who want to learn new skills with those who can teach them. Exchange knowledge, grow together!

## 🎯 Overview

SkillExchange is a web-based platform designed to facilitate mutual skill learning. Users can offer skills they're proficient in while seeking to learn new ones from others in the community. No money involved—just pure knowledge exchange and mutual growth.

## ✨ Features

- **Smart Matching System**: Algorithm-based matching to connect users with compatible skill exchange partners
- **User Profiles**: Comprehensive profiles showcasing skills to teach and learn
- **Real-time Messaging**: Built-in chat system for communication between partners
- **Request Management**: Handle incoming and outgoing exchange requests efficiently
- **Rating & Feedback**: Community-driven trust system with reviews and ratings
- **Responsive Design**: Fully responsive UI that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions

## 📁 Project Structure

```
Skillexchange/
├── index.html          # Landing page with hero and features
├── login.html          # User login page
├── signup.html         # User registration page
├── dashboard.html      # User dashboard with overview
├── profile.html        # User profile management
├── matches.html        # Browse and find skill exchange matches
├── inbox.html          # Messaging/chat interface
├── requests.html       # Manage exchange requests
├── feedback.html       # Leave and view reviews
├── css/
│   ├── global.css      # Global styles and design system
│   └── components.css  # Reusable component styles
├── js/
│   └── main.js         # Core JavaScript functionality
└── assets/
    └── images/         # Image assets
```

## 🎨 Design System

### Color Palette
- **Primary**: `#6c63ff` (Purple)
- **Secondary**: `#ff6584` (Pink)
- **Accent**: `#00d4aa` (Teal)
- **Dark Background**: `#0a0e27`
- **Text**: White and shades

### Typography
- **Primary Font**: Inter
- **Heading Font**: Poppins

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No backend setup required - this is a frontend-only application

### Installation

1. Clone the repository:
```bash
git clone https://github.com/maviyaattar/Skillexchange.git
```

2. Navigate to the project directory:
```bash
cd Skillexchange
```

3. Open `index.html` in your web browser or use a local development server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

4. Visit `http://localhost:8000` in your browser

## 💡 Usage

### For New Users
1. Visit the landing page
2. Click "Get Started" or "Sign Up"
3. Create your account
4. Set up your profile with skills you can teach and want to learn
5. Browse matches and connect with compatible partners
6. Start exchanging skills!

### Key Pages
- **Landing Page**: Learn about the platform and its features
- **Dashboard**: Overview of your exchanges, connections, and activity
- **Matches**: Find and connect with compatible skill exchange partners
- **Inbox**: Chat with your matches and coordinate sessions
- **Requests**: Manage incoming and outgoing connection requests
- **Profile**: Update your skills, bio, and view your ratings
- **Feedback**: Leave reviews for completed exchanges

## 🔧 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables and Flexbox/Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Local Storage**: Client-side data persistence (for demo purposes)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Future Enhancements

- Backend integration with RESTful API
- Real database integration
- Email notifications
- Video call integration
- Calendar scheduling
- Payment system for premium features
- Mobile app (React Native/Flutter)
- AI-powered matching algorithm improvements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This is currently a frontend-only demonstration. All data is stored locally in the browser and uses mock data for demonstration purposes. For production use, backend integration with proper authentication, database, and API would be required.