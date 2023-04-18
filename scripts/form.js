let form = document.querySelector('#contact-form');
let stat = document.querySelector("#contact-status");

function showMsg() {
  stat.classList.remove('hidden');
  stat.classList.replace('opacity-0', 'opacity-100');
  setTimeout(() => {stat.classList.replace('opacity-100', 'opacity-0')}, 5000);
  setTimeout(() => {stat.classList.add('hidden')}, 6000);
}
async function handleSubmit(event) {
  event.preventDefault();
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      stat.innerHTML = "Demande envoyée !";
      showMsg();
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          stat.innerHTML = data["errors"].map(error => error["message"]).join(", ");
          showMsg();
        } else {
          stat.innerHTML = "Erreur...";
          showMsg();
        }
      })
    }
  }).catch(error => {
    stat.innerHTML = "Erreur...";
    showMsg();
  });
}
form.addEventListener("submit", handleSubmit)