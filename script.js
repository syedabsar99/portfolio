const projects = [
  {
    title: "Music Player",
    description: "A modern web audio player with dynamic playlist, track controls, seek bar, time display, volume control, and responsive design.",
    category: "javascript",
    icon: "ri-music-2-line",
    tags: ["HTML", "CSS", "JavaScript", "Audio API"],
    githubUrl: "https://github.com/syedabsar99/music-player",
    demoUrl: "https://syedabsar99.github.io/music-player/"
  },
  {
    title: "Notes App",
    description: "Modern note-taking web app featuring note creation, quick editing, color palette customization, and LocalStorage persistence.",
    category: "javascript",
    icon: "ri-sticky-note-line",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    githubUrl: "https://github.com/syedabsar99/notes-app",
    demoUrl: "https://syedabsar99.github.io/notes-app/"
  },
  {
    title: "Digital Clock",
    description: "Responsive cyberpunk neon LED digital chronometer featuring Orbitron typography, 12-hour AM/PM formatting, real-time date synchronization, and scanline overlay.",
    category: "javascript",
    icon: "ri-time-line",
    tags: ["HTML", "CSS", "JavaScript", "DOM Events"],
    githubUrl: "https://github.com/syedabsar99/digital-clock",
    demoUrl: "https://syedabsar99.github.io/digital-clock/"
  },
  {
    title: "To-Do List App",
    description: "Feature-rich task management app featuring live task counters, instant search filter, dark mode toggle, and LocalStorage saving.",
    category: "javascript",
    icon: "ri-checkbox-line",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    githubUrl: "https://github.com/syedabsar99/todo-list-app",
    demoUrl: "https://syedabsar99.github.io/todo-list-app/"
  },
  {
    title: "QR Code Generator",
    description: "Responsive QR code generator allowing users to enter URLs or text, preview the generated QR code, and download it instantly.",
    category: "javascript",
    icon: "ri-qr-code-line",
    tags: ["HTML", "CSS", "JavaScript", "QR API"],
    githubUrl: "https://github.com/syedabsar99/qr-code-generator",
    demoUrl: "https://syedabsar99.github.io/qr-code-generator/"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard integrating OpenWeather API to provide real-time temperatures, humidity, wind speed, and conditions.",
    category: "javascript",
    icon: "ri-sun-cloudy-line",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    githubUrl: "https://github.com/syedabsar99/weather-dashboard",
    demoUrl: "https://syedabsar99.github.io/weather-dashboard/"
  },
  {
    title: "Live Words Counter",
    description: "Real-time text analysis tool calculating word count, character count, sentence count, and approximate reading time as you type.",
    category: "javascript",
    icon: "ri-text-snippet",
    tags: ["HTML", "CSS", "JavaScript", "DOM Events"],
    githubUrl: "https://github.com/syedabsar99/live-words-counter",
    demoUrl: "https://syedabsar99.github.io/live-words-counter/"
  },
  {
    title: "Age Calculator",
    description: "Clean date calculation utility calculating exact age in years, months, and days based on the user's selected date of birth.",
    category: "javascript",
    icon: "ri-calendar-check-line",
    tags: ["HTML", "CSS", "JavaScript", "Date API"],
    githubUrl: "https://github.com/syedabsar99/age-calculator",
    demoUrl: "https://syedabsar99.github.io/age-calculator/"
  },
  {
    title: "Random Password Generator",
    description: "Security tool allowing users to generate strong random passwords with customizable length and character sets, plus one-click copy.",
    category: "javascript",
    icon: "ri-lock-password-line",
    tags: ["HTML", "CSS", "JavaScript", "Clipboard API"],
    githubUrl: "https://github.com/syedabsar99/random-password-generator",
    demoUrl: "https://syedabsar99.github.io/random-password-generator/"
  },
  {
    title: "Kashmir Shawl Store",
    description: "Artisanal e-commerce frontend showcasing handcrafted Kashmiri shawls, product catalogs, collection highlights, and mobile responsiveness.",
    category: "landing-pages",
    icon: "ri-shopping-bag-3-line",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/syedabsar99/kashmir-shawl-store",
    demoUrl: "https://kashmir-shawl-store.vercel.app"
  },
  {
    title: "Glozin Theme Clone",
    description: "Pixel-perfect, fully responsive clone of the modern Glozin WordPress theme landing page with navigation, sliders, and product showcases.",
    category: "landing-pages",
    icon: "ri-layout-3-line",
    tags: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    githubUrl: "https://github.com/syedabsar99/glozin-theme-clone",
    demoUrl: "https://syedabsar99.github.io/glozin-theme-clone/"
  },
  {
    title: "Hotel Zante Clone",
    description: "Luxury hotel booking landing page clone with hero banners, room booking cards, testimonials, and amenities showcase.",
    category: "landing-pages",
    icon: "ri-hotel-line",
    tags: ["HTML", "CSS", "Bootstrap 5", "Responsive UI"],
    githubUrl: "https://github.com/syedabsar99/hotel-zante-clone",
    demoUrl: "https://syedabsar99.github.io/hotel-zante-clone/"
  },
  {
    title: "Real Estate Landing Page",
    description: "Clean, high-converting property listing landing page built with modern Bootstrap 5 components and custom responsive design.",
    category: "landing-pages",
    icon: "ri-home-4-line",
    tags: ["HTML", "CSS", "Bootstrap 5", "Mobile-First"],
    githubUrl: "https://github.com/syedabsar99/real-estate-landing-page",
    demoUrl: "https://syedabsar99.github.io/real-estate-landing-page/"
  }
];

