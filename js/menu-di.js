document.addEventListener("DOMContentLoaded", () => {

    // ===== CAPITULOS =====

const capitulos = [
    { nombre: "Capítulo 1 - Inicio", link: "../capitulos/capitulo1.html" },
    { nombre: "Capítulo 1 Parte II", link: "capitulos/capitulo1actoII.html" },
    { nombre: "Capítulo 2 - El Despertar", link: "capitulos/capitulo2.html" },
    { nombre: "Capítulo 3 - La Ruina", link: "capitulos/capitulo3.html" }
];

const capContainer = document.getElementById("submenu-capitulos");

// 🔥 LIMPIAR POR SI SE EJECUTA DOS VECES
capContainer.innerHTML = "";

capitulos.forEach(cap => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = cap.link;
    a.textContent = cap.nombre;

    li.appendChild(a);
    capContainer.appendChild(li);
});
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
