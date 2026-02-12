// corazones kawaii
function createHeart(){
    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML="💖";
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=(Math.random()*3+3)+"s";
    heart.style.fontSize=(Math.random()*20+15)+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart,300);

// abrir sobre
function openEnvelope(){
    document.querySelector(".flap").style.transform="rotateX(180deg)";
    setTimeout(()=>{
        document.querySelector(".envelope-container").classList.add("hidden");
        document.getElementById("letter").classList.remove("hidden");
    },1000);
}

// mover botón NO
function moveNo(){
    const btn=document.getElementById("no");
    btn.style.position="absolute";
    btn.style.left=Math.random()*80+"%";
    btn.style.top=Math.random()*80+"%";
}

// magia completa
function startMagic(){
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("roseScene").classList.remove("hidden");

    // florecer pétalos
    setTimeout(()=>{
        document.getElementById("petal1").setAttribute("r","35");
        document.getElementById("petal2").setAttribute("r","30");
        document.getElementById("petal3").setAttribute("r","30");
    },2000);

    // mover zorro
    setTimeout(()=>{
        document.getElementById("fox").style.left="40%";
    },2500);

    // mostrar firma
    setTimeout(()=>{
        document.getElementById("signBox").classList.remove("hidden");
    },4500);
}

// final
function finalScene(){
    const name=document.getElementById("signature").value;
    if(name===""){
        alert("Pon tu nombre bonito primero 🥺💕");
        return;
    }

    document.getElementById("signBox").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");

    document.getElementById("accepted").innerHTML =
    "Cinnamoroll ✨ & Christian Patricio<br><b>cita aceptada 💕</b>";
}
