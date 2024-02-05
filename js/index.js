const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');

hamburgerMenu.addEventListener('click', () => {
    if (menuItems.style.left === '-100%') {
        menuItems.style.left = '0';
    } else {
        menuItems.style.left = '-100%';
    }
});
