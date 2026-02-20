const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
        }
    });
});
const text = "Fatima Atiq";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-name").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        dx: (Math.random() - 0.5),
        dy: (Math.random() - 0.5)
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#00d2ff";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
}

animate();

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 20;
        const rotateY = (x - centerX) / 20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});

const sections = document.querySelectorAll("section, div[id]");
const navLinks = document.querySelectorAll(".btn");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active-link");
        }
    });
});