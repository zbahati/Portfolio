const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');
const linkColor = document.getElementsByClassName('link-color');
const setNavMenuStyles = () => {
  navMenu.style.display = 'block';
  navMenu.style.listStyle = 'none';
  navMenu.style.zIndex = '10';
  navMenu.style.position = 'absolute';
  navMenu.style.left = '0';
  navMenu.style.top = '-1px';
  navMenu.style.display = 'flex';
  navMenu.style.flexDirection = 'column';
  navMenu.style.gap = '20px';
  navMenu.style.paddingTop = '33px';
  navMenu.style.paddingLeft = '22px';
  navMenu.style.background = '#6070ff';
  navMenu.style.opacity = '0.97';
  navMenu.style.width = '100%';
  navMenu.style.height = '900px';
};

const setLinkColorStyles = () => {
  for (let i = 0; i < linkColor.length; i += 1) {
    linkColor[i].style.color = 'white';
    linkColor[i].style.fontSize = '25px';
  }
};

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.style.display = 'none';
  setNavMenuStyles();
  setLinkColorStyles();
  closeBtn.style.display = 'block';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '0';
  closeBtn.style.right = '30px';
  closeBtn.style.marginRight = '20px';

  for (let i = 0; i < linkColor.length; i += 1) {
    linkColor[i].addEventListener('click', () => {
      navMenu.style.display = 'none';
      hamburgerBtn.style.display = 'flex';
    });
  }

  closeBtn.addEventListener('click', () => {
    hamburgerBtn.style.display = 'block';
    navMenu.style.display = 'none';
    closeBtn.style.display = 'none';
  });
});

const projects = [
  {
    id: 'project1',
    name: 'WEB DEVELOPMENT COURSE',
    company: 'MICROVERSE',
    role: 'Full Stack Development',
    year: '2023',
    details: 'see project',
    specialist: ['Microverse', 'FULL STACK', '2023'],
    projectImage: 'project image/p.png',
    description: "Online Web Development Courses: A responsive website offering high-quality courses with dynamic 'Our Team' section. User-friendly and accessible, showcasing student projects.",
    deploymentLink: '<a href="https://zbahati.github.io/web-development-course/">see live <img class="github-icon" src="icons/source.svg"></a>',
    sourceCode: '<a href="https://github.com/zbahati/Online-web-development-course">see source <img class="github-icon" src="icons/github.svg"></a>',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'project3',
    name: 'PORTFOLIO PROJECT',
    company: 'MICROVERSE',
    role: 'FULL STACK DEVELOPMENT',
    year: '2023',
    details: 'see project',
    specialist: ['Microverse', 'Full Stack', '2023'],
    projectImage: 'project image/portfolio.png',
    description: " I developed a portfolio web page using HTML and CSS and JavaScript. The page simply displays a portfolio. To ensure the code was valid and followed best practices, I utilized linters.",
    deploymentLink: '<a href="https://zbahati.github.io/Portfolio/">See live <img class="github-icon" src="icons/source.svg"></a>',
    sourceCode: '<a href="https://github.com/zbahati/Portfolio">see source <img class="github-icon" src="icons/github.svg"></a>',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'project2',
    name: 'Todo List',
    company: 'Microverse',
    role: 'Full Stack',
    year: '2023',
    details: 'see project',
    specialist: ['Microverse', 'Full Stack', '2023'],
    projectImage: 'project image/todolist.png',
    deploymentLink: '<a href="https://zbahati.github.io/Todo-list/dist/">See live<img class="github-icon" src="icons/source.svg"></a>',
    sourceCode: '<a href="https://github.com/zbahati/Todo-list">See source <img class="github-icon" src="icons/github.svg"></a>',
    description: "An advanced Todo list project built with Webpack, designed for optimal performance in development and production environments. This project follows best practices and utilizes a modular architecture with ES6.",
    tags: ['HTML', 'CSS', 'JavaScript', 'Webpack','ES6 modules'],
  },
  {
    id: 'project4',
    name: 'Awesome Book Project',
    company: 'Microverse',
    role: 'Full stack development',
    year: '2023',
    details: 'see project',
    specialist: ['Microverse', 'Full Stack', '2023'],
    projectImage: 'project image/AwesomeBook.png',
    deploymentLink: '<a href="https://zbahati.github.io/awesome-books-using-module/">see live <img class="github-icon" src="icons/source.svg"></a>',
    sourceCode: '<a href="https://github.com/zbahati/awesome-books-using-module/">see source <img hieght="10px" class="github-icon" src="icons/github.svg"></a>',
    description: "The Awesome Books project is a simple website that displays a list of books and allows users to add and remove books from that list. The website is built using HTML, CSS, and JavaScript, es6, and it is designed to be interactive and easy to use.",
    tags: ['HTML', 'CSS', 'JavaScript','luxon library'],
  },

];