const projectsGrid = document.getElementById("projects-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectSearchInput = document.getElementById("project-search-input");
const clearSearchBtn = document.getElementById("clear-search-btn");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const navMenu = document.getElementById("nav-menu");
const navbar = document.getElementById("navbar");
const backToTopBtn = document.getElementById("back-to-top-btn");
const contactForm = document.getElementById("contact-form");
const formSubmitBtn = document.getElementById("form-submit-btn");
const whatsappQuickBtn = document.getElementById("whatsapp-quick-btn");
const gmailWebBtn = document.getElementById("gmail-web-btn");
const toastBox = document.getElementById("toast-box");
const toastMessage = document.getElementById("toast-message");
const currentYearSpan = document.getElementById("current-year");

let activeCategoryFilter = "all";
let activeSearchQuery = "";

const validPages = ["home", "about", "education", "skills", "projects", "contact"];

function showPage(pageName) {
  if (!validPages.includes(pageName)) {
    pageName = "home";
  }

  const pageViews = document.querySelectorAll(".page-view");
  pageViews.forEach(page => page.classList.remove("active"));

  const targetPage = document.getElementById("page-" + pageName);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  document.querySelectorAll(".nav-link[data-page]").forEach(link => {
    if (link.getAttribute("data-page") === pageName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  document.querySelectorAll(".footer-links a[data-page]").forEach(link => {
    if (link.getAttribute("data-page") === pageName) {
      link.style.color = "var(--accent-cyan)";
    } else {
      link.style.color = "";
    }
  });

  if (window.location.hash !== "#" + pageName) {
    window.location.hash = pageName;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", function (e) {
  const trigger = e.target.closest("[data-page]");
  if (trigger) {
    const page = trigger.getAttribute("data-page");
    if (validPages.includes(page)) {
      e.preventDefault();
      showPage(page);
      if (navMenu) navMenu.classList.remove("open");
      if (mobileMenuIcon) mobileMenuIcon.className = "ri-menu-4-line";
    }
  }
});

window.addEventListener("hashchange", function () {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash && validPages.includes(hash)) {
    showPage(hash);
  }
});

function renderProjects() {
  if (!projectsGrid) return;

  const query = activeSearchQuery.trim().toLowerCase();

  const filtered = projects.filter(project => {
    const matchCat = activeCategoryFilter === "all" || project.category === activeCategoryFilter;
    if (!matchCat) return false;
    if (!query) return true;
    return project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query));
  });

  const countAll = projects.filter(p => !query || p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.tags.some(t => t.toLowerCase().includes(query))).length;
  const countJs = projects.filter(p => p.category === "javascript" && (!query || p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.tags.some(t => t.toLowerCase().includes(query)))).length;
  const countUi = projects.filter(p => p.category === "landing-pages" && (!query || p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.tags.some(t => t.toLowerCase().includes(query)))).length;

  const countAllEl = document.getElementById("count-all");
  const countJsEl = document.getElementById("count-js");
  const countUiEl = document.getElementById("count-ui");
  if (countAllEl) countAllEl.textContent = countAll;
  if (countJsEl) countJsEl.textContent = countJs;
  if (countUiEl) countUiEl.textContent = countUi;

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div class="no-projects-found">
        <div class="empty-icon"><i class="ri-search-eye-line"></i></div>
        <h3 class="empty-title">No matching projects found</h3>
        <p class="empty-desc">No project matched "${activeSearchQuery}". Try another keyword.</p>
        <button type="button" class="btn btn-secondary btn-sm" id="reset-filter-btn">
          <i class="ri-refresh-line"></i> <span>Reset Filters</span>
        </button>
      </div>
    `;
    const resetBtn = document.getElementById("reset-filter-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (projectSearchInput) projectSearchInput.value = "";
        activeSearchQuery = "";
        if (clearSearchBtn) clearSearchBtn.style.display = "none";
        activeCategoryFilter = "all";
        filterButtons.forEach(btn => btn.classList.toggle("active", btn.getAttribute("data-filter") === "all"));
        renderProjects();
      });
    }
    return;
  }

  projectsGrid.innerHTML = filtered.map(project => `
    <div class="project-card">
      <div class="project-banner">
        <span class="project-category-badge">${project.category === "javascript" ? "JavaScript App" : "Landing Page"}</span>
        <i class="${project.icon} project-icon-indicator"></i>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
        <div class="project-actions">
          ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <span>Live Demo</span>
              <i class="ri-external-link-line"></i>
            </a>
          ` : ""}
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            <i class="ri-github-fill"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

filterButtons.forEach(button => {
  button.addEventListener("click", function () {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategoryFilter = button.getAttribute("data-filter");
    renderProjects();
  });
});

if (projectSearchInput) {
  projectSearchInput.addEventListener("input", function (e) {
    activeSearchQuery = e.target.value;
    if (clearSearchBtn) {
      clearSearchBtn.style.display = activeSearchQuery ? "flex" : "none";
    }
    renderProjects();
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener("click", function () {
    if (projectSearchInput) {
      projectSearchInput.value = "";
      projectSearchInput.focus();
    }
    activeSearchQuery = "";
    clearSearchBtn.style.display = "none";
    renderProjects();
  });
}

const typewriterTextElement = document.getElementById("typewriter-text");
const phrases = [
  "responsive web apps with HTML, CSS & JavaScript.",
  "modern UI designs with Tailwind CSS & Bootstrap 5.",
  "interactive client-side JavaScript applications.",
  "pixel-perfect responsive UI clones."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 90;

function runTypewriter() {
  if (!typewriterTextElement) return;

  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typewriterTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 40;
  } else {
    typewriterTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 85;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 1900;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 400;
  }

  setTimeout(runTypewriter, typeSpeed);
}

function initTheme() {
  const savedTheme = localStorage.getItem("syed-portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("syed-portfolio-theme", newTheme);
  });
}

if (mobileToggleBtn) {
  mobileToggleBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    const isOpen = navMenu.classList.contains("open");
    if (mobileMenuIcon) {
      mobileMenuIcon.className = isOpen ? "ri-close-line" : "ri-menu-4-line";
    }
  });
}

window.addEventListener("scroll", function () {
  if (navbar) {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initCopyButtons() {
  document.querySelectorAll(".copy-inline-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(function () {
        const tooltip = btn.querySelector(".copy-tooltip");
        const icon = btn.querySelector("i");
        const originalIconClass = icon ? icon.className : "ri-file-copy-line";
        const originalTooltipText = tooltip ? tooltip.textContent : "Copy";

        btn.classList.add("copied");
        if (tooltip) tooltip.textContent = "Copied!";
        if (icon) icon.className = "ri-check-line";

        setTimeout(function () {
          btn.classList.remove("copied");
          if (tooltip) tooltip.textContent = originalTooltipText;
          if (icon) icon.className = originalIconClass;
        }, 2200);
      });
    });
  });
}

const nameInputEl = document.getElementById("contact-name");
const emailInputEl = document.getElementById("contact-email");
const subjectInputEl = document.getElementById("contact-subject");
const messageInputEl = document.getElementById("contact-message");

function updateContactLinks() {
  const name = nameInputEl ? nameInputEl.value.trim() : "";
  const email = emailInputEl ? emailInputEl.value.trim() : "";
  const subject = subjectInputEl ? subjectInputEl.value.trim() : "";
  const message = messageInputEl ? messageInputEl.value.trim() : "";

  if (whatsappQuickBtn) {
    if (message) {
      whatsappQuickBtn.href = "https://wa.me/919622497806?text=" + encodeURIComponent("Hi Syed, " + message + (name ? " (From " + name + ")" : ""));
    } else {
      whatsappQuickBtn.href = "https://wa.me/919622497806?text=Hi%20Syed,%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect!";
    }
  }

  if (gmailWebBtn) {
    const sub = subject || "Portfolio Inquiry";
    const body = (name ? "Name: " + name + "\n" : "") + (email ? "Email: " + email + "\n\n" : "") + message;
    gmailWebBtn.href = "https://mail.google.com/mail/?view=cm&fs=1&to=syedabsar99@gmail.com&su=" + encodeURIComponent(sub) + "&body=" + encodeURIComponent(body);
  }
}

[nameInputEl, emailInputEl, subjectInputEl, messageInputEl].forEach(input => {
  if (input) {
    input.addEventListener("input", updateContactLinks);
  }
});

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInputEl ? nameInputEl.value.trim() : "";
    const email = emailInputEl ? emailInputEl.value.trim() : "";
    const subject = subjectInputEl ? subjectInputEl.value.trim() : "";
    const message = messageInputEl ? messageInputEl.value.trim() : "";

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");

    if (nameError) nameError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (subjectError) subjectError.textContent = "";
    if (messageError) messageError.textContent = "";

    let hasError = false;

    if (!name) {
      if (nameError) nameError.textContent = "Please enter your name.";
      hasError = true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      if (emailError) emailError.textContent = "Please enter your email.";
      hasError = true;
    } else if (!emailPattern.test(email)) {
      if (emailError) emailError.textContent = "Please enter a valid email address.";
      hasError = true;
    }

    if (!subject) {
      if (subjectError) subjectError.textContent = "Please enter a subject.";
      hasError = true;
    }

    if (!message) {
      if (messageError) messageError.textContent = "Please enter your message.";
      hasError = true;
    }

    if (hasError) return;

    const emailSubject = encodeURIComponent(subject + " - from " + name);
    const emailBody = encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\nMessage:\n" + message);

    const mailtoUrl = "mailto:syedabsar99@gmail.com?subject=" + emailSubject + "&body=" + emailBody;

    window.location.href = mailtoUrl;

    if (toastBox && toastMessage) {
      toastBox.className = "toast-box toast-success show";
      toastMessage.innerHTML = "Opening your email app to send message to <strong>syedabsar99@gmail.com</strong>. You can also click <strong>Open in Gmail</strong> or <strong>WhatsApp</strong>!";
      setTimeout(function () {
        toastBox.classList.remove("show");
      }, 7000);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  renderProjects();
  runTypewriter();
  initCopyButtons();

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const initialHash = window.location.hash.replace("#", "").toLowerCase();
  if (initialHash && validPages.includes(initialHash)) {
    showPage(initialHash);
  } else {
    showPage("home");
  }
});
