/* 1. ABRIR CARTA */
function openLetter() {
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');
    
    // Abre el sobre
    flap.style.transform = "rotateX(180deg)";
    
    // Saca la carta con un pequeño retraso
    setTimeout(() => {
        letter.classList.remove('letter-closed');
        letter.classList.add('letter-open');
    }, 400);
}

/* 2. BOTÓN "NO" SE ESCAPA */
function moveNo() {
    const btn = document.getElementById('no');
    // Genera posición aleatoria dentro de la ventana
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

/* 3. ACEPTAR (SECUENCIA COMPLETA) */
function acceptLove() {
    const letter = document.getElementById('letter');
    const envelope = document.getElementById('envelope');
    const garden = document.getElementById('garden-scene');
    const fox = document.getElementById('fox');
    const rose = document.getElementById('rose');

    // A. Incendiar carta
    letter.classList.add('burning');
    
    // Ocultar sobre suavemente
    setTimeout(() => {
        envelope.style.opacity = '0';
        letter.style.display = 'none';
        envelope.style.display = 'none';
        
        // B. Mostrar jardín y Zorro
        garden.style.display = 'block';
        rose.style.opacity = '1'; // Mostrar la rosa (aún cerrada)

        // C. Mover al zorro hacia el centro
        // Calculamos el centro de la pantalla
        const center = window.innerWidth / 2 - 40; // Ajuste por tamaño del emoji
        fox.style.left = center + 'px';

        // D. Esperar a que el zorro llegue (3 segundos) para florecer
        setTimeout(() => {
            bloomRose();
        }, 3000);

    }, 1500); // Tiempo que tarda en quemarse
}

/* 4. FLORECER ROSA */
function bloomRose() {
    const petals = document.querySelectorAll('.petal');
    const leaves = document.querySelectorAll('.leaf');
    const inputContainer = document.getElementById('final-container');

    // Animación pétalos
    petals.forEach((p, i) => {
        setTimeout(() => {
            p.style.transform = "scale(1)";
        }, i * 300);
    });

    // Animación hojas
    leaves.forEach(l => l.style.opacity = "1");

    // E. Mostrar input para firmar
    setTimeout(() => {
        inputContainer.style.display = 'block';
    }, 2000);
}

/* 5. FIRMAR Y MOSTRAR FINAL */
function signContract() {
    const nameInput = document.getElementById('herName').value;
    const step1 = document.getElementById('input-step');
    const step2 = document.getElementById('result-step');
    const nameDisplay = document.getElementById('herNameDisplay');

    if(nameInput.trim() === "") {
        alert("¡Por favor firma el pacto! 💖");
        return;
    }

    // Guardar nombre y cambiar pantalla
    nameDisplay.innerText = nameInput;
    step1.style.display = 'none';
    step2.style.display = 'block';

    // Lanzar confeti (opcional, simple con emojis)
    launchConfetti();
}

function launchConfetti() {
    for(let i=0; i<30; i++) {
        const conf = document.createElement('div');
        conf.innerHTML = "🎉";
        conf.style.position = 'fixed';
        conf.style.left = Math.random()*100 + 'vw';
        conf.style.top = '-10px';
        conf.style.animation = `fall ${Math.random()*2+2}s linear`;
        document.body.appendChild(conf);
    }
}