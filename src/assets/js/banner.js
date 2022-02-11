(function () {
  const closeBanners = document.querySelectorAll('.js-banner__close');
  closeBanners.forEach((closeBanner) => {
    closeBanner.addEventListener('click', (event) => {
      const banner = event.target.parentNode;
      banner.classList.add('collapse');

      banner.addEventListener('transitionend', function (e) {
        if (e.target === this) {
          this.remove();
        }
      });
    });
  });
})();
