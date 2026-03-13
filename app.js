document.addEventListener("DOMContentLoaded", function () {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  function loadHeader() {
    const headerContainer = document.getElementById("header-container");

    if (headerContainer) {
      if (!document.querySelector(".header")) {
        const headerHTML = `
          <header class="header" id="top" role="banner">
            <img
              src="img/perfil.jpeg"
              alt="portrait of Yuliia Martynovych"
              class="profile-photo"
            />

            <div class="language-buttons">
              <button class="lang-btn" onclick="translatePage('en')">EN</button>
              <button class="lang-btn" onclick="translatePage('es')">ES</button>
              <button class="lang-btn" onclick="translatePage('uk')">UK</button>
            </div>

            <h1>Frontend Developer</h1>

            <nav class="header__nav" role="navigation" aria-label="Main menu">
              <ul>
                <li>
                  <a
                    href="index.html"
                    class="nav-link"
                    data-translate="about"
                    id="nav-about"
                    >About me</a
                  >
                </li>
                <li>
                  <a
                    href="projects.html"
                    class="nav-link"
                    data-translate="projects"
                    id="nav-projects"
                    >Projects</a
                  >
                </li>
                <li>
                  <a
                    href="contact.html"
                    class="nav-link"
                    data-translate="contact"
                    id="nav-contact"
                    >Contact</a
                  >
                </li>
              </ul>
            </nav>
          </header>
        `;

        headerContainer.innerHTML = headerHTML;
      }
    }
  }

  loadHeader();

  // ========== SCROLL TO TOP BUTTON ==========
  const scrollBtn = document.querySelector(".scroll__top");

  if (scrollBtn) {
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
  }
});

// ==================== Translation System ====================
const translations = {
  en: {
    about: "About me",
    projects: "Projects",
    my_projects: "My Projects",
    contact: "Contact",
    welcome:
      "Hi I'm a Yuliia Martynovych Frontend Developer passionate about creating modern, user-friendly, and responsive web applications. Skilled in HTML, CSS, SCSS, and JavaScript, with a strong foundation in UI/UX principles, clean design, and accessibility. Adaptable and detail-oriented, I bring teamwork, empathy, and customer focus to every project. Constantly learning new tools and technologies to stay ahead in frontend development. Skills: HTML5, CSS3, Sass (SCSS), BEM, Material UI, Tailwind TypeScript, JavaScript React, Redux-toolkit Waterfall, Knowledge of SDLC, Agile concepts Git, GitHub, Visual Studio Code, Chrome DevTools, Terminal MySQL, PHP English B2, Spanish C2, Ukrainian Native.",
  },
  es: {
    about: "Sobre mí",
    projects: "Proyectos",
    my_projects: "Mis Proyectos",
    contact: "Contacto",
    welcome:
      "Hola, soy Yuliia Martynovych desarrolladora front-end y me apasiona crear aplicaciones web modernas, intuitivas y responsivas. Tengo experiencia con HTML, CSS, SCSS y JavaScript, además de sólidos conocimientos de los principios de UI/UX, diseño limpio y accesibilidad. Soy atenta a los detalles, y disfruto trabajando en equipo e individualmente. Constantemente aprendo nuevas herramientas y tecnologías para mantenerme a la vanguardia del desarrollo front-end. Cuento con: HTML5, CSS3, Sass (SCSS), BEM, Material UI, Tailwind TypeScript, JavaScript React, Redux-toolkit Waterfall, conocimientos de SDLC, conceptos ágiles, Git, GitHub, Visual Studio Code, Chrome DevTools, Terminal, MySQL, PHP. Hablo inglés B2, español C2 y mi lengua materna ucraniano.",
  },
  uk: {
    about: "Про мене",
    projects: "Проєкти",
    my_projects: "Мої проєкти",
    contact: "Контакти",
    welcome:
      "Вітаю, я фронтенд-розробниця, захоплена створенням сучасних, інтуїтивно зрозумілих та адаптивних веб-додатків. Маю досвід роботи з HTML, CSS, SCSS та JavaScript, а також міцні знання принципів UI/UX, чистого дизайну та доступності. Я адаптивна та уважна до деталей, також люблю командну та самостійну роботу. Я постійно вивчаю нові інструменти та технології, щоб залишатися на передовій фронтенд-розробки. Володію: HTML5, CSS3, Sass (SCSS), BEM, Material UI, Tailwind TypeScript, JavaScript React, Redux-toolkit Waterfall, знання SDLC, Agile-концепції, Git, GitHub, Visual Studio Code, Chrome DevTools, Terminal, MySQL, PHP. Володію англійською B2, іспанською C2 та рідною українською.",
  },
};

function translatePage(lang) {
  setTimeout(() => {
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

    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }, 100);
}

const savedLang = localStorage.getItem("language") || "en";

window.addEventListener("load", function () {
  translatePage(savedLang);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("lang-btn")) {
    const lang =
      e.target.textContent === "EN"
        ? "en"
        : e.target.textContent === "ES"
          ? "es"
          : "uk";
    translatePage(lang);
  }
});
