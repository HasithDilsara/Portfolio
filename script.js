const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const mouse = {
    x: null,
    y: null,
    radius: 200 
};

// Fixed: Use clientX/Y for scrollable pages
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x; 
        this.baseY = y;
        this.size = Math.random() * 1.5 + 1;
        this.density = (Math.random() * 20) + 5;
        this.color = this.getRandomColor();
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = Math.random() * 0.02 + 0.005;
        this.driftRange = Math.random() * 15 + 5;
    }

    getRandomColor() {
        const colors = ['#d3f7f8', '#eaeaff', '#4efafd', '#8effac'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        this.angle += this.velocity;
        let driftX = Math.sin(this.angle) * this.driftRange;
        let driftY = Math.cos(this.angle) * this.driftRange;

        let targetX = this.baseX + driftX;
        let targetY = this.baseY + driftY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;

            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== targetX) {
                let dx = this.x - targetX;
                this.x -= dx / 20;
            }
            if (this.y !== targetY) {
                let dy = this.y - targetY;
                this.y -= dy / 20;
            }
        }
    }
}

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    
    const numberOfParticles = (canvas.width * canvas.height) / 4000; 
    for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
    }
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    init();
});

// Typewriter logic
const nameText = "Hasith Dilsara";
const nameElement = document.getElementById('name-typewriter');
let nameIndex = 0;

function typeName() {
    if (nameElement && nameIndex < nameText.length) {
        nameElement.textContent += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, 150);
    }
}
// Typewriter logic 
const nameTextt = "Blending the precision of Engineering with creativity";
const nameElementt = document.getElementById('title-typewriter');
let nameIndext = 0;

function typeNames() {
    if (nameElementt && nameIndext < nameTextt.length) {
        nameElementt.textContent += nameTextt.charAt(nameIndext);
        nameIndext++;
        setTimeout(typeNames, 30);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    animate();
    typeName();
    typeNames();
});

//jghg

/* ============================
   PROJECTS SECTION ANIMATION
============================ */

const projectsCanvas = document.getElementById("projectsCanvas");
const projectsCtx = projectsCanvas.getContext("2d");
const projectsSection = document.getElementById("projects");

let projectPoints = [];
const PROJECT_POINT_COUNT = 100;
const PROJECT_MAX_DISTANCE = 120;

function resizeProjectsCanvas() {
    projectsCanvas.width = projectsSection.clientWidth;
    projectsCanvas.height = projectsSection.clientHeight;
}

class ProjectPoint {
    constructor() {
        this.x = Math.random() * projectsCanvas.width;
        this.y = Math.random() * projectsCanvas.height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.size =4 ;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = projectsCanvas.width;
        if (this.x > projectsCanvas.width) this.x = 0;
        if (this.y < 0) this.y = projectsCanvas.height;
        if (this.y > projectsCanvas.height) this.y = 0;
    }

    draw() {
        projectsCtx.beginPath();
        projectsCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        projectsCtx.fillStyle = "rgba(0,255,255,0.8)";        //color dots
        projectsCtx.fill();
    }
}

function connectProjectPoints() {
    for (let i = 0; i < projectPoints.length; i++) {
        for (let j = i + 1; j < projectPoints.length; j++) {

            let dx = projectPoints[i].x - projectPoints[j].x;
            let dy = projectPoints[i].y - projectPoints[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < PROJECT_MAX_DISTANCE) {
                let opacity = 1 - distance / PROJECT_MAX_DISTANCE;

                projectsCtx.strokeStyle = `rgba(255,0,255,${opacity * 0.8})`;   //color line
                projectsCtx.lineWidth = 3;
                projectsCtx.beginPath();
                projectsCtx.moveTo(projectPoints[i].x, projectPoints[i].y);
                projectsCtx.lineTo(projectPoints[j].x, projectPoints[j].y);
                projectsCtx.stroke();
            }
        }
    }
}

function initProjectsAnimation() {
    resizeProjectsCanvas();
    projectPoints = [];
    for (let i = 0; i < PROJECT_POINT_COUNT; i++) {
        projectPoints.push(new ProjectPoint());
    }
}

function animateProjects() {
    projectsCtx.clearRect(0, 0, projectsCanvas.width, projectsCanvas.height);

    projectPoints.forEach(p => {
        p.update();
        p.draw();
    });

    connectProjectPoints();
    requestAnimationFrame(animateProjects);
}

window.addEventListener("resize", () => {
    resizeProjectsCanvas();
    initProjectsAnimation();
});

initProjectsAnimation();
animateProjects();

/* =====================
   CAROUSEL NAVIGATION
===================== */

const carousel = document.querySelector(".carousel");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

rightBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
});


/* =====================
   MODAL LOGIC
===================== */

const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

const projectDetails = {
    1: "<h3>Project 1</h3><p>Full detailed description of project 1.</p>",
    2: "<h3>Project 2</h3><p>Full detailed description of project 2.</p>",
    3: "<h3>Project 3</h3><p>Full detailed description of project 3.</p>"
};

document.querySelectorAll(".info-btn").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-project");
        modalBody.innerHTML = projectDetails[id];
        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
carousel.scrollBy({ left: 300, behavior: "smooth" });
rightBtn.addEventListener("click", () => {
    const cardWidth = document.querySelector(".project-card").offsetWidth + 20;
    carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
    const cardWidth = document.querySelector(".project-card").offsetWidth + 20;
    carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {

    const helloBtn = document.getElementById("contactHelloBtn");
    const socialMenu = document.getElementById("contactSocialMenu");

    helloBtn.addEventListener("click", function () {
        socialMenu.classList.toggle("show");
        console.log("clicked");
    });

});


