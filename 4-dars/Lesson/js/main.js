// const hasDriverLicence = true;
// const hasGoodVision = true;
// let isTired = true;

// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);
// console.log(!hasDriverLicence);

// if(hasDriverLicence && hasGoodVision) {
// 	console.log("Moshina haydasangiz bo'ladi!")
// } else {
// 	console.log("Hayday olmaysiz!")
// }

// console.log(hasDriverLicence || hasGoodVision || isTired);

// if (hasDriverLicence && hasGoodVision && !isTired) {
//   console.log("Moshina haydasangiz bo'ladi!");
// } else {
//   console.log("Hayday olmaysiz!");
// }

// &&- AND (ALL TRUE -> TRUE)
// || - OR (ONE TRUE > TRUE)
// ! - NOT (TRUE -> FALSE, FALSE -> TRUE)

// let A = false;
// let B = true;
// let C = true;
// let D = false;

// console.log(((A && !B) || (C || D)) && !(A||B));

// let age = prompt("raqam kiriting", "5.5")

//////////////// DOM /////////////////////////////////////////

// let elHeading = document.getElementById("heading")getElementsByClassName()
// let elHeading = document.getElementsByClassName("h2")
// let heading = document.querySelector("#heading")

// console.log(heading);

// let elList = document.querySelector("ul li")
// console.log(elList);

///////////// UFS //////////////////////////////////////////////////

let elTitle = document.querySelector(".title");
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elSelekt = document.querySelector(".form__select");
let elResult = document.querySelector(".form__result");

// let inputValue = elInput.value
let selectValue = elSelekt.value;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  elResult.textContent = `${elInput.value} VS ${elSelekt.value}`;
  elTitle.textContent = "KFS";
});
