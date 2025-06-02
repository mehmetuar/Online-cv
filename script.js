document.addEventListener("DOMContentLoaded", () => {
    // Tema geçişi
    const themeToggle = document.getElementById("theme-toggle");
  
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "☀️ " : "🌙 ";
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
  

//Skills animasyonu
  particlesJS("particles-skills", {
    "particles": {
      "number": {
        "value": 80,
        "density": { "enable": true, "value_area": 800 }
      },
      "color": { "value": "#00aaf4" },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000000" }
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
        "color": "#00aaf4",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" }
      },
      "modes": {
        "repulse": { "distance": 100 }
      }
    },
    "retina_detect": true
  });


  //CV güncelleme tarihi 

// CV last updated date
document.addEventListener("DOMContentLoaded", () => {
  const cvDate = document.getElementById("cv-date");
  if (cvDate) {
    const tarih = new Date(document.lastModified);
    const formatted = tarih.toLocaleDateString("en-GB", {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    cvDate.textContent = `Last updated: ${formatted}`;
  }
});


