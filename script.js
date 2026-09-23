// ==========================================================================
// Portfolio Script - Syed Noor Ul Absar
// Frontend Web Developer | BCA Graduate from Chandigarh University
// Simple, clean, humanized Vanilla JavaScript
// ==========================================================================

// --------------------------------------------------------------------------
// 1. Projects Data List (All 12 projects from github.com/syedabsar99)
// --------------------------------------------------------------------------
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
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
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

// --------------------------------------------------------------------------
// 2. DOM Elements & State
// --------------------------------------------------------------------------
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
const toastBox = document.getElementById("toast-box");
const toastMessage = document.getElementById("toast-message");
const currentYearSpan = document.getElementById("current-year");

// Active filters state
let activeCategoryFilter = "all";
let activeSearchQuery = "";

// --------------------------------------------------------------------------
// 3. Simple Multi-Page Navigation Router
// --------------------------------------------------------------------------
const validPages = ["home", "about", "education", "skills", "projects", "contact"];

function showPage(pageName) {
  if (!validPages.includes(pageName)) {
    pageName = "home";
  }

  // Hide all page views
  const pageViews = document.querySelectorAll(".page-view");
  pageViews.forEach(page => {
    page.classList.remove("active");
  });

  // Activate the selected page view
  const targetPage = document.getElementById("page-" + pageName);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  // Update active status on nav menu items
  document.querySelectorAll(".nav-link[data-page]").forEach(link => {
    if (link.getAttribute("data-page") === pageName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Update footer links active style
  document.querySelectorAll(".footer-links a[data-page]").forEach(link => {
    if (link.getAttribute("data-page") === pageName) {
      link.style.color = "var(--accent-cyan)";
    } else {
      link.style.color = "";
    }
  });

  // Update URL hash
  if (window.location.hash !== "#" + pageName) {
    window.location.hash = pageName;
  }

  // Smooth scroll to top for fresh page feel
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Click listener for all page navigation triggers
document.addEventListener("click", function(event) {
  const trigger = event.target.closest("[data-page]");
  if (trigger) {
    const page = trigger.getAttribute("data-page");
    if (validPages.includes(page)) {
      event.preventDefault();
      showPage(page);

      // Close mobile menu if open
      navMenu.classList.remove("open");
      if (mobileMenuIcon) {
        mobileMenuIcon.className = "ri-menu-4-line";
      }
    }
  }
});

// Hashchange handler for browser Back / Forward buttons & direct links
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash && validPages.includes(hash)) {
    showPage(hash);
  }
});

// --------------------------------------------------------------------------
// 4. Render Projects Card Function (Real-Time Search + Category Filter)
// --------------------------------------------------------------------------
function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.replaceChildren();

  const query = activeSearchQuery.trim().toLowerCase();

  // Filter projects by category AND search query
  const filteredProjects = projects.filter(project => {
    // 1. Category check
    const matchesCategory = activeCategoryFilter === "all" || project.category === activeCategoryFilter;
    if (!matchesCategory) return false;

    // 2. Search query check (title, description, tags)
    if (!query) return true;
    const titleMatch = project.title.toLowerCase().includes(query);
    const descMatch = project.description.toLowerCase().includes(query);
    const tagsMatch = project.tags.some(tag => tag.toLowerCase().includes(query));
    return titleMatch || descMatch || tagsMatch;
  });

  // Calculate and update category tab counter badges based on current search query
  const allMatching = projects.filter(p => !query || p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.tags.some(t => t.toLowerCase().includes(query))).length;
  const jsMatching = projects.filter(p => p.category === "javascript" && (!query || p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.tags.some(t => t.toLowerCase().includes(query)))).length;
  const uiMatching = projects.filter(p => p.category === "landing-pages" && (!query || p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.tags.some(t => t.toLowerCase().includes(query)))).length;

  const countAllEl = document.getElementById("count-all");
  const countJsEl = document.getElementById("count-js");
  const countUiEl = document.getElementById("count-ui");
  if (countAllEl) countAllEl.textContent = allMatching;
  if (countJsEl) countJsEl.textContent = jsMatching;
  if (countUiEl) countUiEl.textContent = uiMatching;

  // Render empty state if no projects match
  if (filteredProjects.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "no-projects-found";
    
    const emptyIcon = document.createElement("div");
    emptyIcon.className = "empty-icon";
    emptyIcon.innerHTML = `<i class="ri-search-eye-line"></i>`;

    const emptyTitle = document.createElement("h3");
    emptyTitle.className = "empty-title";
    emptyTitle.textContent = "No matching projects found";

    const emptyDesc = document.createElement("p");
    emptyDesc.className = "empty-desc";
    emptyDesc.textContent = `No project matched "${activeSearchQuery}". Try searching for keywords like "Music", "API", "LocalStorage", or "Clone".`;

    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "btn btn-secondary btn-sm";
    resetBtn.innerHTML = `<i class="ri-refresh-line"></i> <span>Reset Filters</span>`;
    resetBtn.addEventListener("click", () => {
      if (projectSearchInput) projectSearchInput.value = "";
      activeSearchQuery = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";
      activeCategoryFilter = "all";
      filterButtons.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-filter") === "all");
      });
      renderProjects();
    });

    emptyState.appendChild(emptyIcon);
    emptyState.appendChild(emptyTitle);
    emptyState.appendChild(emptyDesc);
    emptyState.appendChild(resetBtn);
    projectsGrid.appendChild(emptyState);
    return;
  }

  // Render Project Cards
  filteredProjects.forEach(project => {
    // Card element
    const card = document.createElement("div");
    card.classList.add("project-card");

    // Banner Top
    const banner = document.createElement("div");
    banner.classList.add("project-banner");

    const categoryBadge = document.createElement("span");
    categoryBadge.classList.add("project-category-badge");
    categoryBadge.textContent = project.category === "javascript" ? "JavaScript App" : "Landing Page";

    const iconIndicator = document.createElement("i");
    iconIndicator.className = `${project.icon} project-icon-indicator`;

    banner.appendChild(categoryBadge);
    banner.appendChild(iconIndicator);

    // Card Body
    const body = document.createElement("div");
    body.classList.add("project-body");

    const title = document.createElement("h3");
    title.classList.add("project-title");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.classList.add("project-desc");
    desc.textContent = project.description;

    // Tech Tags List
    const tagsContainer = document.createElement("div");
    tagsContainer.classList.add("project-tags");
    project.tags.forEach(tagText => {
      const tag = document.createElement("span");
      tag.classList.add("project-tag");
      tag.textContent = tagText;
      tagsContainer.appendChild(tag);
    });

    // Action Buttons
    const actions = document.createElement("div");
    actions.classList.add("project-actions");

    if (project.demoUrl) {
      const demoBtn = document.createElement("a");
      demoBtn.href = project.demoUrl;
      demoBtn.target = "_blank";
      demoBtn.rel = "noopener noreferrer";
      demoBtn.classList.add("btn", "btn-primary", "btn-sm");
      
      const demoSpan = document.createElement("span");
      demoSpan.textContent = "Live Demo";
      const demoIcon = document.createElement("i");
      demoIcon.classList.add("ri-external-link-line");

      demoBtn.appendChild(demoSpan);
      demoBtn.appendChild(demoIcon);
      actions.appendChild(demoBtn);
    }

    const codeBtn = document.createElement("a");
    codeBtn.href = project.githubUrl;
    codeBtn.target = "_blank";
    codeBtn.rel = "noopener noreferrer";
    codeBtn.classList.add("btn", "btn-secondary", "btn-sm");

    const codeSpan = document.createElement("span");
    codeSpan.textContent = "GitHub";
    const codeIcon = document.createElement("i");
    codeIcon.classList.add("ri-github-fill");

    codeBtn.appendChild(codeIcon);
    codeBtn.appendChild(codeSpan);
    actions.appendChild(codeBtn);

    // Assemble Card
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(tagsContainer);
    body.appendChild(actions);

    card.appendChild(banner);
    card.appendChild(body);

    projectsGrid.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// 5. Project Filter Tabs & Real-Time Search Handlers
// --------------------------------------------------------------------------
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    activeCategoryFilter = button.getAttribute("data-filter");
    renderProjects();
  });
});

