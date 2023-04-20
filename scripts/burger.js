let menu = document.querySelector("#menu");
let open = document.querySelector("#open");
let close = document.querySelector("#close");

// open.onclick = openNav();
// close.onclick = closeNav();


open.addEventListener('click', () => {
    menu.classList.toggle("hidden");
    open.classList.toggle("text-end");
    open.classList.toggle("bg-menu-open");
    open.classList.toggle("bg-menu-close");
})