const portfolioSection = document.querySelector('.about');

projects.forEach((project) => {
  const cardSection = document.createElement('div');
  cardSection.className = 'work-card flex';
  cardSection.innerHTML = `<div class="portfolio-image">
  <img src="${project.projectImage}" width="100%" alt="project image">
  </div>
  <div class="work-description flex">
      <div class="desc-title flex">
          <h1 class="title">${project.name}</h1>
          <div class="specialist flex">
              <h4 class="canopy">${project.company}</h4>
              <div class="counter"></div>
              <h4 class="role">${project.role}</h4>
              <div class="counter"></div>
              <h4 class="year">${project.year}</h4>
          </div>

      </div>
      <p>${project.description}</p>
      <div>
          <ul class="btn">
              <li class="tag">${project.tags[0]}</li>
              <li class="tag2">${project.tags[1]}</li>
              <li class="tag3">${project.tags[2]}</li>

          </ul>

      </div>
      <div class="action">
          <button class="project flex" data-project="${project.name}" id="">
              <h1>${project.details}</h1>
          </button>

      </div>


  </div>`;
  portfolioSection.append(cardSection);
});

const popup = document.querySelector('#popup');
const modalOverlay = document.querySelector('#modal-overlay');
popup.style.display = 'none';
modalOverlay.style.display = 'none';

const projectBtns = document.querySelectorAll('.project');

projectBtns.forEach((mobileProject) => {
  mobileProject.addEventListener('click', function handleClick() {
    const projectName = this.getAttribute('data-project');
    const project = projects.find((p) => p.name === projectName);
    const modalSection = document.createElement('div');
    modalSection.className = 'modal';
    modalSection.innerHTML = `<div class="modal-content">
      <div class="modal-tile flex">
           <h2 id="modal-title">${project.name}</h2>
           <span class='btn-close'>&times;</span>
      </div>
      <div class="specialists">
          <ul id="modal-specialist" class='flex'>
            <li>${project.specialist[0]}</li>
            <li>${project.specialist[1]}</li>
            <li>${project.specialist[2]}</li>
          </ul>
      </div>
      <div id="modal-header-image">
          <img src="${project.projectImage}" width="100%"  alt="project image">
      </div>

    <div class="modal-body">

      <div class='description flex' id='desktop-description'>
          <div id='modal-description'>
          ${project.description}</div>
          <div class='modal-lists'>
              <ul id='modal-tags' class='flex'>
                <li class='tag'>${project.tags[0]}</li>
                <li class='tag2'>${project.tags[1]}</li>
                <li class='tag3'>${project.tags[2]}</li>
              </ul>
              <div id='modal-live' class= 'flex'>
                  <button id='source'>${project.sourceCode}</button>
                  <button id='source'>${project.deploymentLink}</button>
              </div>
          </div>
      </div>
    </div>
  </div>`;
    popup.append(modalSection);
    popup.style.display = 'block';
    modalOverlay.style.display = 'block';

    const modalClose = document.querySelectorAll('.btn-close');
    modalClose.forEach((btn) => {
      btn.addEventListener('click', () => {
        popup.style.display = 'none';
        modalOverlay.style.display = 'none';
      });
    });
  });
});

const form = document.querySelector('#myForm');
const emailInput = form.querySelector('#email');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.toLowerCase();
  if (emailInput.value === emailValue) {
    form.submit();
  } else {
    const errorDiv = document.querySelector('#errorDiv');
    errorDiv.innerText = 'Email must be in lowercase';
    errorDiv.style.color = 'red';
    errorDiv.style.backgroundColor = 'white';
    errorDiv.style.padding = '10px';
  }
});

const save = () => {
  const userName = document.getElementById('name').value;
  const userEmail = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const data = {
    name: userName,
    email: userEmail,
    message,
  };

  const jsonData = JSON.stringify(data);
  localStorage.setItem('data', jsonData);
};

const localData = JSON.parse(localStorage.getItem('data'));
document.getElementById('name').value = localData.name;
document.getElementById('email').value = localData.email;
document.getElementById('message').value = localData.message;

const formBtn = document.querySelector('.project');
formBtn.addEventListener('change', save);