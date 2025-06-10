// === ACCORDEON ===
document.addEventListener('DOMContentLoaded', function() {
  const toggleAccordion = (point) => {
    const answer = point.querySelector('.info-block__answer');
    const icon = point.querySelector('.accordeon__icon');
    const isOpen = answer.classList.contains('open');

    answer.style.height = isOpen ? '0px' : answer.scrollHeight + 'px';
    answer.style.opacity = isOpen ? '0' : '1';
    icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
    
    if (isOpen) {
      answer.classList.remove('open');
    } else {
      answer.classList.add('open');
      const handler = (e) => {
        if (e.propertyName === 'height') {
          answer.style.height = 'auto';
          answer.removeEventListener('transitionend', handler);
        }
      };
      answer.addEventListener('transitionend', handler);
    }
  };

  document.querySelectorAll('.info-block__point').forEach(point => {
    point.querySelector('.info-block__question').addEventListener('click', () => toggleAccordion(point));
  });
});

// === MODAL WINDOW «ADD TO CALENDAR» ===
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.querySelector('.calendar-popup');
  const popupContent = popup.querySelector('.calendar-popup__content');
  const closePopup = () => popup.classList.remove('active');

  document.querySelectorAll('a[href="#calendar-popup"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      popup.classList.add('active');
      history.pushState(null, '', ' ');
    });
  });

  popup.querySelector('.close').addEventListener('click', closePopup);
  popup.addEventListener('click', function(e) {
    if (!popupContent.contains(e.target)) closePopup();
  });
});

// === SOUND CONTROL ===
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('background-music');
  const soundControl = document.querySelector('.button-sound-control');
  const soundIcon = soundControl.querySelector('.button-sound-control__icon use');
  let isPlaying = false;

  const toggleAudio = (play) => {
    if (play) {
      audio.play();
      soundIcon.setAttribute('href', '#icon-pause');
      isPlaying = true;
    } else {
      audio.pause();
      soundIcon.setAttribute('href', '#icon-play');
      isPlaying = false;
    }
  };

  const unlockAudio = () => {
    if (!isPlaying) {
      toggleAudio(true);
      document.removeEventListener('click', unlockAudio);
    }
  };

  document.addEventListener('click', unlockAudio);
  soundControl.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleAudio(audio.paused);
  });
});

