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

const projects = [
  {
    name: 'Tonic',
    list: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img2/Snapshoot Portfolio desk1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies2: ['Ruby', 'Bootstrap'],
    liveLink: 'https://github.com/MohamedRoshdy2021',
    sourceLink: 'https://example.com/source',
    popuptext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    popuptext2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industrys npx eslint .<br></br> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Multi-Post Stories',
    image: './img2/Snapshoot Portfolio desk2.png',
    list: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies2: ['Ruby', 'Bootstrap'],
    liveLink: 'https://github.com/MohamedRoshdy2021',
    sourceLink: 'https://example.com/source',
    popuptext2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industrys <br></br> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    popuptext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    name: 'Tonic',
    list: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img2/Snapshoot Portfolio desk3.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies2: ['Ruby', 'Bootstrap'],
    liveLink: 'https://github.com/MohamedRoshdy2021',
    sourceLink: 'https://example.com/source',
    popuptext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    popuptext2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industrys <br></br> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.  ',
  },
  {
    name: 'Multi-Post Stories',
    image: './img2/Snapshoot Portfolio desk4.JPG',
    list: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies2: ['Ruby', 'Bootstrap'],
    liveLink: 'https://github.com/MohamedRoshdy2021',
    sourceLink: 'https://example.com/source',
    popuptext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    popuptext2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industrys <br></br> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
];
const existingCard = document.querySelector('#work-section');

projects.forEach((project) => {
  const card = document.createElement('div');
  card.classList.add('cards1');
  card.innerHTML = `
    <img class="card-img" src="${project.image}" alt="portfolio img">
    <div class="align-text">
      <h2 class="h2-size">${project.name}</h2>
      <ul class="first-list">
        <li class="list1">${project.list[0]}</li>
        <li class="list2">${project.list[1]}</li>
        <li class="list2">${project.list[2]}</li>
      </ul>
      <p class="work-p">${project.description}</p>
      <ul class="blue-list">
        <li class="blue-list li">${project.technologies[0]}</li>
        <li class="blue-list li">${project.technologies[1]}</li>
        <li class="blue-list li">${project.technologies[2]}</li>
      </ul>
      <button class="work-btn btn">see project</button>
    </div>
  `;

  existingCard.appendChild(card);
});

// popup section
projects.forEach((project) => {
  const popup = document.createElement('div');
  popup.classList.add('modal');
  popup.innerHTML = `
    <div class="modal-close">
      <h1 class="modal-h1">${project.name}</h1>
      <i class="fa-solid fa-xmark"></i>
    </div>
    <ul class="modal-first-list">
      <li class="list1">${project.list[0]}</li>
      <li class="list2">${project.list[1]}</li>
      <li class="list2">${project.list[2]}</li>
    </ul>
    <img class="modal-img" src="${project.image}" alt="portfolio img">
    <div class="modal-text">
    <p class="modal-para">${project.popuptext}</p>
    <p class="modal-para2">${project.popuptext2}</p>
     <div class="modal-list-btn">
    <ul class="modal-blue-list">
      <li class="modal-blue-list li">${project.technologies[0]}</li>
      <li class="modal-blue-list li">${project.technologies[1]}</li>
      <li class="modal-blue-list li"> ${project.technologies[2]}</li>
      <li class="modal-blue-list li modal-blue-list2">${project.technologies2[0]}</li>
      <li class="modal-blue-list li modal-blue-list2">${project.technologies2[1]}</li>
    </ul>
    <div class="modal-btn-flex">
      <a  href="${project.liveLink}><button " class="btn modal-btn"> see live <i class="fa-solid fa-arrow-up-right-from-square"></i></button></a>
      <button href="${project.sourceLink}" class="btn modal-btn"> see source <i class="fa-brands fa-github"></i></button>
    </div>
    </div>
    </div>
  `;
  existingCard.appendChild(popup);
});
// Modal popups
const btns = document.querySelectorAll('.work-btn');
const modals = document.querySelectorAll('.modal');

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].classList.toggle('active');
  });
});

modals.forEach((modal) => {
  const closeButton = modal.querySelector('.fa-solid');
  closeButton.addEventListener('click', () => {
    modal.classList.toggle('active');
  });
});

// the form validition
const form = document.querySelector('#form');
const emailRegex = /^[^@\s]+@[^@\s]+\.[a-z]+$/i;
const errorMessage = document.querySelector('#error');
const errorclose = document.querySelector('.error-close');
// the event status
form.addEventListener('submit', (event) => {
  const inputEmailValue = document.querySelector('#email').value;
  const lowercaseEmailValue = inputEmailValue.toLowerCase();
  if (inputEmailValue !== lowercaseEmailValue || !emailRegex.test(lowercaseEmailValue)) {
    event.preventDefault();
    errorMessage.style.display = 'block';
  }

  errorclose.addEventListener('click', () => {
    errorMessage.style.display = 'none';
  });
});
