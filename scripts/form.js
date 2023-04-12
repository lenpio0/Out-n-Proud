let form = document.querySelector('#contact-form');
    
async function handleSubmit(event) {
  event.preventDefault();
  let status = document.querySelector("#contact-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Demande envoyée !";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oups ! Il y a eu un problème dans l'envoi du formulaire"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oups ! Il y a eu un problème dans l'envoi du formulaire"
  });
}
form.addEventListener("submit", handleSubmit)