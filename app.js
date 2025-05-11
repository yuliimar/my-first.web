document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.querySelector(".scroll__top");

  // Mostrar/ocultar botón
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  scrollBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// ==================== SISTEMA DE TRADUCCIÓN ====================
const translations = {
  en: {
    title: "Yuliia Martynovych",
    about: "About me",
    projects: "Projects",
    my_projects: "My Projects",
    contact: "Contact",
    welcome:
      "Hi, I'm Yuliia Martynovych, a programming student with knowledge of HTML, CSS, and basic JavaScript. I enjoy creating clean, user-friendly interfaces and constantly improving my coding skills.",
  },
  es: {
    title: "Yuliia Martynovych",
    about: "Sobre mí",
    projects: "Proyectos",
    my_projects: "Mis Proyectos",
    contact: "Contacto",
    welcome:
      "Hola, soy Yuliia Martynovych, estudiante de programación con conocimientos de HTML, CSS y JavaScript básico. Disfruto creando interfaces claras y fáciles de usar, y mejorando constantemente mis habilidades de programación.",
  },
  uk: {
    title: "Юлія Мартинович",
    about: "Про мене",
    projects: "Проекти",
    my_projects: "Мої проекти",
    contact: "Контакти",
    welcome:
      "Привіт, я Юлія Мартинович, студентка-програміст зі знанням HTML, CSS та основ JavaScript. Я захоплююся веб-дизайном та технологіями. Мені подобається створювати чисті, зручні інтерфейси та постійно вдосконалювати свої навички програмування.",
  },
};

// Función para cambiar idioma
function translatePage(lang) {
  // Actualizar botones activos
  document.querySelectorAll(".language-buttons button").forEach((btn) => {
    btn.classList.remove("active");
    if (
      (lang === "en" && btn.textContent === "EN") ||
      (lang === "es" && btn.textContent === "ES") ||
      (lang === "uk" && btn.textContent === "UK")
    ) {
      btn.classList.add("active");
    }
  });

  // Actualizar contenido
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);
}

// Inicialización (cargar idioma guardado o usar inglés por defecto)
const savedLang = localStorage.getItem("language") || "en";
translatePage(savedLang);

// Eventos para los botones de idioma
document.querySelectorAll(".language-buttons button").forEach((btn) => {
  btn.addEventListener("click", function () {
    const lang =
      this.textContent === "EN"
        ? "en"
        : this.textContent === "ES"
        ? "es"
        : "uk";
    translatePage(lang);
  });
});
