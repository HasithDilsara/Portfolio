const CONFIG = {
  email: 'hasithd123@gmail.com',
  whatsapp: '+94757234461'
};

const icon = (name) => `<svg aria-hidden="true"><use href="#icon-${name}"></use></svg>`;

const experiences = [
  {
    company: 'Designx',
    role: 'Founder / Principal Designer',
    period: 'Dec 2024 – Present',
    location: 'Sri Lanka',
    summary: 'Designx is a creative design and visual storytelling studio that specializes in delivering high-quality content and visual solutions for clients across various industries.',
    bullets: ['Founded and manage a creative design studio, providing services in graphic design, branding, and visual content creation.'],
    socialLinks: [
      { icon: 'facebook', label: 'Designx Facebook', href: 'https://web.facebook.com/designXsl' },
      { icon: 'instagram', label: 'Designx Instagram', href: 'https://www.instagram.com/designx_creations' },
      { icon: 'behance', label: 'Designx Behance', href: 'https://www.behance.net/DesignX_sl' }
    ]
  },
  {
    company: 'Latest Advertising',
    role: 'Graphic Designer',
    period: 'Jul 2024 – Mar 2025',
    location: 'Mawanella, Sri Lanka',
    summary: 'Latest Advertising is a dynamic advertising agency that focuses on creating impactful visual solutions and print media for clients across various sectors.',
    bullets: ['Designed and executed creative advertising campaigns, including print, digital, and social media assets.'],
  },
  {
    company: 'Fiverr Freelance',
    role: 'Freelance Designer',
    period: '2021 – 2023',
    location: 'Sri Lanka',
    summary: 'Provided freelance design services on Fiverr, specializing in graphic design, branding, and visual content creation for clients worldwide.',
    bullets: ['Delivered high-quality design projects for clients, including logos, social media graphics, and marketing materials.']
  }
];

const projects = [
  
  {
    title: 'Personal Portfolio Website',
    category: 'Web Portfolio',
    icon: 'code',
    description: 'A personal portfolio website showcasing my skills, projects, and experiences. The website is designed to be responsive and visually appealing, providing an overview of my professional background and work.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Responsive UI', 'GitHub Pages'],
    github: 'https://github.com/HasithDilsara/Portfolio'
  },
  {
    title: '3D CAD Engine With camera',
    category: 'CAD',
    icon: 'cpu',
    description: 'A 3D CAD engine with camera controls, allowing users to view and manipulate 3D models in a virtual environment. The engine supports basic rendering, transformations, and user interactions.',
    tools: ['Python', 'mediapipe', '3D', 'CAD'],
    github: 'https://github.com/HasithDilsara/3D-CAD-Engine'
  },
  {
    title: 'AI File Renamer',
    category: 'AI & Automation',
    icon: 'cpu',
    description: 'An AI-powered file renaming tool that uses machine learning algorithms to automatically rename files based on their content, metadata, or user-defined rules. It simplifies file organization and management.',
    tools: ['Python', 'Florance ai', 'Microsoft florence', 'image recognition', 'File management'],
    github: 'https://github.com/HasithDilsara/File-renamer'
  }
];

const skills = [
  {
    title: 'CAD & Mechanical Design',
    icon: 'tools',
    items: ['SolidWorks', 'AutoCAD', 'AutoCAD Plant 3D', 'Fusion 360', '3D Modelling', 'P&ID', 'Plant Layout', 'Technical Drawings']
  },
  {
    title: 'PLC, HMI & Automation',
    icon: 'factory',
    items: ['TIA Portal', 'GX Works', 'Codesys', 'CCW', 'SoftMaster', 'PLstudio', 'Kinco HMIware', 'PLC Programming', 'HMI Design', 'VFD']
  },
  {
    title: 'Embedded & Robotics',
    icon: 'cpu',
    items: ['Arduino', 'C Programming', 'Microcontrollers', 'Motor Control', 'Sensors', 'Servo Control', 'Stepper Control', 'Robotics']
  },
  {
    title: 'Software & Machine Vision',
    icon: 'code',
    items: ['Python', 'Java', 'Flutter', 'Dart', 'SQLite', 'OpenCV', 'NumPy', 'Git', 'GitHub']
  },
  {
    title: 'Simulation & Project Tools',
    icon: 'spark',
    items: ['MATLAB', 'LabVIEW', 'Festo FluidSIM', 'EPLAN', 'Microsoft Visio', 'Microsoft 365', 'Primavera P6', 'ROBODK']
  }
];

