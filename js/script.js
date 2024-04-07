const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');

      } else {
        animItem.classList.remove('_active');
      }

    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollY || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}


