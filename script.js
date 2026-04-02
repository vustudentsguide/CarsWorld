// ========== NAVBAR SCROLL ==========
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
  updateBackToTop();
});

// ========== HAMBURGER MENU ==========
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ========== ACTIVE NAV LINK ==========
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ========== HERO BG PARALLAX ==========
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  heroBg.classList.add('loaded');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  });
}

// ========== SCROLL REVEAL ==========
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// ========== CAR DATA ==========
const cars = [
  {
    id: 1,
    brand: 'BMW',
    name: 'BMW M4 Competition',
    price: '$74,900',
    priceValue: 74900,
    fuel: 'petrol',
    desc: 'Dominate the road with the iconic M4 Competition — 503 hp of pure driving excellence wrapped in aggressive styling.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
    badge: 'Hot',
    badgeClass: 'badge-hot',
    mileage: '0–60 in 3.8s',
    engine: '3.0L Twin Turbo',
    transmission: 'M DCT 8-Speed',
  },
  {
    id: 2,
    brand: 'Mercedes-Benz',
    name: 'Mercedes AMG GT',
    price: '$118,000',
    priceValue: 118000,
    fuel: 'petrol',
    desc: 'The AMG GT blends breathtaking performance with sensuous design — a sports car with true soul.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
    badge: 'Premium',
    badgeClass: '',
    mileage: '0–60 in 3.5s',
    engine: '4.0L V8 Biturbo',
    transmission: 'AMG Speedshift 7G',
  },
  {
    id: 3,
    brand: 'Tesla',
    name: 'Tesla Model S Plaid',
    price: '$89,990',
    priceValue: 89990,
    fuel: 'electric',
    desc: 'The quickest production car ever built. With 1,020 hp and tri-motor AWD, the Model S Plaid redefines what electric performance means.',
    image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=600&q=80',
    badge: 'New',
    badgeClass: 'badge-new',
    mileage: '0–60 in 1.99s',
    engine: 'Tri Motor EV',
    transmission: 'Single Speed',
  },
  {
    id: 4,
    brand: 'Porsche',
    name: 'Porsche 911 GT3',
    price: '$162,650',
    priceValue: 162650,
    fuel: 'petrol',
    desc: 'Born on the racetrack, refined for the road. The 911 GT3 is the purest expression of the Porsche sports car philosophy.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    badge: 'Hot',
    badgeClass: 'badge-hot',
    mileage: '0–60 in 3.2s',
    engine: '4.0L Flat-Six',
    transmission: 'PDK 7-Speed',
  },
  {
    id: 5,
    brand: 'Audi',
    name: 'Audi RS e-tron GT',
    price: '$104,900',
    priceValue: 104900,
    fuel: 'electric',
    desc: 'A grand tourer reimagined for the electric era. Stunning quattro performance with zero tailpipe emissions.',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80',
    badge: 'Lease',
    badgeClass: 'badge-lease',
    mileage: '0–60 in 3.1s',
    engine: 'Dual Motor EV',
    transmission: '2-Speed Auto',
  },
  {
    id: 6,
    brand: 'Range Rover',
    name: 'Range Rover Sport HSE',
    price: '$83,500',
    priceValue: 83500,
    fuel: 'hybrid',
    desc: 'Unrivalled luxury meets genuine all-terrain capability. The Range Rover Sport HSE sets the benchmark for premium SUVs.',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
    badge: 'New',
    badgeClass: 'badge-new',
    mileage: '0–60 in 5.4s',
    engine: '3.0L MHEV I6',
    transmission: 'Auto 8-Speed',
  },
  {
    id: 7,
    brand: 'Ferrari',
    name: 'Ferrari Roma',
    price: '$222,620',
    priceValue: 222620,
    fuel: 'petrol',
    desc: 'Elegant and powerful — the Ferrari Roma captures the spirit of la dolce vita with a V8 engine delivering 612 hp.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
    badge: 'Premium',
    badgeClass: '',
    mileage: '0–60 in 3.4s',
    engine: '3.9L V8 Turbo',
    transmission: 'F8 DCT 8-Speed',
  },
  {
    id: 8,
    brand: 'Lamborghini',
    name: 'Lamborghini Urus',
    price: '$229,495',
    priceValue: 229495,
    fuel: 'petrol',
    desc: "The world's first Super Sport Utility Vehicle. Combining a Lamborghini's heart with everyday practicality.",
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80',
    badge: 'Hot',
    badgeClass: 'badge-hot',
    mileage: '0–60 in 3.5s',
    engine: '4.0L V8 Biturbo',
    transmission: 'Auto 8-Speed',
  },
  {
    id: 9,
    brand: 'Audi',
    name: 'Audi Q8 55 TFSI',
    price: '$71,900',
    priceValue: 71900,
    fuel: 'hybrid',
    desc: 'Sophisticated design fused with SUV versatility. The Q8 brings executive presence to every journey.',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=600&q=80',
    badge: 'Lease',
    badgeClass: 'badge-lease',
    mileage: '0–60 in 5.6s',
    engine: '3.0L MHEV V6',
    transmission: 'Tiptronic 8G',
  },
];

