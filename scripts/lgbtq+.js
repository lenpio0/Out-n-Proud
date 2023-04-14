let rainbowCards = document.querySelector('#rainbow-cards');

for (let i = 0; i < rainbowCards.children.length; i++) {

    // console.log(rainbowCards.children[i]);
    // console.log(rainbowCards.children[i].children[0]);

    let currentElement = rainbowCards.children[i];
    let currentTextBox = currentElement.children[0];
    let currentLetter = currentTextBox.children[0];
    let currentWord = currentTextBox.children[1];
    let currentDef = currentTextBox.children[2];

    currentElement.addEventListener("mouseenter", () => {
        if (currentElement.classList.contains('card-active') == false) {
            currentWord.classList.replace('hidden', 'block');
        }
    });

    currentElement.addEventListener("mouseleave", () => {
        if (currentElement.classList.contains('card-active') == false) {
            currentWord.classList.replace('block', 'hidden');
        }
    });
    currentElement.addEventListener('click', () => {
        if (currentElement.classList.contains('card-active')) {
            for (let i = 0; i < rainbowCards.children.length; i++) {
                rainbowCards.children[i].classList.remove('card-active');
                rainbowCards.children[i].children[0].classList.remove('textbox-active'); 
                rainbowCards.children[i].children[0].children[0].classList.remove('hidden');
                rainbowCards.children[i].children[0].children[2].classList.add('hidden');
            }
        }
        else {
            for (let i = 0; i < rainbowCards.children.length; i++) {
                rainbowCards.children[i].classList.remove('card-active');
                rainbowCards.children[i].children[0].classList.remove('textbox-active'); 
                rainbowCards.children[i].children[0].children[0].classList.remove('hidden');
                rainbowCards.children[i].children[0].children[2].classList.add('hidden');
  
            }
            currentElement.classList.add('card-active');
            currentTextBox.classList.add('textbox-active');
            currentLetter.classList.add('hidden');
            currentWord.classList.add('hidden');
            currentDef.classList.remove('hidden');
        }
    })
}
