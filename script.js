// === ACCORDEON ===
document.addEventListener('DOMContentLoaded', function() {
  const points = document.querySelectorAll('.info-block__point');

  points.forEach(point => {
    const question = point.querySelector('.info-block__question');
    const answer = point.querySelector('.info-block__answer');
    const icon = point.querySelector('.accordeon__icon');

    question.addEventListener('click', function() {
      const isOpen = answer.classList.contains('open');

      // Закрыть все кроме текущего
      points.forEach(otherPoint => {
        if (otherPoint !== point) {
          const otherAnswer = otherPoint.querySelector('.info-block__answer');
          const otherIcon = otherPoint.querySelector('.accordeon__icon');

          otherAnswer.style.height = otherAnswer.scrollHeight + 'px';

          requestAnimationFrame(() => {
            otherAnswer.style.height = '0px';
          });

          otherAnswer.classList.remove('open');
          otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      // Открыть/закрыть текущий
      if (!isOpen) {
        answer.classList.add('open');
        const height = answer.scrollHeight + 'px';
        
        answer.style.height = height;
        icon.style.transform = 'rotate(45deg)';

        const handler = (e) => {
          if (e.propertyName === 'height') {
            answer.style.height = '';
            answer.removeEventListener('transitionend', handler);
          }
        };
        answer.addEventListener('transitionend', handler);
      } else {
        answer.style.height = answer.scrollHeight + 'px';
        requestAnimationFrame(() => {
          answer.style.height = '0px';
        });
        answer.classList.remove('open');
        icon.style.transform = 'rotate(0deg)';
      }
    });
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
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-music");
  const control = document.querySelector(".button-sound-control .button-sound-control__icon use");

  let isPlaying = false;

  document.querySelector(".button-sound-control").addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      control.setAttribute("href", "#icon-pause");
    } else {
      audio.pause();
      control.setAttribute("href", "#icon-play");
    }
    isPlaying = !isPlaying;
  });
});


