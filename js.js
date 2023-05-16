const burger = document.querySelector('.burger');
const list = document.querySelectorAll('.ul');
const main = document.querySelector('.main');
const menu = document.querySelector('.nav_bar');
const bars = document.querySelectorAll('.bar');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  main.classList.toggle('active');
  bars.forEach((bar) => {
    bar.classList.toggle('active');
  });
  list.forEach((ul) => {
    ul.style.display = 'flex';
  });
});

list.forEach((e) => {
  e.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    main.classList.toggle('active');
    bars.forEach((bar) => {
      bar.classList.toggle('active');
    });
  });
});
