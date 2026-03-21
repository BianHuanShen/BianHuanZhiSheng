document.addEventListener("DOMContentLoaded", () => {

    const cantidad = 30;

    for (let i = 0; i < cantidad; i++) {
        const ceniza = document.createElement("div");
        ceniza.classList.add("ceniza");

        ceniza.style.left = Math.random() * 100 + "vw";
        ceniza.style.animationDuration = (Math.random() * 5 + 5) + "s";

        document.body.appendChild(ceniza);
    }

});