if (projectSearchInput) {
  projectSearchInput.addEventListener("input", (event) => {
    activeSearchQuery = event.target.value;
    if (clearSearchBtn) {
      clearSearchBtn.style.display = activeSearchQuery ? "flex" : "none";
    }
    renderProjects();
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener("click", () => {
    if (projectSearchInput) {
      projectSearchInput.value = "";
      projectSearchInput.focus();
    }
    activeSearchQuery = "";
    clearSearchBtn.style.display = "none";
    renderProjects();
  });
}


// --------------------------------------------------------------------------
// 6. Typewriter Intro Animation (Synchronized with "I build...")
// --------------------------------------------------------------------------
const typewriterTextElement = document.getElementById("typewriter-text");
const phrases = [
  "clean, responsive web interfaces.",
  "interactive JavaScript web applications.",
  "pixel-perfect UI & landing page clones.",
  "modern, performant frontend experiences."
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

  // Once phrase is fully typed
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 1900; // Pause at end of phrase
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 400; // Brief pause before typing next phrase
  }

  setTimeout(runTypewriter, typeSpeed);
}

// --------------------------------------------------------------------------
// 7. Dark / Light Theme Toggle with LocalStorage
// --------------------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem("syed-portfolio-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("syed-portfolio-theme", newTheme);
});

// --------------------------------------------------------------------------
// 8. Mobile Navigation Drawer Toggle
// --------------------------------------------------------------------------
mobileToggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  const isOpen = navMenu.classList.contains("open");
  
  if (isOpen) {
    mobileMenuIcon.className = "ri-close-line";
  } else {
    mobileMenuIcon.className = "ri-menu-4-line";
  }
});

