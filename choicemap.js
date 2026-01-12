document.addEventListener('DOMContentLoaded', function() {
  const mapHeaders = document.querySelectorAll('.map-header');

  mapHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const column = this.parentElement;
      
      // Только переключаем текущую карту (не закрываем другие)
      column.classList.toggle('active');
      
      // Анимация кнопок
      if (column.classList.contains('active')) {
        animateModeButtons(column);
      } else {
        resetModeButtons(column);
      }
    });
  });

  // Анимация появления кнопок
  function animateModeButtons(column) {
    const buttons = column.querySelectorAll('.mode-btn');
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      }, 100 * index); // Задержка для каждой кнопки
    });
  }

  // Сброс анимации
  function resetModeButtons(column) {
    const buttons = column.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(10px)';
    });
  }
});

