const audio = new Audio('Surroundings.mp3');
audio.volume = 0.1;
audio.loop = true;
audio.muted = true;

let musicStarted = false;

audio.play().catch(error => {
    console.warn('Muted autoplay failed:', error);
});

function startMusic() {
    if (musicStarted) return;
    musicStarted = true;

    audio.muted = false;

    audio.play().then(() => {
        document.removeEventListener('click', startMusic);
        document.removeEventListener('keydown', startMusic);
        document.removeEventListener('scroll', startMusic);
        document.removeEventListener('touchstart', startMusic);
        document.removeEventListener('mousemove', startMusic);
    }).catch(error => {
        musicStarted = false;
        audio.muted = true;
        console.error('Playback failed:', error);
    });
}

document.addEventListener('click', startMusic);
document.addEventListener('keydown', startMusic);
document.addEventListener('scroll', startMusic, { passive: true });
document.addEventListener('touchstart', startMusic, { passive: true });
document.addEventListener('mousemove', startMusic, { passive: true, once: true });