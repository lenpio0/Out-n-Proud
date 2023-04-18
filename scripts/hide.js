window.addEventListener("scroll", function() {
    let onp = document.querySelector('h1');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 500) {
        onp.classList.add('hidden');
    } else {
        onp.classList.remove('hidden');
    }
})

