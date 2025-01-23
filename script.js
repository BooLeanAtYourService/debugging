
    const videoElem = document.getElementById('myVideo');
    const playPauseButton = document.getElementById('btnPlay');

    
    playPauseButton.addEventListener('click', () => {
      if (videoElem.paused) {
        videoElem.muted = false;
        videoElem.play();
        playPauseButton.textContent = 'Pause';
        playPauseButton.classList.add('transparent');
      } else {
        videoElem.pause();
        playPauseButton.textContent = 'Play';
        playPauseButton.classList.remove('transparent');
        videoElem.muted = !videoElem.muted;
      }
    });
  
    
