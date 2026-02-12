// Corazones cayendo
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML="❤️";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (Math.random()*3+2)+"s";
    heart.style.fontSize = (Math.random()*20+15)+"px";
    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),5000);
}
setInterval(createHeart,300);

// Abrir carta
function openLetter(){
    document.querySelector(".envelope").style.display="none";
    document.getElementById("letter").classList.remove("hidden");
}

// Mover botón NO
function moveNo(){
    const btn=document.getElementById("no");
    btn.style.position="absolute";
    btn.style.left=Math.random()*70+"%";
    btn.style.top=Math.random()*70+"%";
}

// Aceptar amor
function acceptLove(){
    const letter=document.getElementById("letter");
    letter.classList.add("burn");

    setTimeout(()=>{
        letter.classList.add("hidden");
        document.getElementById("finalLetter").classList.remove("hidden");
    },2000);
}

// Confirmar firma
function confirmLove(){
    const name=document.getElementById("signature").value;
    if(name===""){
        alert("Tienes que firmar primero 😏");
        return;
    }

    document.getElementById("finalLetter").classList.add("hidden");
    document.getElementById("finalMessage").classList.remove("hidden");
}
