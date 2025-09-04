// Simple animation and carousel for hero section
window.addEventListener('DOMContentLoaded', () => {
  // Hero section animation
  const hero = document.querySelector('.hero-content h1');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(40px)';
    setTimeout(() => {
      hero.style.transition = 'opacity 1s, transform 1s';
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 400);
  }

  // Carousel logic
  const images = document.querySelectorAll('.carousel-image');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const indicators = document.querySelectorAll('.carousel-indicator');
  let current = 0;

  function showImage(idx) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === idx);
    });
    indicators.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });
  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      showImage(current);
    });
  });

  showImage(current);

  // Email anti-spam obfuscation
  const emailSpan = document.getElementById('email');
  if (emailSpan) {
    const user = 'info';
    const domain = 'immersa.fun';
    emailSpan.innerHTML = `<a href="mailto:${user}@${domain}">${user}&#64;${domain}</a>`;
  }

  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    var navToggle = document.querySelector('.nav-toggle');
    var navList = document.querySelector('.nav-list');
    console.log('navToggle:', navToggle);
    console.log('navList:', navList);
    if (navToggle && navList) {
      navToggle.addEventListener('click', function(e) {
        console.log('navToggle clicked');
        e.stopPropagation();
        if (navList.classList.contains('open')) {
          navList.classList.remove('open');
          console.log('navList closed');
        } else {
          navList.classList.add('open');
          console.log('navList opened');
        }
      });
      navList.addEventListener('click', function(e) {
        console.log('navList clicked');
        e.stopPropagation();
      });
      document.addEventListener('click', function(e) {
        if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
          navList.classList.remove('open');
          console.log('navList closed by outside click');
        }
      });
      navList.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          navList.classList.remove('open');
          console.log('navList closed by link click');
        });
      });
    } else {
      console.log('navToggle or navList not found');
    }

    // Carousel fix: ensure only one image is active
    var carouselImages = document.querySelectorAll('.carousel-image');
    var carouselIndicators = document.querySelectorAll('.carousel-indicator');
    var carouselPrev = document.querySelector('.carousel-btn.prev');
    var carouselNext = document.querySelector('.carousel-btn.next');
    var carouselCurrent = 0;
    function showImage(idx) {
      carouselImages.forEach((img, i) => {
        img.classList.toggle('active', i === idx);
      });
      carouselIndicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === idx);
      });
      carouselCurrent = idx;
    }
    if (carouselPrev && carouselNext && carouselImages.length) {
      carouselPrev.addEventListener('click', () => {
        showImage((carouselCurrent - 1 + carouselImages.length) % carouselImages.length);
      });
      carouselNext.addEventListener('click', () => {
        showImage((carouselCurrent + 1) % carouselImages.length);
      });
      carouselIndicators.forEach((ind, i) => {
        ind.addEventListener('click', () => showImage(i));
      });
      showImage(0);
    }
  });
});
