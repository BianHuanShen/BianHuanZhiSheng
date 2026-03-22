document.addEventListener("DOMContentLoaded", () => {

    // ===== CAPITULOS =====
    const capitulos = [
        { nombre: "Capítulo 1 - Inicio", link: "../capitulos/capitulo1.html" },
        { nombre: "Capítulo 1 Parte II", link: "../capitulos/capitulo1actoII.html" },
        { nombre: "Capítulo 2 - El Despertar", link: "../capitulos/capitulo2.html" },
        { nombre: "Capítulo 3 - La Ruina", link: "../capitulos/capitulo3.html" }
    ];

    const capContainer = document.getElementById("submenu-capitulos");

    capitulos.forEach(cap => {
        const li = document.createElement("li");

        const a = document.createElement("a");
        a.href = cap.link;
        a.textContent = cap.nombre;

        li.appendChild(a);
        capContainer.appendChild(li);
    });

    // ===== MENU INTERACTIVO =====
    const botones = document.querySelectorAll(".menu-btn");

    botones.forEach(btn => {

        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const submenu = btn.nextElementSibling;

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
