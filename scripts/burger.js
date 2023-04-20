let menu = document.querySelector("#menu");
let open = document.querySelector("#open");
let close = document.querySelector("#close");

// open.onclick = openNav();
// close.onclick = closeNav();


open.addEventListener('click', () => {
    menu.classList.toggle("hidden");
})
