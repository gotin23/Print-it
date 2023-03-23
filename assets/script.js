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

previousSlide.addEventListener("click", (event) => changeSlide(-1, slideNb - 1, event));
nextSlide.addEventListener("click", (event) => changeSlide(1, 0, event));

let count = 0;

function changeSlide(a, b, event) {
  const rightArrow = event.target.classList.contains("arrow_right");
  const leftArrow = event.target.classList.contains("arrow_left");
  dotsList[count].classList.remove("dot_selected");

  if ((count === 0 && leftArrow) || (count === slideNb - 1 && rightArrow)) {
    slideActive.src = "./assets/images/slideshow/" + slides[b].image;
    infoSlide.innerHTML = slides[b].tagLine;
    dotsList[b].classList.add("dot_selected");
    count = b;
  } else {
    slideActive.src = "./assets/images/slideshow/" + slides[count + a].image;
    infoSlide.innerHTML = slides[count + a].tagLine;
    dotsList[count + a].classList.add("dot_selected");
    count = count + a;
  }
}
