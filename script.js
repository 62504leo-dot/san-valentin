/* 1. ABRIR SOBRE */
function openLetter() {
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');
    
    // Girar la solapa
    flap.style.transform = "rotateX(180deg)";
    
    // Esperar medio segundo y sacar la carta
    setTimeout(() => {
        letter.classList.remove('letter-closed');
        letter.classList.add('letter-open');
    }, 500);
}

/* 2. BOTÓN "NO" */
function moveNo() {
    const btn = document.getElementById('no');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

/* 3. ACEPTAR Y MOSTRAR JARDÍN */
function acceptLove() {
    const letter = document.getElementById('letter');
    const envelope = document.getElementById('envelope');
    const garden = document.getElementById('garden-scene');
    const fox = document.getElementById('fox');
    const rose = document.getElementById('rose');

    // Quemar la carta
    letter.classList.add('burning');
    
    setTimeout(() => {
        // Ocultar sobre y carta
        envelope.style.display = 'none';
        letter.style.display = 'none';
        
        // Mostrar escenario vacío
        garden.style.display = 'block';
        rose.style.opacity = '1';

        // Mover al zorro
        const center = window.innerWidth / 2 - 40; 
        fox.style.left = center + 'px';

        // Esperar a que llegue el zorro para florecer
        setTimeout(() => {
            bloomRose();
        }, 3000);

    }, 1500); 
}

/* 4. FLORECER Y PEDIR FIRMA */
function bloomRose() {
    const petals = document.querySelectorAll('.petal');
    const leaves = document.querySelectorAll('.leaf');
    const finalContainer = document.getElementById('final-container');
    const inputStep = document.getElementById('input-step');
    const resultStep = document.getElementById('result-step');

    // Animación de la rosa
    petals.forEach((p, i) => {
        setTimeout(() => { p.style.transform = "scale(1)"; }, i * 300);
    });
    leaves.forEach(l => l.style.opacity = "1");

    // Mostrar contenedor del formulario
    setTimeout(() => {
        finalContainer.style.display = 'block';
        inputStep.style.display = 'block'; // Asegurar que se ve el input
        resultStep.style.display = 'none'; // Asegurar que NO se ve el final
    }, 2000);
}

/* 5. FIRMAR Y MOSTRAR FINAL */
function signContract() {
    const nameInput = document.getElementById('herName').value;
    const inputStep = document.getElementById('input-step');
    const resultStep = document.getElementById('result-step');
    const nameDisplay = document.getElementById('herNameDisplay');

    if(nameInput.trim() === "") {
        alert("¡Escribe tu nombre bonito! 💖");
        return;
    }

    // Poner el nombre en el contrato
    nameDisplay.innerText = nameInput;

    // INTERCAMBIAR PANTALLAS
    inputStep.style.display = 'none'; // Ocultar input
    resultStep.style.display = 'block'; // Mostrar resultado

    launchConfetti();
}

function launchConfetti() {
    for(let i=0; i<50; i++) {
        const conf = document.createElement('div');
        conf.innerHTML = ["❤️","🌹","✨"][Math.floor(Math.random()*3)];
        conf.style.position = 'fixed';
        conf.style.left = Math.random()*100 + 'vw';
        conf.style.top = '-10px';
        conf.style.fontSize = Math.random()*20 + 10 + 'px';
        conf.style.animation = `fall ${Math.random()*2+2}s linear`;
        document.body.appendChild(conf);
    }
}