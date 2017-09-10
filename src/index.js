(function() {
  document.addEventListener('keydown', event => {
    console.log(event.keyCode);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.sound-btn[data-key="${event.keyCode}"]`);
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('pulse');
    key.addEventListener('transitionend', onEventEnd)
  });

  function onEventEnd() {
    this.removeEventListener('transitionend', onEventEnd);
    this.classList.remove('pulse');
  }

})();