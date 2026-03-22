/* =====================================================
   THEMES.JS - OPTIMIZADO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ROOT (CSS VARIABLES)
    ========================= */
    const root = document.documentElement;

    /* =========================
       ELEMENTOS
    ========================= */
    const themeBtn = document.getElementById("themeBtn");
    const btnStyleBtn = document.getElementById("btnStyleBtn");

    const colorPanel = document.getElementById("colorPanel");
    const btnPanel = document.getElementById("btnPanel");

    const closePalette = document.getElementById("closePalette");
    const closeBtnPalette = document.getElementById("closeBtnPalette");

    const palettes = document.querySelectorAll(".palette");
    const modeButtons = document.querySelectorAll(".mode-btn");

    const colorPicker = document.getElementById("colorPicker");
    const btnColorPicker = document.getElementById("btnColorPicker");

    let currentMode = "bg";

    /* =========================
       MAPEO DE MODOS ? CSS VAR
    ========================= */
    const modeMap = {
        "bg": ["--bg", "--card"],
        "h": ["--h-color"],
        "p": ["--p-color"],
        "btn-bg": ["--btn-color"],
        "btn-text": ["--btn-text"]
    };

    /* =========================
       COLORES DISPONIBLES
    ========================= */
    const colors = [
        "#000000", "#0d0d0d", "#1a1a1a", "#222222",
        "#8b0000", "#b22222", "#ff2400", "#ff4500",
        "#e6c76b", "#ffcc00",
        "#2f1b0c", "#3a1f0f",
        "#4b0082", "#6a0dad",
        "#003366", "#0047ab",
        "#013220", "#228b22",
        "#008080", "#20b2aa",
        "#cccccc", "#ffffff"
    ];

    /* =========================
       CREAR PALETAS
    ========================= */
    const createPalette = (palette) => {
        palette.innerHTML = "";

        colors.forEach(color => {
            const swatch = document.createElement("div");
            swatch.className = "color-swatch";
            swatch.style.backgroundColor = color;

            swatch.addEventListener("click", () => applyColor(color));

            palette.appendChild(swatch);
        });
    };

    palettes.forEach(createPalette);

    /* =========================
       APLICAR COLOR
    ========================= */
    const applyColor = (color) => {
        const vars = modeMap[currentMode];

        if (!vars) return;

        vars.forEach(v => root.style.setProperty(v, color));

        // Guardar en localStorage
        localStorage.setItem(currentMode, color);
    };

    /* =========================
       CAMBIO DE MODO
    ========================= */
    modeButtons.forEach(btn => {
        btn.addEventListener("click", () => {

            modeButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentMode = btn.dataset.mode;
        });
    });

    /* =========================
       COLOR PICKERS
    ========================= */
    const handlePicker = (picker) => {
        if (!picker) return;

        picker.addEventListener("input", e => {
            applyColor(e.target.value);
        });
    };

    handlePicker(colorPicker);
    handlePicker(btnColorPicker);

    /* =========================
       CONTROL DE PANELES
    ========================= */
    const showPanel = (panelToShow) => {
        colorPanel.classList.add("hidden");
        btnPanel.classList.add("hidden");

        panelToShow.classList.remove("hidden");
    };

    themeBtn?.addEventListener("click", () => {
        showPanel(colorPanel);
        currentMode = "bg";
    });

    btnStyleBtn?.addEventListener("click", () => {
        showPanel(btnPanel);
        currentMode = "btn-bg";
    });

    closePalette?.addEventListener("click", () => {
        colorPanel.classList.add("hidden");
    });

    closeBtnPalette?.addEventListener("click", () => {
        btnPanel.classList.add("hidden");
    });

    /* =========================
       RESTAURAR CONFIGURACIÓN
    ========================= */
    Object.keys(modeMap).forEach(mode => {
        const saved = localStorage.getItem(mode);
        if (!saved) return;

        modeMap[mode].forEach(v => {
            root.style.setProperty(v, saved);
        });
    });

});