const education = [
  {
    title: 'Bachelor of Engineering Technology (Honours) - Mechatronic Technology',
    institute: 'University of Sri Jayewardenepura',
    period: '2025 – 2029',
    description: 'Focused on mechatronics, automation, mechanical systems, embedded systems and engineering technology.',
    url: 'https://www.sjp.ac.lk/'
  },
  {
    title: 'G.C.E. Advanced Level - Engineering Technology Stream',
    institute: 'Sri Lanka',
    period: '2023',
    description: 'Engineering Technology: A, Science for Technology: A, ICT: A, Z-Score: 2.7726.',
    url: '#'
  },
  {
    title: 'G.C.E. Ordinary Level',
    institute: 'Sri Lanka',
    period: '2020',
    description: '5 A Passes | 4 B Pass.',
    url: '#'
  }
];

const certificates = [
  {
    title: 'Latest Resume / CV',
    issuer: 'Heshala Maduwantha',
    detail: 'Updated resume used as the main downloadable CV on this portfolio.',
    file: 'assets/documents/Hasith Dilsara_CV.pdf'
  },
  {
    title: 'Programmable Logic Controllers(PLC) Course',
    issuer: 'Sri lanka Institute of Robotics',
    detail: '150-hour training course. Classification: Very Good Pass.',
    file: 'assets/certificates/plc.pdf'
  },
  {
    title: 'Python Programming_E-Certificate',
    issuer: 'Centre for Open & Distance Learning - University of Moratuwa',
    detail: 'Online learning programme in Python programming. Issued on jul 17, 2024.',
    file: 'assets/certificates/Python_Programming_E-Certificate.pdf'
  },
  {
    title: 'Server side Web Programming E-Certificate',
    issuer: 'Centre for Open & Distance Learning - University of Moratuwa',
    detail: 'Online learning programme in server side web programming. Issued on May 20, 2024.',
    file: 'assets/certificates/Server-side_Web_Programming_E-Certificate.pdf'
  },
  {
    title: 'Front-End Web Development E-Certificate',
    issuer: 'Centre for Open & Distance Learning - University of Moratuwa',
    detail: 'Online learning programme in Front-End_Web_Development. Issued on May 20, 2024.',
    file: 'assets/certificates/Front-End_Web_Development_E-Certificate.pdf'
  },
  {
    title: 'G.C.E. Advanced Level Results',
    issuer: 'Department of Examinations - Sri Lanka',
    detail: 'Engineering Technology stream: ICT A, Engineering Technology B, Science for Technology A, Z-score 2.7155.',
    file: 'assets/certificates/AL_Results.pdf'
  },
  {
    title: 'G.C.E. Ordinary Level Results',
    issuer: 'Department of Examinations - Sri Lanka',
    detail: '2017 Ordinary Level result sheet: 8 A passes and 1 C pass.',
    file: 'assets/certificates/OL_Results.pdf'
  }
];

