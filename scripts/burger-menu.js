const burgerBtn = document.querySelector('.menu-mob_burger');
const closeBtn = document.querySelector('.menu-mob_burger-close_btn');

const closedMenu = document.querySelector('.menu-mob_burger-opened');
const menu = document.querySelector('.menu-mob');

burgerBtn.addEventListener('click', () => {
  closedMenu.style.display = 'block';
  menu.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
  closedMenu.style.display = 'none';
  menu.classList.add('active');
});
