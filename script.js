document.addEventListener("DOMContentLoaded", () => {
    // Tema geçişi
    const themeToggle = document.getElementById("theme-toggle");
  
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mod";
    });
  
    // Skill bar animasyonu
    const skillBars = document.querySelectorAll(".skill-bar-fill");
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const width = el.dataset.skill + "%";
          el.style.width = width;
          obs.unobserve(el); // animasyon bir kez çalışsın
        }
      });
    }, { threshold: 0.5 }); // %50 görünürlük yeterli
  
    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  });
  