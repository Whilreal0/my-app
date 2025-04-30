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
  document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 640) { // Tailwind's "sm" breakpoint
      document.querySelectorAll('[aria-label]').forEach(el => {
        el.removeAttribute('aria-label');
      });
    }
  });
  function validateForm() {
    // Clear previous errors
    const fields = document.querySelectorAll("input, textarea");
    fields.forEach(field => {
      field.classList.remove("border-red-500");
      field.classList.remove("focus:ring-red-500");
    });

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let valid = true;

    if (!name.value.trim()) {
      name.classList.add("border-red-500", "focus:ring-red-500");
      valid = false;
    }
    if (!email.value.trim()) {
      email.classList.add("border-red-500", "focus:ring-red-500");
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        email.classList.add("border-red-500", "focus:ring-red-500");
        valid = false;
      }
    }
    if (!message.value.trim()) {
      message.classList.add("border-red-500", "focus:ring-red-500");
      valid = false;
    }

    if (!valid) {
      alert("Please fill in all required fields with valid values.");
    }
    return valid;
  }