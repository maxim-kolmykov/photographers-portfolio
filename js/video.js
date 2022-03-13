//*****   Video player  *****
//Play
const poster = document.querySelector('.poster');
const viewerVideo = document.querySelector('.viewer');
const togglePlayBtn = document.querySelector('.toggle_play');
const buttonPlay = document.querySelector('.play');
const videoPlayBtn = document.querySelector('.play-btn');
//progress
const progressBar = document.querySelector('.video-progressbar');
//time
const currTime = document.querySelector('.video-time');
//volume
const volumeBtn = document.querySelector('.volume-icon');
const volumevol = document.querySelector('.volume-progressbar');
//fullscreen
const fullscreenBtn = document.querySelector('.fullscreen-icon');
const videoPlayerWrap = document.querySelector('.video-player-wrap');
///Progress color
const colorgold = '#BDAE82';
const colorSilver = '#C8C8C8';

//Play
function togglePlay() {
    if (viewerVideo.paused) {
        viewerVideo.play();
        videoPlayBtn.style.display = 'none';
        poster.classList.add('clousePoster');
        buttonPlay.style.backgroundImage = "url('./assets/svg/pause.svg')";
        poster.style.backgroundImage = "url('./assets/img/empty.png')";
    } else {
        viewerVideo.pause();
        videoPlayBtn.style.display = 'block';
        buttonPlay.style.backgroundImage = "url('./assets/svg/play.svg')";
    }
}

viewerVideo.addEventListener('click', togglePlay);
togglePlayBtn.addEventListener('click', togglePlay);
videoPlayBtn.addEventListener('click', togglePlay);
poster.addEventListener('click', togglePlay);


// time
const videoTime = (time) => {
    time = Math.floor(time);
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    let minutesValue = minutes;
    let secondsValue = seconds;
    if (minutes < 10) {
        minutesValue = `0${minutes}`;
    }
    if (seconds < 10) {
        secondsValue = `0${seconds}`;
    }
    return `${minutesValue}:${secondsValue}`;
}

//video Progress
const videoProgress = () => {
    let progress = (Math.floor(viewerVideo.currentTime) / (Math.floor(viewerVideo.duration) / 100));
    progressBar.value = progress;
    currTime.innerHTML = videoTime(viewerVideo.currentTime);
    progressBar.style.background = `linear-gradient(to right, ${colorgold} 0%, ${colorgold} ${progress}%, ${colorSilver} ${progress}%, ${colorSilver} 100%)`;
}

viewerVideo.addEventListener('timeupdate', videoProgress);

progressBar.addEventListener("input", function() {
    var newTime = viewerVideo.duration * (progressBar.value / 100);
    viewerVideo.currentTime = newTime;
})

//Volume
const videoChangeVolume = () => {
    let volume = volumevol.value / 100;
    viewerVideo.volume = volume;
    if (viewerVideo.volume == 0) {
        volumeBtn.style.backgroundImage = "url('./assets/svg/mute.svg')";
    } else {
        volumeBtn.style.backgroundImage = "url('./assets/svg/volume.svg')";
    }
}
const videoMute = () => {
    if (viewerVideo.volume == 0) {
        viewerVideo.volume = volumevol.value / 100;
        volumeBtn.style.backgroundImage = "url('./assets/svg/volume.svg')";
    } else {
        viewerVideo.volume = 0;
        volumeBtn.style.backgroundImage = "url('./assets/svg/mute.svg')";
    }
}
volumeBtn.addEventListener('click', videoMute);
volumevol.addEventListener('change', videoChangeVolume);

volumevol.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, ${colorgold} 0%, ${colorgold} ${value}%, ${colorSilver} ${value}%, ${colorSilver} 100%)`
})

//Fullscreen
const openFullscreen = () => {
    if (document.fullscreenElement === null) {
        videoPlayerWrap.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

fullscreenBtn.addEventListener('click', openFullscreen);

document.addEventListener("fullscreenchange", () => {
    fullscreenBtn.classList.toggle("active");
});