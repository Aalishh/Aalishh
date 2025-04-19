document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return;
            
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            }
        });
    });
    
    // Load News Items
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        newsItems.forEach(news => {
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card';
            
            newsCard.innerHTML = `
                <div class="news-card-content">
                    <div class="news-date">${news.date}</div>
                    <h3 class="news-title">${news.title}</h3>
                    <p class="news-summary">${news.summary}</p>
                    <a href="${news.link}" class="news-link">Читать далее →</a>
                </div>
            `;
            
            newsContainer.appendChild(newsCard);
        });
    }
    
    // Load Tournament Items
    const tournamentContainer = document.getElementById('tournament-container');
    if (tournamentContainer) {
        tournaments.forEach(tournament => {
            const tournamentCard = document.createElement('div');
            tournamentCard.className = 'tournament-card';
            
            tournamentCard.innerHTML = `
                <div class="tournament-type">${tournament.type}</div>
                <div class="tournament-content">
                    <h3 class="tournament-name">${tournament.name}</h3>
                    <div class="tournament-date">${tournament.date}</div>
                    <p class="tournament-description">${tournament.description}</p>
                    <div class="tournament-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${tournament.location}</span>
                    </div>
                    <div class="tournament-registration">
                        <div class="tournament-status ${tournament.registrationOpen ? 'open' : 'closed'}">
                            ${tournament.registrationOpen ? 'Регистрация открыта' : 'Регистрация закрыта'}
                        </div>
                        <a href="${tournament.link}" class="btn btn-primary">Подробнее</a>
                    </div>
                </div>
            `;
            
            tournamentContainer.appendChild(tournamentCard);
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            // For this example, we'll just show an alert
            alert(`Спасибо, ${name}! Ваше сообщение было отправлено.\n\nМы свяжемся с вами по адресу ${email} в ближайшее время.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(25, 30, 56, 1)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.backgroundColor = 'rgba(25, 30, 56, 0.9)';
                header.style.boxShadow = 'none';
            }
        });
    }
});