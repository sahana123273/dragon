// Basic interactivity: mobile nav toggle, smooth scroll, form feedback
document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // close nav on mobile
          if (mainNav.classList.contains('open')) {
            mainNav.classList.remove('open');
            navToggle.classList.remove('open');
          }
        }
      }
    });
  });

  // Basic form submit handler - show a quick message (works with non-ajax forms too)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      // If using a third-party form endpoint (Formspree, etc.) we allow default submission.
      // But we can show temporary feedback:
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        // If the form action is external the page might navigate away; reenable after 3s for demo
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = originalText;
        }, 3000);
      }
    });
  }
});