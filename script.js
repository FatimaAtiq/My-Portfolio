// Interactive Sakura Petal Physics System
const canvas = document.getElementById('sakura-canvas');
const ctx = canvas.getContext('2d');

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

class Petal {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.size = Math.random() * 8 + 6;
        this.speedY = Math.random() * 1.2 + 0.8;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.6 + 0.3;
    }

    update() {
        this.y += this.speedY;
        this.x += Math.sin(this.angle) * 0.8 + this.speedX;
        this.angle += this.spin;

        if (this.y > height + 20) {
            this.reset();
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = `rgba(255, 183, 197, ${this.opacity})`;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size, -this.size / 2, -this.size, this.size, 0, this.size * 1.5);
        ctx.bezierCurveTo(this.size, this.size, this.size, -this.size / 2, 0, 0);
        ctx.fill();
        ctx.restore();
    }
}

// Generate Petal Pool
const petals = Array.from({ length: 45 }, () => new Petal());

function animate() {
    ctx.clearRect(0, 0, width, height);
    petals.forEach((petal) => {
        petal.update();
        petal.draw();
    });
    requestAnimationFrame(animate);
}

animate();