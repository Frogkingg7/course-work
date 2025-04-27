document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.products-slider');
    const sliderItems = slider.querySelectorAll('.product-card');
    let currentIndex = 0;
  
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
  
    // Функция для отображения слайда по индексу
    function showSlide(index) {
      const slideWidth = sliderItems[0].offsetWidth + 30; // учитываем gap в 30px
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  
    nextBtn.addEventListener('click', function() {
      if (currentIndex < sliderItems.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
      }
    });
  
    prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
      }
    });
  });
  