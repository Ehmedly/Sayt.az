document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelector('.slides');
  const pagination = document.querySelectorAll('.pagination-dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.slide').length;
  function updateSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    pagination.forEach(dot => {
      dot.classList.remove('active');
    });
    pagination[currentIndex].classList.add('active');
  }
  pagination.forEach(dot => {
    dot.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-index'));
      updateSlide(index);
    });
  });
  prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide(currentIndex);
  });
  nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide(currentIndex);
  });
  updateSlide(0);
});