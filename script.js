const audio = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const volumeSlider = document.getElementById('volume-slider');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.className = 'fas fa-pause';
    } else {
        audio.pause();
        playIcon.className = 'fas fa-play';
    }
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});
