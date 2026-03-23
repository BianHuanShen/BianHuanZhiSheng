/* =====================================================
   THEMES.JS - FINAL PRO + TEMAS + ENERGÍA + RESET
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const root = document.documentElement;

    const themeBtn = document.getElementById("themeBtn");
    const btnStyleBtn = document.getElementById("btnStyleBtn");
    const resetBtn = document.getElementById("resetTheme");

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
       MAPEO DE MODOS
    ========================= */
    const modeMap = {
        "bg": ["--bg", "--card"],
        "h": ["--h-color"],
        "p": ["--p-color"],
        "btn-bg": ["--btn-color"],
        "btn-text": ["--btn-text"]
    };

    /* =========================
       TEMA CENIZA (DEFAULT)
    ========================= */
    const defaultThemeName = "ceniza";

    /* =========================
       TEMAS
    ========================= */
    const themes = {
        fuego: {
            "--bg": "#0d0d0d",
            "--card": "#1a1a1a",
            "--h-color": "#ff4500",
            "--p-color": "#e6c76b",
            "--btn-color": "#ff2400",
            "--btn-text": "#ffffff"
        },
        ceniza: {
            "--bg": "#1a1a1a",
            "--card": "#2a2a2a",
            "--h-color": "#cccccc",
            "--p-color": "#999999",
            "--btn-color": "#555555",
            "--btn-text": "#ffffff"
        },
        vacio: {
            "--bg": "#000000",
            "--card": "#050505",
            "--h-color": "#6a0dad",
            "--p-color": "#aaaaaa",
            "--btn-color": "#4b0082",
            "--btn-text": "#ffffff"
        }
    };

    /* =========================
       APLICAR TEMA
    ========================= */
    const applyTheme = (themeName) => {
        const theme = themes[themeName];
        if (!theme) return;

        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        document.body.classList.remove("energia-fuego", "energia-ceniza", "energia-vacio");
        document.body.classList.add("energia-" + themeName);

        localStorage.setItem("theme", themeName);
    };

    /* =========================
       RESET (AHORA BIEN HECHO)
    ========================= */
    const resetTheme = () => {

        // Limpiar SOLO lo necesario
        localStorage.removeItem("theme");

        Object.keys(modeMap).forEach(mode => {
            localStorage.removeItem(mode);
        });

        // Aplicar ceniza otra vez
        applyTheme(defaultThemeName);
    };

    resetBtn?.addEventListener("click", resetTheme);

    /* =========================
       COLORES
    ========================= */
    const colors = [
        "#000000", "#0d0d0d", "#1a1a1a", "#222222",
        "#8b0000", "#b22222", "#ff2400", "#ff4500",
        "#e6c76b", "#ffcc00",
        "#4b0082", "#003366", "#013220",
        "#008080", "#cccccc", "#ffffff"
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
       APLICAR COLOR MANUAL
    ========================= */
    const applyColor = (color) => {
        const vars = modeMap[currentMode];
        if (!vars) return;

        vars.forEach(v => root.style.setProperty(v, color));
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
       PANELES
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
       RESTAURAR CONFIG
    ========================= */

    // 1. Cargar tema guardado o default (ceniza)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(defaultThemeName);
    }

    // 2. Aplicar overrides manuales (colores personalizados)
    Object.keys(modeMap).forEach(mode => {
        const saved = localStorage.getItem(mode);
        if (!saved) return;

        modeMap[mode].forEach(v => {
            root.style.setProperty(v, saved);
        });
    });

    /* =========================
       ATAJOS
    ========================= */
    window.setTemaFuego = () => applyTheme("fuego");
    window.setTemaCeniza = () => applyTheme("ceniza");
    window.setTemaVacio = () => applyTheme("vacio");

});