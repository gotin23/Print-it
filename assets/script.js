const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const previousSlide = document.querySelector(".arrow_left");
const nextSlide = document.querySelector(".arrow_right");

const slideActive = document.querySelector(".banner-img");
const arrows = document.querySelectorAll(".arrow");
const infoSlide = document.querySelector(".info-slide");
const dots = document.querySelector(".dots");
const slideNb = slides.length;

// Creation des dots
for (let i = 0; i < slideNb; i++) {
  const dotContainer = document.createElement("div");
  dotContainer.className = "dot";
  dots.appendChild(dotContainer);
}

const dotsList = document.querySelectorAll(".dot");
dotsList[0].classList.add("dot_selected");
previousSlide.addEventListener("click", (e) => changeSlide(-1, slideNb - 1, e));
nextSlide.addEventListener("click", (e) => changeSlide(1, 0, e));

// arrows.forEach((arrow) => arrow.addEventListener("click", changeSlide));

let count = 0;

function changeSlide(a, b, e) {
  const rightArrow = e.target.classList.contains("arrow_right");
  const leftArrow = e.target.classList.contains("arrow_left");

  if ((count === 0 && leftArrow) || (count === slideNb - 1 && rightArrow)) {
    slideActive.src = "./assets/images/slideshow/" + slides[b].image;
    infoSlide.innerHTML = slides[b].tagLine;
    dotsList[count].classList.remove("dot_selected");
    dotsList[b].classList.add("dot_selected");
    count = b;
  } else {
    slideActive.src = "./assets/images/slideshow/" + slides[count + a].image;
    infoSlide.innerHTML = slides[count + a].tagLine;
    dotsList[count].classList.remove("dot_selected");
    dotsList[count + a].classList.add("dot_selected");
    count = count + a;
  }
}
// function changeSlide(e) {
//   const rightArrow = count === slideNb - 1 ? 0 : count + 1;
//   const leftArrow = count === 0 ? slideNb - 1 : count + -1;

//   if (e.target.classList.contains("arrow_right")) {
//     slideActive.src = "./assets/images/slideshow/" + slides[rightArrow].image;
//     infoSlide.innerHTML = slides[rightArrow].tagLine;
//     dotsList[count].classList.remove("dot_selected");
//     dotsList[rightArrow].classList.add("dot_selected");
//     count = rightArrow;
//   } else if (e.target.classList.contains("arrow_left")) {
//     slideActive.src = "./assets/images/slideshow/" + slides[leftArrow].image;
//     infoSlide.innerHTML = slides[leftArrow].tagLine;
//     dotsList[count].classList.remove("dot_selected");
//     dotsList[leftArrow].classList.add("dot_selected");
//     count = leftArrow;
//   }
// }

// previousSlide.addEventListener("click", () => {
//   if (count === 0) {
//     slideActive.src = "./assets/images/slideshow/" + slides[slideNb - 1].image;
//     infoSlide.innerHTML = slides[slideNb - 1].tagLine;
//     dotsList[0].classList.remove("dot_selected");
//     dotsList[slideNb - 1].classList.add("dot_selected");
//     count = slideNb - 1;
//     console.log(count);
//   } else {
//     slideActive.src = "./assets/images/slideshow/" + slides[count - 1].image;
//     infoSlide.innerHTML = slides[count - 1].tagLine;
//     dotsList[count].classList.remove("dot_selected");
//     dotsList[count - 1].classList.add("dot_selected");
//     count = count - 1;
//   }
// });

// nextSlide.addEventListener("click", () => {
//   if (count === slideNb - 1) {
//     slideActive.src = "./assets/images/slideshow/" + slides[0].image;
//     infoSlide.innerHTML = slides[0].tagLine;
//     dotsList[slideNb - 1].classList.remove("dot_selected");
//     dotsList[0].classList.add("dot_selected");
//     count = 0;
//   } else {
//     slideActive.src = "./assets/images/slideshow/" + slides[count + 1].image;
//     infoSlide.innerHTML = slides[count + 1].tagLine;
//     dotsList[count].classList.remove("dot_selected");
//     dotsList[count + 1].classList.add("dot_selected");
//     count = count + 1;
//   }
// });
