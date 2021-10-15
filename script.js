const question = document.querySelector(".question");
const arrowDown = document.querySelector(".arrow-down");
const answer = document.querySelector(".answer");
// const illustrationMobile = document.querySelector(".illustration-mobile");
// const patternMobile = document.querySelector(".pattern-mobile");
// const oldIllustrationAttr = document.createAttribute("src");
// const oldPatternAttr = document.createAttribute("src");
// const newIllustrationAttr = document.createAttribute("src");
// const newPatternAttr = document.createAttribute("src");

// oldIllustrationAttr.value = "./images/illustration-woman-online-mobile.svg";
// newIllustrationAttr.value = "./images/illustration-woman-online-desktop.svg";

// oldPatternAttr.value = "./images/bg-pattern-mobile.svg";
// newPatternAttr.value = "./images/bg-pattern-desktop.svg";

function BoldActive() {
  question.classList.toggle("active");
}

function ArrowUp() {
  arrowDown.classList.toggle("arrow-up");
}

function popUp() {
  answer.classList.toggle("popup");
}

function addNewImg() {
  illustrationWoman.appendChild(newImage);
}

// window.addEventListener("resize", function (event) {
//   let newWidth = window.innerWidth;

//   if (newWidth >= 800) {
//     illustrationMobile.setAttributeNode(newIllustrationAttr);
//     patternMobile.setAttributeNode(newPatternAttr);
//   } else {
//     illustrationMobile.setAttributeNode(oldIllustrationAttr);
//     patternMobile.setAttributeNode(oldPatternAttr);
//   }
// });

question.addEventListener("click", function () {
  BoldActive();
  ArrowUp();
  popUp();
});