// ========== RENDER CARS ==========
const carsGrid = document.getElementById('carsGrid');
const noResults = document.getElementById('noResults');
const brandFilter = document.getElementById('brandFilter');
const priceFilter = document.getElementById('priceFilter');
const fuelFilter = document.getElementById('fuelFilter');
const resetBtn = document.getElementById('resetFilters');

function renderCars(data) {
  carsGrid.innerHTML = '';

  if (data.length === 0) {
    noResults.classList.add('visible');
    return;
  }

  noResults.classList.remove('visible');

  data.forEach((car, index) => {
    const card = document.createElement('div');
    card.className = 'car-card reveal';
    card.style.transitionDelay = `${index * 60}ms`;
    card.dataset.brand = car.brand;
    card.dataset.fuel = car.fuel;
    card.dataset.price = car.priceValue;

    card.innerHTML = `
      <div class="car-image-wrap">
        <img src="${car.image}" alt="${car.name}" loading="lazy">
        ${car.badge ? `<span class="car-badge ${car.badgeClass}">${car.badge}</span>` : ''}
        <button class="car-favourite" aria-label="Add to favourites">♡</button>
      </div>
      <div class="car-body">
        <div class="car-brand">${car.brand}</div>
        <div class="car-name">${car.name}</div>
        <p class="car-desc">${car.desc}</p>
        <div class="car-specs">
          <div class="car-spec">
            <span class="car-spec-icon">⚡</span>
            <span class="car-spec-value">${car.mileage}</span>
            <span class="car-spec-label">0-60 mph</span>
          </div>
          <div class="car-spec">
            <span class="car-spec-icon">🔧</span>
            <span class="car-spec-value">${car.engine}</span>
            <span class="car-spec-label">Engine</span>
          </div>
          <div class="car-spec">
            <span class="car-spec-icon">⚙️</span>
            <span class="car-spec-value">${car.transmission.split(' ')[0]}</span>
            <span class="car-spec-label">Trans.</span>
          </div>
        </div>
        <div class="car-footer">
          <div class="car-price">
            <span class="car-price-label">Starting from</span>
            <span class="car-price-amount">${car.price}</span>
          </div>
          <button class="btn btn-outline" style="padding:10px 20px;font-size:0.85rem">Enquire</button>
        </div>
      </div>
    `;

    // Favourite toggle
    const favBtn = card.querySelector('.car-favourite');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      favBtn.classList.toggle('active');
      favBtn.textContent = favBtn.classList.contains('active') ? '♥' : '♡';
    });

    // Enquire button scroll to contact
    const enquireBtn = card.querySelector('.btn-outline');
    enquireBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    carsGrid.appendChild(card);
  });

  // Re-observe reveal elements
  document.querySelectorAll('.car-card.reveal').forEach(el => {
    revealObserver.observe(el);
  });
}

function applyFilters() {
  const brand = brandFilter.value;
  const priceRange = priceFilter.value;
  const fuel = fuelFilter.value;

  const filtered = cars.filter(car => {
    const brandMatch = !brand || car.brand === brand;
    const fuelMatch = !fuel || car.fuel === fuel;
    let priceMatch = true;
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      priceMatch = max ? car.priceValue >= min && car.priceValue <= max : car.priceValue >= min;
    }
    return brandMatch && fuelMatch && priceMatch;
  });

  renderCars(filtered);
}

brandFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('change', applyFilters);
fuelFilter.addEventListener('change', applyFilters);

resetBtn.addEventListener('click', () => {
  brandFilter.value = '';
  priceFilter.value = '';
  fuelFilter.value = '';
  renderCars(cars);
});

// Initial render
renderCars(cars);

// ========== COUNTER ANIMATION ==========
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString() + (el.dataset.suffix || '');
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-target]').forEach(el => {
  counterObserver.observe(el);
});

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      contactForm.reset();
      submitBtn.textContent = 'Send Message →';
      submitBtn.disabled = false;
      formSuccess.style.display = 'block';
      setTimeout(() => {
        formSuccess.style.display = 'none';
      }, 5000);
    }, 1400);
  });
}

// ========== BACK TO TOP ==========
const backToTop = document.querySelector('.back-to-top');

function updateBackToTop() {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== HERO SCROLL INDICATOR ==========
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
  heroScroll.addEventListener('click', () => {
    document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
  });
}
