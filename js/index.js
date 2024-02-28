  // CODIGO HAMBURGUESA
  const body = document.querySelector('body');
  const toggle = body.querySelector(".toggle"); // Se cambió "body.querySelector('.hamburger')" a "body.querySelector('.toggle')"
  const searchBtn = body.querySelector(".search-box");
  const modeSwitch = body.querySelector(".toggle-switch");
  const modeText = body.querySelector(".mode-text");
  // CODIGO SLIDER DESKTOP
   // Se corrigió la declaración de la variable 'sidebar' para que no sea 'var'
 

  const sidebar = body.querySelector('.sidebar');
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 6000,
    },
  });

 
  // Función para alternar el sidebar cuando se hace clic en el botón hamburguesa
  function toggleSidebar() {
    sidebar.classList.toggle("close");
  }

  toggle.addEventListener("click", toggleSidebar);
  toggle.addEventListener("touchstart", toggleSidebar);

  searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
  });

  searchBtn.addEventListener("touchstart", () => {
    sidebar.classList.remove("close");
  });

  modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      modeText.innerText = "Light mode";
    } else {
      modeText.innerText = "Dark mode";
    }
  });



  // Se eliminó el código redundante para el hamburger

  const boxes= document.querySelectorAll('.box');
  window.addEventListener('scroll', checkBoxes);

  checkBoxes();

  function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 *4;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if(boxTop < triggerBottom){
        box.classList.add('show');
      }else{
        box.classList.remove('show');
      }
    });
  }

