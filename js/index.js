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
document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var menuItems = document.querySelector('.menu-items');
  
    hamburgerMenu.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent this click from triggering the document's click event
      if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'flex';
      } else {
        menuItems.style.display = 'none';
      }
    });
  
    document.addEventListener('click', function() {
      menuItems.style.display = 'none';
    });
  });

  