function setupParticles() {
  const canvas = document.querySelector('#particle-canvas');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const context = canvas.getContext('2d');
  const particles = [];
  const mouse = { x: -1000, y: -1000, vx: 0, vy: 0, active: false };
  const settings = {
    density: 0.00012,
    minSize: 0.5,
    maxSize: 1.45,
    driftSpeed: 0.22,
    mouseRadius: 145,
    returnStrength: 0.014,
    friction: 0.94,
    palettes: {
      dark: [[34, 238, 156], [34, 211, 238], [168, 85, 247], [245, 158, 11]],
      light: [[14, 116, 144], [8, 145, 178], [126, 34, 206], [180, 83, 9]]
    }
  };
  let width = 0;
  let height = 0;
  let animationFrame;

  function activePalette() {
    return settings.palettes[document.documentElement.dataset.theme] || settings.palettes.dark;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles.length = 0;
    const count = Math.min(180, Math.floor(width * height * settings.density));
    for (let index = 0; index < count; index += 1) particles.push(new Particle());
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.baseX = this.x;
      this.baseY = this.y;
      this.depth = Math.random();
      this.size = settings.minSize + Math.random() * (settings.maxSize - settings.minSize);
      this.speed = settings.driftSpeed * (0.3 + this.depth * 1.2);
      this.phase = Math.random() * Math.PI * 2;
      this.vx = 0;
      this.vy = 0;
      this.alpha = 0.3 + Math.random() * 0.56;
      this.colorIndex = Math.floor(Math.random() * 4);
    }

    update() {
      this.phase += 0.01;
      this.vx += Math.sin(this.phase * 0.7 + this.y * 0.002) * 0.1;
      this.vy -= this.speed;

      if (mouse.active) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        if (distance < settings.mouseRadius) {
          const force = 1 - distance / settings.mouseRadius;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force * 0.22 + mouse.vx * force * 0.02;
          this.vy += Math.sin(angle) * force * 0.22 + mouse.vy * force * 0.02;
        }
      }

      this.vx += (this.baseX - this.x) * settings.returnStrength;
      this.vy += (this.baseY - this.y) * settings.returnStrength;
      this.vx *= settings.friction;
      this.vy *= settings.friction;
      this.x += this.vx;
      this.y += this.vy;
      this.baseY -= this.speed;

      if (this.baseY < -30) {
        this.baseY = height + 30;
        this.y = this.baseY;
      }
      if (this.x < -30) this.x = this.baseX = width + 30;
      if (this.x > width + 30) this.x = this.baseX = -30;
      if (this.y < -50) this.y = this.baseY = height + 50;
    }

    draw() {
      const depth = 0.45 + this.depth * 0.9;
      const [red, green, blue] = activePalette()[this.colorIndex];
      context.beginPath();
      context.arc(this.x, this.y, this.size * depth, 0, Math.PI * 2);
      context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${this.alpha * (0.4 + this.depth * 0.7)})`;
      context.fill();
    }
  }

  function animate() {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    mouse.vx *= 0.9;
    mouse.vy *= 0.9;
    animationFrame = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', (event) => {
    mouse.vx = event.clientX - mouse.x;
    mouse.vy = event.clientY - mouse.y;
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.active = true;
  }, { passive: true });
  window.addEventListener('pointerleave', () => { mouse.active = false; }, { passive: true });
  window.addEventListener('beforeunload', () => cancelAnimationFrame(animationFrame), { once: true });
  resize();
  animate();
}

function renderExperiences() {
  const list = document.querySelector('#experience-list');
  list.innerHTML = experiences.map((item, index) => `
    <article class="timeline-item reveal ${index ? 'delay-1' : ''}">
      <span class="timeline-dot"></span>
      <div class="timeline-card">
        <header>
          <div>
            <h3>${item.company}</h3>
            <span class="role">${item.role}</span>
          </div>
          <span class="period">${item.period}</span>
        </header>
        <p><strong>${item.location}</strong></p>
        <p>${item.summary}</p>
        <ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        ${item.socialLinks ? `
          <div class="experience-social social-block" aria-label="${item.company} social links">
            <span class="social-label">${item.company}</span>
            <div class="social-row">
              ${item.socialLinks.map(link => `<a href="${link.href}" target="_blank" rel="noreferrer" aria-label="${link.label}">${icon(link.icon)}</a>`).join('')}
            </div>
          </div>
        ` : ''}
        ${item.cblProjects ? `
          <div class="experience-projects">
            <h4>CBL Internship Projects</h4>
            <div class="experience-project-grid">
              ${item.cblProjects.map(project => `
                <article class="experience-project-card">
                  <span>${icon(project.icon)}</span>
                  <div>
                    <strong>${project.title}</strong>
                    <p>${project.detail}</p>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </article>
  `).join('');
}

function renderFilters() {
  const filters = ['All', ...new Set(projects.map(project => project.category))];
  const filterRow = document.querySelector('#project-filters');
  filterRow.innerHTML = filters.map((filter, index) => `
    <button type="button" class="${index === 0 ? 'active' : ''}" data-filter="${filter}">${filter}</button>
  `).join('');
}

function projectCard(project) {
  const hasRepo = project.github && project.github !== '#';
  return `
    <article class="project-card reveal" data-category="${project.category}">
      <div class="project-card-shine" aria-hidden="true"></div>
      <div class="project-icon">${icon(project.icon)}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tag-list">${project.tools.map(tool => `<span>${tool}</span>`).join('')}</div>
      <div class="project-actions">
        <a class="${hasRepo ? '' : 'disabled'}" href="${hasRepo ? project.github : '#'}" target="_blank" rel="noreferrer">${icon('github')} ${hasRepo ? 'GitHub Repo' : 'Add repo link'}</a>
      </div>
    </article>
  `;
}

function renderProjects(filter = 'All') {
  const grid = document.querySelector('#projects-grid');
  const filtered = filter === 'All' ? projects : projects.filter(project => project.category === filter);
  grid.innerHTML = filtered.map(projectCard).join('');
  observeReveal();
  addCardGlow();
}

function renderSkills() {
  const grid = document.querySelector('#skills-grid');
  grid.innerHTML = skills.map((group, index) => `
    <article class="skill-card reveal ${index % 3 === 1 ? 'delay-1' : ''} ${index % 3 === 2 ? 'delay-2' : ''}">
      <header>
        <span class="skill-icon">${icon(group.icon)}</span>
        <h3>${group.title}</h3>
      </header>
      <ul>${group.items.map(item => `<li>${item}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderEducation() {
  const grid = document.querySelector('#education-grid');
  grid.innerHTML = education.map((item, index) => {
    const hasUrl = item.url && item.url !== '#';
    return `
      <article class="edu-card reveal ${index % 2 ? 'delay-1' : ''}">
        <span class="year">${item.period}</span>
        <h3>${item.title}</h3>
        <p><strong>${item.institute}</strong></p>
        <p>${item.description}</p>
        ${hasUrl ? `<a href="${item.url}" target="_blank" rel="noreferrer">Visit official website ${icon('external')}</a>` : ''}
      </article>
    `;
  }).join('');
}

function renderCertificates() {
  const grid = document.querySelector('#cert-grid');
  grid.innerHTML = certificates.map((item, index) => `
    <article class="cert-card reveal ${index % 3 === 1 ? 'delay-1' : ''} ${index % 3 === 2 ? 'delay-2' : ''}">
      <div class="cert-top">
        <span class="cert-badge">${icon('award')}</span>
        <small>${item.issuer}</small>
      </div>
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
      <div class="cert-actions">
        <button type="button" data-open-pdf="${item.file}" data-title="${item.title}">${icon('eye')} View</button>
        <a href="${item.file}" download>${icon('download')} Download</a>
      </div>
    </article>
  `).join('');
}

function observeReveal() {
  const elements = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  elements.forEach(element => observer.observe(element));
}

function addCardGlow() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });
}

function setupTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = savedTheme || (prefersLight ? 'light' : 'dark');
  document.documentElement.dataset.theme = initialTheme;
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
  });
}

function setupNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const panel = document.querySelector('[data-nav-panel]');
  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.innerHTML = open ? '<svg><use href="#icon-close"></use></svg>' : '<svg><use href="#icon-menu"></use></svg>';
  });
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<svg><use href="#icon-menu"></use></svg>';
  }));

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.nav-panel a')];
  window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 130;
    let active = sections[0]?.id;
    sections.forEach(section => {
      if (section.offsetTop <= fromTop) active = section.id;
    });
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${active}`));
  }, { passive: true });
}

