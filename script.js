// document.addEventListener('DOMContentLoaded', () => {
//   const projectCards = document.querySelectorAll('.project-card');
  
//   projectCards.forEach(card => {
//     // 3D hover effect
//     card.addEventListener('mousemove', handleMouseMove);
//     card.addEventListener('mouseleave', handleMouseLeave);
    
//     // Click/tap and hold effect
//     card.addEventListener('mousedown', handlePress);
//     card.addEventListener('touchstart', handlePress, { passive: true });
    
//     // Cancel press if mouse up or touch end before timeout
//     card.addEventListener('mouseup', handlePressCancel);
//     card.addEventListener('mouseleave', handlePressCancel);
//     card.addEventListener('touchend', handlePressCancel);
//     card.addEventListener('touchcancel', handlePressCancel);
//   });
  
//   // Variables to track press state
//   let pressTimer = null;
//   let activeCard = null;
  
//   // Handle mouse move for 3D effect
//   function handleMouseMove(e) {
//     const card = e.currentTarget;
//     const rect = card.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width;
//     const y = (e.clientY - rect.top) / rect.height;
    
//     const rotateX = 5 - y * 10;
//     const rotateY = x * 10 - 5;
    
//     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
//   }
  
//   // Reset card on mouse leave
//   function handleMouseLeave(e) {
//     const card = e.currentTarget;
//     card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
//   }
  
//   // Handle press/tap and hold
//   function handlePress(e) {
//     const card = e.currentTarget;
//     activeCard = card;
    
//     // Clear any existing timer
//     if (pressTimer) {
//       clearTimeout(pressTimer);
//     }
    
//     // Set a timeout to navigate after the fade-out animation
//     pressTimer = setTimeout(() => {
//       card.classList.add('fade-out');
      
//       // Get the URL from the data attribute
//       const url = card.getAttribute('data-url');
//       // Navigate after animation completes
//       setTimeout(() => {
//         if (url) {
//           window.open(url, '_blank');
//         }
        
//         // Reset the card state after navigation
//         setTimeout(() => {
//           card.classList.remove('fade-out');
//           activeCard = null;
//         }, 300);
//       }, 600);
//     }, 300); // Shorter hold time for better UX
//   }
  
//   // Cancel the press if released before timeout
//   function handlePressCancel() {
//     if (pressTimer) {
//       clearTimeout(pressTimer);
//       pressTimer = null;
//     }
    
//     if (activeCard) {
//       activeCard.classList.remove('fade-out');
//       activeCard = null;
//     }
//   }

// // Theme Toggle
// const themeToggle = document.querySelector('.theme-toggle');
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// function setTheme(isDark) {
//   document.documentElement.classList.toggle('dark', isDark);
//   localStorage.setItem('theme', isDark ? 'dark' : 'light');
// }

// // Initialize theme
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//   setTheme(savedTheme === 'dark');
// } else {
//   setTheme(prefersDark.matches);
// }

// themeToggle.addEventListener('click', () => {
//   const isDark = document.documentElement.classList.contains('dark');
//   setTheme(!isDark);
// });

// // Mobile Menu
// const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// const navLinks = document.querySelector('.nav-links');

// mobileMenuBtn.addEventListener('click', () => {
//   navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
// });

// // Scroll Animation for Skill Bars
// function animateSkillBars() {
//   const skillBars = document.querySelectorAll('.skill-progress');
  
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.width = entry.target.getAttribute('data-width');
//       }
//     });
//   }, { threshold: 0.5 });

//   skillBars.forEach(bar => {
//     const width = bar.style.width;
//     bar.style.width = '0';
//     bar.setAttribute('data-width', width);
//     observer.observe(bar);
//   });
// }

// // Project Card Click Animation
// document.querySelectorAll('.project-card').forEach(card => {
//   card.addEventListener('click', function() {
//     const url = this.getAttribute('data-url');
//     this.classList.add('fade-out');
//     setTimeout(() => {
//       window.open(url, '_blank');
//       this.classList.remove('fade-out');
//     }, 600);
//   });
// });

// // Form Submission
// const contactForm = document.getElementById('contactForm');
// contactForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
  
//   const formData = new FormData(contactForm);
//   const submitButton = contactForm.querySelector('button[type="submit"]');
  
//   try {
//     submitButton.disabled = true;
//     submitButton.textContent = 'Sending...';
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     alert('Message sent successfully!');
//     contactForm.reset();
//   } catch (error) {
//     alert('Failed to send message. Please try again.');
//   } finally {
//     submitButton.disabled = false;
//     submitButton.textContent = 'Send Message';
//   }
// });

// // Initialize Animations
// document.addEventListener('DOMContentLoaded', () => {
//   animateSkillBars();
// });

// // Header Scroll Effect
// const header = document.querySelector('.header');
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;
  
//   if (currentScroll > lastScroll && currentScroll > 100) {
//     header.style.transform = 'translateY(-100%)';
//   } else {
//     header.style.transform = 'translateY(0)';
//   }
  
//   if (currentScroll > 20) {
//     header.style.backgroundColor = 'var(--background)';
//     header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
//   } else {
//     header.style.backgroundColor = 'transparent';
//     header.style.boxShadow = 'none';
    
//   }
  
//   lastScroll = currentScroll;
// });
// { header.style.transform = 'translateY(-100%)'; } else { header.style.transform = 'translateY(0)'; }
// lastScroll = currentScroll; });

// });

// document.addEventListener('DOMContentLoaded', () => {
//   // ========== Mobile Menu ==========
//   const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//   const navLinks = document.querySelector('.nav-links');

//   mobileMenuBtn.addEventListener('click', () => {
//     navLinks.classList.toggle('active'); // Toggle menu visibility
//   });

//   // Close menu when clicking outside
//   document.addEventListener('click', (e) => {
//     if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
//       navLinks.classList.remove('active');
//     }
//   });

// });

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

