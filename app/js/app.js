// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
    let video = document.getElementsByClassName("header__video")[0];
    let playButton = document.getElementsByClassName("header__play")[0];
    function playVideo() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
    playButton.addEventListener("click", playVideo);
})