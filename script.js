var audio = document.getElementById("cancion");
audio.volume = 0.1;

var video = document.getElementById('video');
var btnAbrirVideo = document.getElementById('boom'),
        videoOverlay = document.getElementById('video-overlay'),
        videoPopup = document.getElementById('video-popup'),
        btnCerrarVideo = document.getElementById('btn-cerrar-video');

        btnAbrirVideo.addEventListener('click', function()
        {
            videoOverlay.classList.add('active');
            videoPopup.classList.add('active');
        });

        btnCerrarVideo.addEventListener('click', function()
        {
            videoOverlay.classList.remove('active');
            videoPopup.classList.remove('active');
            video.pause();
        });