// --------------------------------------------------------------------------
// 9. Sticky Navbar on Scroll
// --------------------------------------------------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// --------------------------------------------------------------------------
// 10. Back to Top Button
// --------------------------------------------------------------------------
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// --------------------------------------------------------------------------
// 11. 1-Click Clipboard Copy Buttons
// --------------------------------------------------------------------------
function initCopyButtons() {
  document.querySelectorAll(".copy-inline-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const tooltip = btn.querySelector(".copy-tooltip");
        const icon = btn.querySelector("i");
        const originalIconClass = icon ? icon.className : "ri-file-copy-line";
        const originalTooltipText = tooltip ? tooltip.textContent : "Copy";

        btn.classList.add("copied");
        if (tooltip) tooltip.textContent = "Copied!";
        if (icon) icon.className = "ri-check-line";

        setTimeout(() => {
          btn.classList.remove("copied");
          if (tooltip) tooltip.textContent = originalTooltipText;
          if (icon) icon.className = originalIconClass;
        }, 2200);
      } catch (err) {
        console.warn("Clipboard write failed, using fallback:", err);
        // Fallback for older browsers
        const tempInput = document.createElement("input");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }
    });
  });
}

// --------------------------------------------------------------------------
// 12. Dynamic WhatsApp Link Sync (Prefills user's message)
// --------------------------------------------------------------------------
const messageInputEl = document.getElementById("contact-message");
if (messageInputEl && whatsappQuickBtn) {
  messageInputEl.addEventListener("input", () => {
    const userText = messageInputEl.value.trim();
    if (userText) {
      whatsappQuickBtn.href = `https://wa.me/919622497806?text=${encodeURIComponent("Hi Syed, " + userText)}`;
    } else {
      whatsappQuickBtn.href = "https://wa.me/919622497806?text=Hi%20Syed,%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect!";
    }
  });
}

// --------------------------------------------------------------------------
// 13. Real Contact Form Submission via FormSubmit AJAX + Direct WhatsApp Fallback
// --------------------------------------------------------------------------
if (contactForm) {
  contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (subjectInput.value.trim() === "") {
      subjectError.textContent = "Please enter a subject.";
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Please write a brief message.";
      isValid = false;
    }

    if (!isValid) return;

    const senderName = nameInput.value.trim();
    const senderEmail = emailInput.value.trim();
    const senderSubject = subjectInput.value.trim();
    const senderMessage = messageInput.value.trim();

    // Show sending loading state on submit button
    const originalBtnHtml = formSubmitBtn.innerHTML;
    formSubmitBtn.disabled = true;
    formSubmitBtn.innerHTML = `<span>Sending...</span> <i class="ri-loader-4-line spin-animation"></i>`;

    try {
      // Send real email to syedabsar99@gmail.com via FormSubmit AJAX
      const response = await fetch("https://formsubmit.co/ajax/syedabsar99@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          _subject: `Portfolio Message: ${senderSubject}`,
          message: senderMessage,
          _captcha: "false",
          _template: "table"
        })
      });

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        toastBox.className = "toast-box toast-success show";
        toastMessage.textContent = `Thank you, ${senderName}! Your message was successfully sent to Syed's email inbox (syedabsar99@gmail.com).`;
        contactForm.reset();
      } else if (result.message && result.message.includes("Activation")) {
        // FormSubmit requires 1-time activation confirmation in Syed's Gmail inbox
        toastBox.className = "toast-box toast-info show";
        toastMessage.innerHTML = `Message registered! FormSubmit sent a 1-time "Activate Form" email to <strong>syedabsar99@gmail.com</strong>. Syed: check your inbox (or Spam) and click Activate to receive future submissions. You can also chat directly on WhatsApp!`;
        contactForm.reset();
      } else {
        throw new Error(result.message || "Email service error");
      }
    } catch (err) {
      console.warn("Direct form submit error, providing fallback:", err);
      toastBox.className = "toast-box toast-warning show";
      toastMessage.innerHTML = `Unable to send via background service. <a href="mailto:syedabsar99@gmail.com?subject=${encodeURIComponent(senderSubject)}&body=${encodeURIComponent(senderMessage + '\n\nFrom: ' + senderName + ' (' + senderEmail + ')')}" style="text-decoration:underline;color:inherit;font-weight:700;">Click here to send via your email app</a>, or click <strong>Chat on WhatsApp</strong>!`;
    } finally {
      formSubmitBtn.disabled = false;
      formSubmitBtn.innerHTML = originalBtnHtml;

      setTimeout(() => {
        toastBox.classList.remove("show");
      }, 10000);
    }
  });
}

// --------------------------------------------------------------------------
// 14. Initial Startup & Deep Link Navigation
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects();
  runTypewriter();
  initCopyButtons();
  
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Check if URL has a specific hash (e.g., #projects, #about, #contact)
  const initialHash = window.location.hash.replace("#", "").toLowerCase();
  if (initialHash && validPages.includes(initialHash)) {
    showPage(initialHash);
  } else {
    showPage("home");
  }
});

