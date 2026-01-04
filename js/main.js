/**
 * SKILL EXCHANGE - MAIN JAVASCRIPT
 * Common functionality and utilities
 */

// Navigation Toggle for Mobile
const initNavigation = () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navbar-nav');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  }
};

// Form Validation
const validateForm = (formElement) => {
  const inputs = formElement.querySelectorAll('.form-input, .form-textarea, .form-select');
  let isValid = true;
  
  inputs.forEach(input => {
    const errorElement = input.nextElementSibling;
    
    // Remove previous error
    if (errorElement && errorElement.classList.contains('form-error')) {
      errorElement.remove();
    }
    
    // Check if required field is empty
    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      showError(input, 'This field is required');
    }
    
    // Email validation
    if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        isValid = false;
        showError(input, 'Please enter a valid email');
      }
    }
    
    // Password validation (min 6 characters)
    if (input.type === 'password' && input.value && input.value.length < 6) {
      isValid = false;
      showError(input, 'Password must be at least 6 characters');
    }
  });
  
  return isValid;
};

const showError = (input, message) => {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;
  input.parentNode.insertBefore(errorDiv, input.nextSibling);
  input.style.borderColor = 'var(--error)';
  
  // Clear error on input
  input.addEventListener('input', () => {
    errorDiv.remove();
    input.style.borderColor = 'transparent';
  }, { once: true });
};

// Modal Functionality
const initModals = () => {
  const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
  const modalCloses = document.querySelectorAll('.modal-close, [data-modal-close]');
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal-trigger');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
      }
    });
  });
  
  modalCloses.forEach(close => {
    close.addEventListener('click', () => {
      const modal = close.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
      }
    });
  });
  
  // Close modal when clicking overlay
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach(overlay => {
        overlay.classList.remove('active');
      });
    }
  });
};

// Show Alert
const showAlert = (message, type = 'info') => {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.textContent = message;
  
  const container = document.querySelector('.container') || document.body;
  container.insertBefore(alertDiv, container.firstChild);
  
  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    alertDiv.style.opacity = '0';
    setTimeout(() => alertDiv.remove(), 300);
  }, 5000);
};

// Rating System
const initRating = () => {
  const ratingContainers = document.querySelectorAll('.rating');
  
  ratingContainers.forEach(container => {
    const stars = container.querySelectorAll('.star');
    let currentRating = 0;
    
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        currentRating = index + 1;
        updateStars(stars, currentRating);
        
        // Store rating in data attribute
        container.setAttribute('data-rating', currentRating);
        
        // Trigger custom event
        const event = new CustomEvent('ratingChange', { 
          detail: { rating: currentRating } 
        });
        container.dispatchEvent(event);
      });
      
      star.addEventListener('mouseenter', () => {
        updateStars(stars, index + 1);
      });
    });
    
    container.addEventListener('mouseleave', () => {
      updateStars(stars, currentRating);
    });
  });
};

const updateStars = (stars, rating) => {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
};

// Smooth Scroll for Anchor Links
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Active Navigation Link
const updateActiveNav = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

// Initialize User Avatar with Initials
const createAvatar = (name) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
  return initials;
};

// Format Date/Time
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

// Local Storage Helper
const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  },
  
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Storage error:', e);
      return null;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  },
  
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  }
};

// Mock Data for Demo (simulates user data)
const mockUser = {
  name: 'Alex Johnson',
  email: 'alex@skillexchange.com',
  bio: 'Full-stack developer passionate about learning new skills',
  avatar: 'AJ',
  skills: {
    offering: ['JavaScript', 'React', 'Node.js', 'UI/UX Design'],
    seeking: ['Python', 'Machine Learning', 'Data Analysis', 'Cloud Architecture']
  },
  stats: {
    exchanges: 12,
    connections: 45,
    rating: 4.8
  }
};

// Initialize current user from storage or use mock
const getCurrentUser = () => {
  return storage.get('currentUser') || mockUser;
};

const setCurrentUser = (user) => {
  storage.set('currentUser', user);
};

// Page Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initModals();
  initRating();
  initSmoothScroll();
  updateActiveNav();
  
  // Add fade-in animation to main content
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.classList.add('fade-in');
  }
});

// Export functions for use in other scripts
window.SkillExchange = {
  validateForm,
  showAlert,
  createAvatar,
  formatDate,
  storage,
  getCurrentUser,
  setCurrentUser,
  mockUser
};
