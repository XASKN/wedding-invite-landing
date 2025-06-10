// === ACCORDEON ===
document.addEventListener('DOMContentLoaded', function() {
  const points = document.querySelectorAll('.info-block__point');

  points.forEach(point => {
    const question = point.querySelector('.info-block__question');
    const answer = point.querySelector('.info-block__answer');
    const icon = point.querySelector('.button__icon');

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


