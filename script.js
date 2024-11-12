document.addEventListener('DOMContentLoaded', () => {
    const videoElem = document.getElementById('myVideo');
    const playButton = document.getElementById('playVid');
    
    playButton.addEventListener('click', () => {
        videoElem.play();
    });
    });