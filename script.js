// Wait until everything loads 
window.addEventListener("load", () => {
  // ===== SPLASH -> HOMEPAGE =====
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    const homepage = document.getElementById("homepage");
    if (splash) splash.style.display = "none";
    if (homepage) homepage.style.display = "block";
  }, 3000); // keep splash for 3s

  // ===== BALANCE TOGGLE (eye uses Font Awesome) =====
  const eyeBtn = document.querySelector(".eye");
  const amountEl = document.querySelector(".balance-left .amount");
  let balanceVisible = true;

  if (eyeBtn && amountEl) {
    eyeBtn.addEventListener("click", () => {
      balanceVisible = !balanceVisible;

      if (balanceVisible) {
        amountEl.textContent = "₦1,000,000";
        eyeBtn.classList.replace("fa-eye-slash", "fa-eye");
      } else {
        amountEl.textContent = "••••••••";
        eyeBtn.classList.replace("fa-eye", "fa-eye-slash");
      }

      // Blink animation
      eyeBtn.classList.add("blink");
      setTimeout(() => eyeBtn.classList.remove("blink"), 300);
    });
  }

  // ===== CAROUSEL (auto + manual-ready) =====
  const items = Array.from(document.querySelectorAll(".carousel .item"));
  if (items.length > 0) {
    let currentIndex = 0;
    items.forEach((it, idx) => it.classList.toggle("active", idx === 0));

    function showItem(index) {
      items.forEach((it, i) => it.classList.toggle("active", i === index));
    }

    let carouselTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    }, 4000);
  }

  // ===== (OPTIONAL) Notification badge demo update =====
  // Example of updating notification count (demo)
  // const notifCount = document.querySelector('.icon.notif .count');
  // if (notifCount) notifCount.textContent = "3"; // keep static for now
});
