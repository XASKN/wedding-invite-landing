// === ACCORDEON ===
document.addEventListener('DOMContentLoaded', function() {
  const points = document.querySelectorAll('.info-block__point');

  points.forEach(point => {
    const question = point.querySelector('.info-block__question');
    const answer = point.querySelector('.info-block__answer');
    const icon = point.querySelector('.accordeon__icon');

    question.addEventListener('click', function() {
      const isOpen = answer.classList.contains('open');

      if (isOpen) {
        answer.style.height = answer.scrollHeight + 'px';
        requestAnimationFrame(() => {
          answer.style.height = '0px';
          answer.style.opacity = '0';
        });
        answer.classList.remove('open');
        icon.style.transform = 'rotate(0deg)';
      } else {

        answer.style.height = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
        answer.classList.add('open');

        answer.addEventListener('transitionend', function handler(e) {
          if (e.propertyName === 'height') {
            answer.style.height = 'auto';
            answer.removeEventListener('transitionend', handler);
          }
        });
        icon.style.transform = 'rotate(45deg)';
      }
    });
  });
});

// === MODAL WINDOW «ADD TO CALENDAR» ===
document.addEventListener('DOMContentLoaded', function() {
  const openLinks = document.querySelectorAll('a[href="#calendar-popup"]');
  const popup = document.querySelector('.calendar-popup');
  const popupContent = popup.querySelector('.calendar-popup__content');
  const closeBtn = popup.querySelector('.close');

  openLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      popup.classList.add('active');
      history.pushState(null, '', ' ');
    });
  });

  closeBtn.addEventListener('click', function() {
    popup.classList.remove('active');
  });

  // Закрытие при клике на фон (.calendar-popup)
  popup.addEventListener('click', function(e) {
    // Если кликнули именно на .calendar-popup (а не на .calendar-popup__content)
    if (!popupContent.contains(e.target)) {
      popup.classList.remove('active');
    }
  });
});

// === SOUND CONTROL ===
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('background-music');
  const soundControl = document.querySelector('.button-sound-control__icon');
  let isPlaying = true;

  // Старт автоматически
  audio.play().catch(e => {
    // Автоблокировка браузера — ждем взаимодействия
    console.log('Автовоспроизведение заблокировано, ждём клика пользователя.');
  });

  document.querySelector('.button-sound-control').addEventListener('click', function() {
    if (isPlaying) {
      audio.pause();
      soundControl.querySelector('use').setAttribute('href', '#icon-play');
    } else {
      audio.play();
      soundControl.querySelector('use').setAttribute('href', '#icon-pause');
    }
    isPlaying = !isPlaying;
  });
});
