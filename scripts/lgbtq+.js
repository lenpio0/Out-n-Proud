let rainbowCards = document.querySelector('#rainbow-cards');

console.log(rainbowCards.children[1].children[0]);
for (var i = 0; i < rainbowCards.children.length; i++) {
    //console.log(rainbowCards.children[i].children[0].id);
    const currentId = rainbowCards.children[i].children[0].id;
    const currentElement = document.querySelector('#' + currentId);
    const currentWord = currentElement.children[1];
    console.log(currentWord);
    //let lesbianWord = document.querySelector("#lesbian-word");
    currentElement.addEventListener("mouseenter", () => {
        //lesbianWord.classList.remove('hidden');
        currentWord.classList.remove('hidden');
        console.log('enter');
    });
    currentElement.addEventListener("mouseleave", () => {
        //lesbianWord.classList.add('hidden');
        currentWord.classList.add('hidden');
        console.log('leave');
    });
}

// rainbowCards.children.foreach(element => {
//     let card = element.children[0];
//     let cardChild = card.children[1];
//     card.addEventListener("mouseenter", () => {
//         cardChild.classList.remove('hidden');
//     })
//     card.addEventListener("mouseleave", () => {
//         cardChild.classList.add('hidden');
//     })
// });
