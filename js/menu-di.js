document.addEventListener("DOMContentLoaded", () => {

    // ===== CAPITULOS =====
    const capitulos = [
        { nombre: "Capítulo 1 - Inicio", link: "capitulos/capitulo1.html" },
        { nombre: "Capítulo 1 Parte II", link: "capitulos/capitulo1actoII.html" },
        { nombre: "Capítulo 2 - El Despertar", link: "capitulos/capitulo2.html" },
        { nombre: "Capítulo 3 - La Ruina", link: "capitulos/capitulo3.html" }
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

    // ===== MENU =====
    const items = document.querySelectorAll(".menu-item");

    items.forEach(item => {

        const boton = item.querySelector("a");
        const submenu = item.querySelector(".submenu");

        if (!submenu) return;

        boton.addEventListener("click", (e) => {
            e.preventDefault(); // SOLO para abrir menú

            document.querySelectorAll(".submenu").forEach(s => {
                if (s !== submenu) s.style.display = "none";
            });

            submenu.style.display =
                submenu.style.display === "block" ? "none" : "block";
        });

    });

});
