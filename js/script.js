window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header'),
  headerLink = document.querySelectorAll('.header__link'),
  headerLinkHate = document.querySelector('.header__link-hate'),
  hamburger = document.querySelector('.hamburger'),
  headerDividers = hamburger.querySelectorAll('.hamburger__divider');

  hamburger.addEventListener('click', () => {
      // hamburger.classList.toggle('hamburger_active');
      header.classList.toggle('header_active');
      headerDividers.forEach(divider => {
        divider.classList.toggle('hamburger__divider_active')
      })
  });

  headerLink.forEach(item => {
      item.addEventListener('click', () => {
          header.classList.toggle('header_active');
          headerDividers.forEach(divider => {
            divider.classList.toggle('hamburger__divider_active')
          })
      })

  })
  headerLinkHate.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    header.classList.toggle('header_active');
   })
})
