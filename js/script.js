window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header'),
  headerLink = document.querySelectorAll('.header__link'),
  headerLinkHate = document.querySelector('.header__link-hate'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      // hamburger.classList.toggle('hamburger_active');
      header.classList.toggle('header_active');
  });

  headerLink.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          header.classList.toggle('header_active');
      })

  })
  headerLinkHate.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    header.classList.toggle('header_active');
   })
})
