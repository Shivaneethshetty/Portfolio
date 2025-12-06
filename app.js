// Smooth scroll for nav links
// Smooth scroll ONLY for section links, not resume.pdf
document.querySelectorAll('.nav a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// "View My Work" button scroll
const scrollToProjectsBtn = document.getElementById('scrollToProjects');
if (scrollToProjectsBtn) {
    scrollToProjectsBtn.addEventListener('click', () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

const themeToggle = document.getElementById('themeToggle');
const profileImg = document.getElementById('profileImg');

const storedTheme = localStorage.getItem('theme');

function updateImage() {
    if (document.body.classList.contains('light')) {
        profileImg.src = "profile-light.jpg";
    } else {
        profileImg.src = "profile-dark.jpg";
    }
}

if (storedTheme === 'light') {
    document.body.classList.add('light');
    themeToggle.textContent = '☀️';
}

updateImage();

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');

    const isLight = document.body.classList.contains('light');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    updateImage();
});


// Project filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        projectCards.forEach((card) => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact form (simple frontend validation)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill all required fields.';
            formStatus.style.color = 'tomato';
            return;
        }

        // Here you can integrate a real backend / service if you want
        formStatus.textContent = 'Thank you! Your message has been sent (demo).';
        formStatus.style.color = 'limegreen';
        contactForm.reset();
    });
}

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}



