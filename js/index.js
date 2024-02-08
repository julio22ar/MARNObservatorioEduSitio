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
const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-items');

// Set the initial state of menuItems.style.left
menuItems.style.left = '-100%';

const toggleMenu = () => {
    menuItems.style.left = menuItems.style.left === '-100%' ? '0' : '-100%';
}

hamburgerMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
    toggleMenu();
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);

    if (!isClickInsideMenu && menuItems.style.left === '0') {
        toggleMenu();
    }
});