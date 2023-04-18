const title1 = document.querySelector('.zeubi1');
const img1 = document.querySelector('#yo1');
console.log(img1);
console.log(title1);
const title2 = document.querySelector('.zeubi2');
const img2 = document.querySelector('.yo2');
console.log(img2);
const title3 = document.querySelector('.zeubi3');
const img3 = document.querySelector('.yo3');
console.log(img3);
const title4 = document.querySelector('.zeubi4');
const img4 = document.querySelector('.yo4');
console.log(img4);
const title5 = document.querySelector('.zeubi5');
const img5 = document.querySelector('.yo5');
console.log(img5);
const title6 = document.querySelector('.zeubi6');
const img6 = document.querySelector('.yo6');
console.log(img6);
const title7 = document.querySelector('.zeubi7');
const img7 = document.querySelector('.yo7');
console.log(img7);
const title8 = document.querySelector('.zeubi8');
const img8 = document.querySelector('.yo8');
console.log(img8);


img1.addEventListener('mouseenter', () => {
    title1.classList.add('zeubi-la-mouche');
});
img1.addEventListener('mouseleave', () => {
    setTimeout(() => {
      title1.classList.remove('zeubi-la-mouche');
    }, 1000);
  });

img2.addEventListener('mouseenter', () => {
    title2.classList.add('zeubi-la-mouche');
});
img2.addEventListener('mouseleave', () => {
    setTimeout(() => {
      title2.classList.remove('zeubi-la-mouche');
    }, 1000);
  });

img3.addEventListener('mouseenter', () => {
    title3.classList.add('zeubi-la-mouche');
});

img3.addEventListener('mouseleave', () => {
    setTimeout(() => {
      title3.classList.remove('zeubi-la-mouche');
    }, 1000);
  });

img4.addEventListener('mouseenter', () => {
    title4.classList.add('zeubi-la-mouche');
});

img4.addEventListener('mouseleave', () => {
    setTimeout(() => {
      title4.classList.remove('zeubi-la-mouche');
    }, 1000);
  });

img5.addEventListener('mouseenter', () => {
    title5.classList.add('zeubi-la-mouche');
});

img5.addEventListener('mouseleave', () => {
    setTimeout(() => {
      title5.classList.remove('zeubi-la-mouche');
    }, 1000);
  });

img6.addEventListener('mouseenter', () => {
    title6.classList.add('zeubi-la-mouche');
});

img6.addEventListener('mouseleave', () => {
    setTimeout(() => {
      title6.classList.remove('zeubi-la-mouche');
    }, 1000);
  });

img7.addEventListener('mouseenter', () => {
    title7.classList.add('zeubi-la-mouche');
});

img7.addEventListener('mouseleave', () => {
    setTimeout(() => {
      title7.classList.remove('zeubi-la-mouche');
    }, 1000);
  });

img8.addEventListener('mouseenter', () => {
    title8.classList.add('zeubi-la-mouche');
});

img8.addEventListener('mouseleave', () => {
    setTimeout(() => {
      title8.classList.remove('zeubi-la-mouche');
    }, 1000);
  });