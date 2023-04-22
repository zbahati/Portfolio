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
    name: 'Tonic',
    company: 'CANOPY',
    role: 'BackEnd Dev',
    year: '2015',
    details: 'see project',
    specialist: ['CANOPY', 'BackEnd Dev', '2015'],
    projectImage: 'images/modal-img-tonic.png',
    description: "Lorem Ipsum has been the industry's  took a galley of type and scrambled it 1960s.",
    deploymentLink: '<a href="https://zbahati.github.io/Portfolio/">see live <img class="github-icon" src="icons/source.svg"></a>',
    sourceCode: '<a href="https://github.com/zbahati/Portfolio">see source <img class="github-icon" src="icons/github.svg"></a>',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'project3',
    name: 'Tonics',
    company: 'CANOPY',
    role: 'BackEnd Dev',
    year: '2015',
    details: 'see project',
    specialist: ['CANOPY', 'BackEnd Dev', '2015'],
    projectImage: 'images/workedit-3.png',
    description: "Lorem Ipsum has been the industry's  took a galley of type and scrambled it 1960s.",
    deploymentLink: '<a href="https://zbahati.github.io/Portfolio/">See live <img class="github-icon" src="icons/source.svg"></a>',
    sourceCode: '<a href="https://github.com/zbahati/Portfolio">see source <img class="github-icon" src="icons/github.svg"></a>',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'project2',
    name: 'Multi-Post Stories',
    company: 'CANOPY',
    role: 'BackEnd Dev',
    year: '2015',
    details: 'see project',
    specialist: ['CANOPY', 'BackEnd Dev', '2015'],
    projectImage: 'images/workedit-2.png',
    deploymentLink: '<a href="https://zbahati.github.io/Portfolio/">See live<img class="github-icon" src="icons/source.svg"></a>',
    sourceCode: '<a href="https://github.com/zbahati/Portfolio">See source <img class="github-icon" src="icons/github.svg"></a>',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, and typesetting industry.",
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'project4',
    name: 'Multi-Posts Stories',
    company: 'CANOPY',
    role: 'BackEnd Dev',
    year: '2015',
    details: 'see project',
    specialist: ['CANOPY', 'BackEnd Dev', '2015'],
    projectImage: 'images/workedit-4.png',
    deploymentLink: '<a href="https://zbahati.github.io/Portfolio/">see live <img class="github-icon" src="icons/source.svg"></a>',
    sourceCode: '<a href="https://github.com/zbahati/Portfolio">see source <img hieght="10px" class="github-icon" src="icons/github.svg"></a>',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, and typesetting industry.",
    tags: ['HTML', 'CSS', 'JavaScript'],
  },

];

const portfolioSection = document.querySelector('.about');

projects.forEach((project) => {
  const cardSection = document.createElement('div');
  cardSection.className = 'work-card';
  cardSection.innerHTML = `<div class="portfolio-image">
  <img src="${project.projectImage}" width="100%" alt="project image">
  </div>
  <div class="work-description">
      <div class="desc-title">
          <h1 class="title">${project.name}</h1>
          <div class="specialist">
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
          <button class="project" data-project="${project.name}" id="">
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
      <div class="modal-tile" class='flex'>
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

      <div class='description' id='desktop-description'>
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