function setupProjectFilters() {
  document.querySelector('#project-filters').addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    document.querySelectorAll('#project-filters button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
}

function setupBackToTop() {
  const button = document.querySelector('.back-top');
  if (!button) return;

  const updateVisibility = () => {
    button.classList.toggle('show', window.scrollY > window.innerHeight * 0.7);
  };

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();
}

function setupModal() {
  const modal = document.querySelector('#pdf-modal');
  const frame = document.querySelector('#pdf-frame');
  const title = document.querySelector('#modal-title');
  const openNewTab = document.querySelector('#modal-open-new');

  document.body.addEventListener('click', event => {
    const openButton = event.target.closest('[data-open-pdf]');
    const closeButton = event.target.closest('[data-close-modal]');
    if (openButton) {
      const pdfUrl = openButton.dataset.openPdf;
      title.textContent = openButton.dataset.title;
      frame.src = `${pdfUrl}#toolbar=1&navpanes=0&zoom=page-fit`;
      openNewTab.href = pdfUrl;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    if (closeButton) closeModal();
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });

  function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    frame.src = '';
    openNewTab.href = '#';
    document.body.style.overflow = '';
  }
}

function setupContactForm() {
  const form = document.querySelector('#contact-form');
  const whatsappButton = document.querySelector('#whatsapp-button');

  const getMessage = () => {
    const data = new FormData(form);
    return {
      name: data.get('name')?.trim() || '',
      email: data.get('email')?.trim() || '',
      subject: data.get('subject')?.trim() || 'Portfolio Contact',
      message: data.get('message')?.trim() || ''
    };
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    const { name, email, subject, message } = getMessage();
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  });

  whatsappButton.addEventListener('click', () => {
    const { name, email, subject, message } = getMessage();
    const text = encodeURIComponent(`Hello Heshala,\n\n${message || 'I contacted you through your portfolio website.'}\n\nName: ${name || '-'}\nEmail: ${email || '-'}\nSubject: ${subject || 'Portfolio Contact'}`);
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${text}`, '_blank', 'noreferrer');
  });
}

function disableMissingSocials() {
  document.querySelectorAll('.needs-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert('This social profile link is not configured yet.');
    });
  });
}

function init() {
  renderExperiences();
  renderFilters();
  renderProjects();
  renderSkills();
  renderEducation();
  renderCertificates();
  setupTheme();
  setupParticles();
  setupNavigation();
  setupBackToTop();
  setupProjectFilters();
  setupModal();
  setupContactForm();
  disableMissingSocials();
  addCardGlow();
  observeReveal();
  document.querySelector('#year').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);
