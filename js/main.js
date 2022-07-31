const slides = document.querySelectorAll('.hero__slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('active')
  })
}

pagination: {
  el: '.hero-pagination'
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}