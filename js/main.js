document.addEventListener('DOMContentLoaded', function() {
    // Переключение мобильного меню
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  
    // Пример: обновление счетчика корзины (при необходимости можно использовать localStorage)
    const cartIcon = document.querySelector('.header-cart .cart-count');
    // Здесь можно установить начальное значение из хранилища или расчитать сумму
    cartIcon.textContent = '0';
  });
  