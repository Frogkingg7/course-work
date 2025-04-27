document.addEventListener('DOMContentLoaded', function() {
    // Обработка изменения количества товара
    const quantityButtons = document.querySelectorAll('.quantity-btn');
    quantityButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const input = this.parentElement.querySelector('.quantity-value');
        let currentValue = parseInt(input.value);
        if (this.textContent.trim() === '+') {
          currentValue++;
        } else {
          currentValue = currentValue > 1 ? currentValue - 1 : 1;
        }
        input.value = currentValue;
        // Здесь можно добавить обновление итоговой суммы корзины
      });
    });
  
    // Удаление товара из корзины
    const removeButtons = document.querySelectorAll('.cart-remove');
    removeButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const row = this.closest('tr');
        row.parentElement.removeChild(row);
        // Здесь можно добавить пересчёт итоговой суммы корзины
      });
    });
  });
  