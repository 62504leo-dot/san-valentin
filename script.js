// corazones más suaves
function createHeart(){
    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML="💖";
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=(Math.random()*4+4)+"s";
    heart.style.fontSize=(Math.random()*25+15)+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),8000);
}
setInterval(createHeart,400);

// mover NO
function moveNo(){
    const btn=document.getElementById("no");
    btn.style.position="absolute";
    btn.style.left=Math.random()*70+"%";
    btn.style.top=Math.random()*70+"%";
}

// magia mejorada
function startMagic(){
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("roseScene").classList.remove("hidden");

    // florecer lentamente
    setTimeout(()=>{
        document.getElementById("petal1").setAttribute("r","40");
    },2500);

    setTimeout(()=>{
        document.getElementById("petal2").setAttribute("r","35");
        document.getElementById("petal3").setAttribute("r","35");
    },3200);

    setTimeout(()=>{
        document.getElementById("petal4").setAttribute("r","28");
        document.getElementById("petal5").setAttribute("r","28");
    },3900);

    // zorro camina
    setTimeout(()=>{
        document.getElementById("fox").style.left="38%";
    },4200);

    // quitar zorro después
    setTimeout(()=>{
        document.getElementById("fox").style.opacity="0";
    },7000);

    // mostrar firma
    setTimeout(()=>{
        document.getElementById("signBox").classList.remove("hidden");
    },7200);
}

// final con firma real
function finalScene(){
    const name=document.getElementById("signature").value;
    if(name===""){
        alert("Pon tu nombre bonito primero 🥺💕");
        return;
    }

    document.getElementById("signBox").classList.add("hidden");
    document.getElementById("roseScene").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");

    document.getElementById("accepted").innerHTML =
    name + " ✨ & Christian Patricio<br><b>cita aceptada 💕</b>";
}
