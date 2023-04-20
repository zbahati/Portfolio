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
    name: 'Tonic',
    specialist: ['CANOPY', 'BackEnd Dev', '2015'],
    projectImage: '<img height="306px" width="100%" src="images/modal-img-tonic.png" alt="project">',
    description: "Lorem Ipsum has been the industry's  took a galley of type and scrambled it 1960s.",
    deploymentLink: '<a href="https://zbahati.github.io/Portfolio/">see live</a>',
    sourceCode: '<a href="https://github.com/zbahati/Portfolio">see source</a>',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Tonics',
    specialist: ['CANOPY', 'BackEnd Dev', '2015'],
    projectImage: '<img height="306px" width="100%" src="images/workedit-3.png" alt="project">',
    description: "Lorem Ipsum has been the industry's  took a galley of type and scrambled it 1960s.",
    deploymentLink: '<a href="https://zbahati.github.io/Portfolio/">See live</a>',
    sourceCode: '<a href="https://github.com/zbahati/Portfolio">see source</a>',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Multi-Post Stories',
    specialist: ['CANOPY', 'BackEnd Dev', '2015'],
    projectImage: '<img src="images/workedit-2.png" height="306px" width="100%" alt="project">',
    deploymentLink: '<a href="https://zbahati.github.io/Portfolio/">See live</a>',
    sourceCode: '<a href="https://github.com/zbahati/Portfolio">See source</a>',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, and typesetting industry.",
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Multi-Posts Stories',
    specialist: ['CANOPY', 'BackEnd Dev', '2015'],
    projectImage: '<img src="images/workedit-4.png" height="306px" width="100%" alt="project">',
    deploymentLink: '<a href="https://zbahati.github.io/Portfolio/">see live</a>',
    sourceCode: '<a href="https://github.com/zbahati/Portfolio">see source</a>',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, and typesetting industry.",
    tags: ['HTML', 'CSS', 'JavaScript'],
  },

];

const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('#modal-title');
const modalSpecialist = document.querySelector('#modal-specialist');
const modalDescription = document.querySelector('#modal-description');
const modalTags = document.querySelector('#modal-tags');
const modalClose = document.querySelector('.close');
const modalImage = document.querySelector('#modal-header-image');
const projectBtns = document.querySelectorAll('.project');
const modalOverlay = document.querySelector('#modal-overlay');
const source = document.querySelector('#source');
const linkDemo = document.querySelector('#livedemo');
modalOverlay.style.display = 'none';
modalClose.style.display = 'none';
modal.style.display = 'none';
projectBtns.forEach((btn) => {
  btn.addEventListener('click', function handleClick() {
    const projectName = this.getAttribute('data-project');
    const project = projects.find((p) => p.name === projectName);
    modalTitle.innerText = project.name;
    modalSpecialist.innerHTML = project.specialist.map((p) => `<li> ${p}</li>`).join('');
    modalDescription.innerText = project.description;
    modalImage.innerHTML = project.projectImage;
    source.innerHTML = project.sourceCode;
    linkDemo.innerHTML = project.deploymentLink;
    modalTags.innerHTML = project.tags.map((t) => `<li>${t}</li>`).join('');
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
    modalClose.style.display = 'block';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
});
