/* 1. ABRIR CARTA */
function openLetter() {
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');
    
    flap.style.transform = "rotateX(180deg)";
    
    setTimeout(() => {
        letter.classList.remove('letter-closed');
        letter.classList.add('letter-open');
    }, 400);
}

/* 2. BOTÓN "NO" SE ESCAPA */
function moveNo() {
    const btn = document.getElementById('no');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

/* 3. ACEPTAR (SECUENCIA) */
function acceptLove() {
    const letter = document.getElementById('letter');
    const envelope = document.getElementById('envelope');
    const garden = document.getElementById('garden-scene');
    const fox = document.getElementById('fox');
    const rose = document.getElementById('rose');

    // Quemar carta
    letter.classList.add('burning');
    
    setTimeout(() => {
        // Limpiar pantalla
        envelope.style.opacity = '0';
        letter.style.display = 'none';
        envelope.style.display = 'none';
        
        // Mostrar escenario
        garden.style.display = 'block';
        rose.style.opacity = '1';

        // Mover Zorro
        const center = window.innerWidth / 2 - 40; 
        fox.style.left = center + 'px';

        // Esperar al zorro para florecer
        setTimeout(() => {
            bloomRose();
        }, 3000);

    }, 1500); 
}

/* 4. FLORECER ROSA Y MOSTRAR INPUT */
function bloomRose() {
    const petals = document.querySelectorAll('.petal');
    const leaves = document.querySelectorAll('.leaf');
    const finalContainer = document.getElementById('final-container');

    // Animación flor
    petals.forEach((p, i) => {
        setTimeout(() => { p.style.transform = "scale(1)"; }, i * 300);
    });
    leaves.forEach(l => l.style.opacity = "1");

    // MOSTRAR SOLO EL INPUT (Paso A)
    setTimeout(() => {
        finalContainer.style.display = 'block';
        // Aseguramos que el resultado siga oculto por si acaso
        document.getElementById('result-step').style.display = 'none';
    }, 2000);
}

/* 5. FIRMAR Y MOSTRAR FINAL (Paso B) */
function signContract() {
    const nameInput = document.getElementById('herName').value;
    const step1 = document.getElementById('input-step');
    const step2 = document.getElementById('result-step');
    const nameDisplay = document.getElementById('herNameDisplay');

    if(nameInput.trim() === "") {
        alert("¡Escribe tu nombre hermoso! 💖");
        return;
    }

    // Poner nombre
    nameDisplay.innerText = nameInput;

    // MAGIA: Ocultar input y mostrar resultado
    step1.style.display = 'none'; // Adiós input
    step2.style.display = 'block'; // Hola final

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