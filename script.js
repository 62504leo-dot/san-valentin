/* Lluvia de Corazones */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = Math.random() < 0.5 ? "💖" : "🌸"; // Mezcla corazones y flores
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);

/* Abrir carta */
function openLetter() {
    const flap = document.getElementById("flap");
    const letter = document.getElementById("letter");
    const envelope = document.getElementById("envelope");

    // Animación del sobre abriéndose
    flap.style.transform = "rotateX(180deg)";
    
    // Esperar un poco y mostrar la carta encima
    setTimeout(() => {
        letter.style.display = "block";
        // Ocultar texto de "tócame" para limpiar
        document.getElementById("tapText").style.display = "none";
    }, 400);
}

/* Botón NO esquivo */
function moveNo() {
    const btn = document.getElementById("no");
    // Límites para que no se salga mucho de la carta (ajustado al viewport)
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 50);
    
    btn.style.position = "fixed";
    btn.style.left = newX + "px";
    btn.style.top = newY + "px";
}

/* Aceptar amor */
function acceptLove() {
    const letter = document.getElementById("letter");
    const envelope = document.getElementById("envelope");
    const roseSection = document.getElementById("roseSection");

    // Efecto de desaparecer la carta
    letter.classList.add("burn");
    
    // Ocultar el sobre también suavemente
    envelope.style.transition = "opacity 1s";
    envelope.style.opacity = "0";

    setTimeout(() => {
        letter.style.display = "none";
        envelope.style.display = "none"; // Eliminar sobre del flujo
        roseSection.style.display = "block";

        // Animar pétalos (florecer)
        const petals = document.querySelectorAll(".petal");
        petals.forEach((p, i) => {
            setTimeout(() => {
                p.style.transform = "scale(1)";
            }, i * 200);
        });

        // Animar hojas
        const leaves = document.querySelectorAll(".leaf");
        leaves.forEach((l) => {
            l.style.opacity = "1";
        });

        // Mostrar mensaje final
        setTimeout(() => {
            const finalDiv = document.getElementById("final");
            finalDiv.style.opacity = "1";
        }, 1500);

    }, 1500);
}