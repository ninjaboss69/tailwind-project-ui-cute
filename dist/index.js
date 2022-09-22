`use strict`;
const nature = document.getElementById("nature");
const house = document.getElementById("house");
const technology = document.getElementById("technology");
const weekend = document.getElementById("weekend");

const natureNav = document.getElementById("natureNav");
const houseNav = document.getElementById("houseNav");
const technologyNav = document.getElementById("technologyNav");
const weekendNav = document.getElementById("weekendNav");
const letter = document.getElementById("letter");
const openLetter = document.getElementById("openLetterButton");
const cover_letter = document.getElementById("cover-letter");
const nav_menu = document.getElementById("nav_menu");
const textFromLetter = document.getElementById("textFromLetter");

natureNav.addEventListener("click", function (e) {
  nature.scrollIntoView();
});
houseNav.addEventListener("click", function (e) {
  house.scrollIntoView();
});
technologyNav.addEventListener("click", function (e) {
  technology.scrollIntoView();
});
weekendNav.addEventListener("click", function (e) {
  weekend.scrollIntoView();
});

const moveFlower = document.getElementById("moveFlower");
const borderOfLetter = document.getElementById("borderOfLetter");
const moveFlowerRight = document.getElementById("moveFlowerRight");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
openLetter.addEventListener("click", function (e) {
  console.log("open");
  cover_letter.classList.add("opacity-0");
  openLetter.classList.add("opacity-0");
  textFromLetter.classList.remove("opacity-0");
  //e.target.style.setProperty("--y", borderOfLetter.offsetHeight);
  document.documentElement.style.setProperty(
    "--y",
    borderOfLetter.offsetHeight + "px"
  );
  moveFlower.classList.add("translate-y-var");
  // console.log(a);
  moveFlowerRight.classList.add("translate-y-var");
});
const flowers = document.querySelectorAll(".flowers");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const borderOfLeft = document.getElementById("borderOfLeft");
const thesun = document.getElementById("thesun");
const therains = document.querySelectorAll(".therains");
const ready = document.getElementById("ready");
const setVisibleLetter = () => {
  letter.classList.remove("hidden");
  ready.classList.add("hidden");
};
yesButton.addEventListener("click", function (e) {
  flowers.forEach((flower) => {
    flower.classList.remove("opacity-0");
    flower.classList.add("opacity-1");
  });
  document.documentElement.style.setProperty(
    "--x",
    borderOfLeft.offsetWidth - 50 + "px"
  );
  thesun.classList.add("translate-x-var");
  document.documentElement.style.setProperty(
    "--y",
    borderOfLeft.offsetHeight - 150 + "px"
  );
  therains.forEach((rain) => {
    //rain.classList.remove("hidden");
    rain.classList.add("translate-y-var");
    //console.log("the fuck?");
  });
  setTimeout(() => {
    console.log("rain disapperaing");
    therains.forEach((rain) => {
      //rain.classList.remove("hidden");
      rain.classList.add("hidden");
      //console.log("the fuck?");
      setTimeout(() => {
        setVisibleLetter();
      }, 1000);
    });
  }, 4000);
});
const topscroll = document.getElementById("topscroll");
noButton.addEventListener("click", function (e) {
  flowers.forEach((flower) => {
    flower.classList.add("opacity-0");
    flower.classList.remove("opacity-1");
  });
  topscroll.scrollIntoView();
  console.log("sc");
});

// console.log(borderOfLeft.offsetTop);
// console.log(borderOfLeft.offsetHeight);
window.onscroll = function () {
  if (
    window.pageYOffset >= nav_menu.offsetTop &&
    window.pageYOffset >= nav_menu.offsetHeight + nav_menu.offsetTop
  ) {
    nav_menu.classList.add("fixed");
    //nav_menu.classList.add("top-[-50px]");
    nav_menu.classList.remove("hidden");
    nav_menu.classList.add("bg-pink-100");
    nav_menu.classList.add("top-0");
    nav_menu.classList.add("w-4xl");
    // console.log("nav lost");
  } else {
    nav_menu.classList.remove("fixed");
    // nav_menu.classList.remove("top-[-50px]");
    nav_menu.classList.remove("bg-pink-100");
    // console.log("w");
    // console.log("nav there");
  }
  //console.log(letter.offsetTop);
  if (window.pageYOffset >= ready.offsetTop - 200) {
    nav_menu.classList.remove("fixed");
    nav_menu.classList.add("hidden");
    nav_menu.classList.remove("bg-pink-100");
    //console.log("w");
  }
};
