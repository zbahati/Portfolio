const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');
const linkColor = document.getElementsByClassName('link-color');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.style.display = 'none';
  navMenu.style.display = 'block';
  navMenu.style.zIndex = '10';
  navMenu.style.position = 'absolute';
  navMenu.style.left = '0';
  navMenu.style.top = '0';
  navMenu.style.display = 'flex';
  navMenu.style.flexDirection = 'column';
  navMenu.style.gap = '20px';
  navMenu.style.paddingTop = '33px';
  navMenu.style.paddingLeft = '22px';
  navMenu.style.background = '#6070ff';
  navMenu.style.opacity = '0.9';
  navMenu.style.width = '100%';
  navMenu.style.height = '600px';
  closeBtn.style.display = 'block';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '0';
  closeBtn.style.right = '30px';
  closeBtn.style.marginRight = '20px';
  for (let i = 0; i < linkColor.length; i += 1) {
    linkColor[i].style.color = 'white';
    linkColor[i].style.fontSize = '24px';
  }
});

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
