document.addEventListener("DOMContentLoaded", () => {

    // ===== CAPITULOS =====
    const capContainer = document.getElementById("submenu-capitulos");

    for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="capitulos/capitulo${i}.html">Capítulo ${i}</a>`;
        capContainer.appendChild(li);
    }

    // ===== TEORIAS =====
    const teorias = ["Origen del Cambio", "Dioses", "Dragones"];

    const teoriasContainer = document.getElementById("submenu-teorias");

    teorias.forEach(t => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${t}</a>`;
        teoriasContainer.appendChild(li);
    });

    // ===== PERSONAJES =====
    const personajes = ["Kaelen", "Voss", "Luminari"];

    const personajesContainer = document.getElementById("submenu-personajes");

    personajes.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${p}</a>`;
        personajesContainer.appendChild(li);
    });

    // ===== UNIVERSO =====
    const universo = ["Valthera", "Aurelion", "Fragmentos"];

    const universoContainer = document.getElementById("submenu-universo");

    universo.forEach(u => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${u}</a>`;
        universoContainer.appendChild(li);
    });

    // ===== INTERACCIÓN =====
    const items = document.querySelectorAll(".menu-item");

    items.forEach(item => {

        item.addEventListener("click", (e) => {
            e.preventDefault();

            const submenu = item.querySelector(".submenu");

            // cerrar otros
            document.querySelectorAll(".submenu").forEach(s => {
                if (s !== submenu) s.style.display = "none";
            });

            // toggle
            submenu.style.display =
                submenu.style.display === "block" ? "none" : "block";
        });

    });

});
