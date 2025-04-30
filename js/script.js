document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
  
    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
  
        // Delay animation slightly after menu becomes visible
        setTimeout(() => {
          mobileMenu.classList.toggle('opacity-0');
          mobileMenu.classList.toggle('translate-y-0');
        }, 10);
      });
    }
  });
  