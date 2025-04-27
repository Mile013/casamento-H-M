function startPetals() {
    const container = document.body;

    for (let i = 0; i < 50; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(petal);
    }
}

const style = document.createElement('style');
style.innerHTML = `
.petal {
    position: fixed;
    top: -10px;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, pink 30%, transparent 30%);
    border-radius: 50%;
    opacity: 0.8;
    animation: fall 5s linear infinite;
}

@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
