document.addEventListener("DOMContentLoaded", () => {

    // ===== DATOS DE TODOS LOS MENÚS =====
    const menus = {
        "submenu-capitulos": [
            { nombre: "Capítulo 1 - Inicio", link: "capitulos/capitulo1.html" },
            { nombre: "Capítulo 1 Parte II", link: "capitulos/capitulo1actoII.html" },
            { nombre: "Capítulo 2 - El Despertar", link: "capitulos/capitulo2.html" }
        ],

        "submenu-teorias": [
            { nombre: "Teoría del Cambio", link: "capitulos/inicio.html" },
            { nombre: "El origen", link: "teorias/origen.html" }
        ],

        "submenu-personajes": [
            { nombre: "Kaelen", link: "personajes/kaelen.html" },
            { nombre: "Dantor", link: "personajes/dantor.html" }
        ],

        "submenu-universo": [
            { nombre: "El Grimorio", link: "universo/grimorio.html" },
            { nombre: "Dimensiones", link: "universo/dimensiones.html" }
        ]
    };

    // ===== GENERADOR AUTOMÁTICO =====
    Object.keys(menus).forEach(id => {

        const container = document.getElementById(id);
        if (!container) return;

        menus[id].forEach(item => {

            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = item.link;
            a.textContent = item.nombre;

            li.appendChild(a);
            container.appendChild(li);

        });

    });

    // ===== MENU INTERACTIVO =====
    const botones = document.querySelectorAll(".menu-item > a");

    botones.forEach(btn => {

        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const submenu = btn.nextElementSibling;

            if (!submenu) return;

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