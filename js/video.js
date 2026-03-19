/* ======================================================
   video-pro.js
   SISTEMA CINEMÁTICO DE VIDEOS
   - Autoplay al hacer scroll
   - Pausa automática
   - Multi trailers
   - Botón interactivo
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const containers = document.querySelectorAll(".video-interactivo");

    if (!containers.length) return;

    containers.forEach(container => {

        const video = container.querySelector("video");
        const playBtn = container.querySelector(".play-btn");

        // CLICK SOLO EN EL VIDEO (NO EN TODO EL CONTENEDOR)
        video.addEventListener("click", (e) => {

            e.stopPropagation();

            if (video.paused) {

                document.querySelectorAll("video").forEach(v => {
                    if (v !== video) v.pause();
                });

                video.play();
                playBtn.style.display = "none";

            } else {

                video.pause();
                playBtn.style.display = "flex";

            }

        });

        // MOSTRAR BOTÓN SI PAUSA
        video.addEventListener("pause", () => {
            playBtn.style.display = "flex";
        });

        // OCULTAR BOTÓN SI REPRODUCE
        video.addEventListener("play", () => {
            playBtn.style.display = "none";
        });

        // FIN
        video.addEventListener("ended", () => {
            playBtn.style.display = "flex";
        });

    });

});
