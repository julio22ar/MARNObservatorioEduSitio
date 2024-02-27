// Código del menú hamburguesa
const body = document.querySelector('body');
const sidebar = body.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const home = document.querySelector('.home');

function toggleSidebar() {
  sidebar.classList.toggle('close');
  home.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleSidebar);

// Código del slider
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

// Resto del código para el modo oscuro y otros eventos
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
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

toggle.addEventListener("touchstart", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("touchstart", () => {
    sidebar.classList.remove("close");
});

modeSwitch.addEventListener("touchstart", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";
    }
});
