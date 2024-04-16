setTimeout(() => {
    document.querySelector('.intro-container').classList.add('intro-fading');
    setTimeout(() => {
      document.querySelector('.intro-container').remove();
    }, 1000);
  }, 1100);