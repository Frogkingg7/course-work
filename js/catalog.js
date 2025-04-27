document.addEventListener('DOMContentLoaded', function() {
    const filterForm = document.getElementById('filter-form');
    
    filterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const category = document.getElementById('category').value;
      const priceMin = document.getElementById('price-min').value;
      const priceMax = document.getElementById('price-max').value;
      const sort = document.getElementById('sort').value;
      
      // Здесь можно реализовать логику фильтрации товаров,
      // например, отправить запрос к API или фильтровать уже загруженные элементы.
      console.log(`Фильтрация: категория: ${category}, Цена от: ${priceMin}, Цена до: ${priceMax}, сортировка: ${sort}`);
    });
  });
  