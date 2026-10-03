// music.js — plays song.mp3 at 30% volume on page load

const audio = new Audio('Surroundings.mp3');
audio.volume = 0.1; // 0.0 to 1.0 — change to whatever volume you want
audio.loop = true;

function startMusic() {
    audio.play();
    document.removeEventListener('click', startMusic);
    document.removeEventListener('keydown', startMusic);
}

audio.play().catch(function () {
    document.addEventListener('click', startMusic);
    document.addEventListener('keydown', startMusic);
});