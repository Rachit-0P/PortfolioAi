// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});

// Portfolio Items
const portfolioGrid = document.querySelector('.portfolio-grid');
const portfolioItems = [
    {
        image: 'https://picsum.photos/600/400?random=1',
        title: 'Gaming Channel Thumbnail'
    },
    {
        image: 'https://picsum.photos/600/400?random=2',
        title: 'Tech Review Thumbnail'
    },
    {
        image: 'https://picsum.photos/600/400?random=3',
        title: 'Vlog Thumbnail'
    },
    {
        image: 'https://picsum.photos/600/400?random=4',
        title: 'Tutorial Thumbnail'
    },
    {
        image: 'https://picsum.photos/600/400?random=5',
        title: 'Educational Content'
    },
    {
        image: 'https://picsum.photos/600/400?random=6',
        title: 'Entertainment Thumbnail'
    }
];

// Generate Portfolio Items
portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item';
    portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
    `;
    portfolioGrid.appendChild(portfolioItem);

    // Add click event for lightbox
    portfolioItem.addEventListener('click', () => {
        openLightbox(item.image);
    });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

function openLightbox(imageSrc) {
    lightbox.style.opacity = '0';
    lightbox.style.display = 'block';
    lightboxImg.src = imageSrc;
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
}

closeLightbox.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Initialize particles.js
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#2563eb"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.5,
            "random": false
          },
          "size": {
            "value": 3,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#2563eb",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "push": {
              "particles_nb": 4
            }
          }
        },
        "retina_detect": true
      }
    );
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});