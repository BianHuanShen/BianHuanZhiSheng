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

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            const container = entry.target;
            const video = container.querySelector("video");
            const playBtn = container.querySelector(".play-btn");

            if (entry.isIntersecting) {

                // Pausar todos los demás
                document.querySelectorAll("video").forEach(v => {
                    if (v !== video) v.pause();
                });

                video.play().catch(() => {});
                playBtn.style.display = "none";

            } else {

                video.pause();
                playBtn.style.display = "flex";

            }

        });

    }, {
        threshold: 0.6 // se activa cuando el 60% es visible
    });

    containers.forEach(container => {

        const video = container.querySelector("video");
        const playBtn = container.querySelector(".play-btn");

        observer.observe(container);

        // CLICK MANUAL
        container.addEventListener("click", () => {

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

        // FIN DEL VIDEO
        video.addEventListener("ended", () => {
            playBtn.style.display = "flex";
        });

    });

});
