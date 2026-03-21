/* ======================================================
   efecto-ceniza-pro.js
   SISTEMA DE CENIZA CINEMÁTICA
   - Tamaños aleatorios
   - Velocidad realista
   - Opacidad variable
   - Movimiento más natural
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const cantidad = 60; // 🔥 más partículas = más calidad

    for (let i = 0; i < cantidad; i++) {

        const ceniza = document.createElement("div");
        ceniza.classList.add("ceniza");

        // Posición horizontal aleatoria
        ceniza.style.left = Math.random() * 100 + "vw";

        // Tamaño variable
        const size = Math.random() * 4 + 2; // entre 2px y 6px
        ceniza.style.width = size + "px";
        ceniza.style.height = size + "px";

        // Velocidad (duración animación)
        ceniza.style.animationDuration = (Math.random() * 8 + 6) + "s";

        // Retraso para que no caigan todas al tiempo
        ceniza.style.animationDelay = Math.random() * 5 + "s";

        // Opacidad variable
        ceniza.style.opacity = Math.random();

        // Movimiento lateral leve (más realista)
        ceniza.style.setProperty("--drift", (Math.random() * 100 - 50) + "px");

        document.body.appendChild(ceniza);
    }

});
