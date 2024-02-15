const body = document.querySelector('body');
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");

// Declaración de la variable 'sidebar' antes de su uso
const sidebar = body.querySelector('.sidebar');

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

// Función para alternar el sidebar cuando se hace clic en el botón hamburguesa
function toggleSidebar() {
    sidebar.classList.toggle("close");
}

const hamburger = document.querySelector('.hamburger');
const home = document.querySelector('.home');

hamburger.addEventListener('click', function() {
  sidebar.classList.toggle('close');
  home.classList.toggle('hidden');
});
