////////////////////////////// FROM_WEEKDAYS //////////////////////////////
let elIn = document.querySelector(".INPUT_WEEKDAYS");
let elForm = document.querySelector(".FROM_WEEKDAYS");

let elOut = document.querySelector(".OUTPUT_WEEKDAYS");

let day;
elForm.addEventListener("submit", function (event) {
	event.preventDefault();
	day = elIn.value;
	switch (day) {
		case "1":
			day = "Dushanba";
			break;

		case "2":
			day = "Seshanba";
			break;

		case "3":
			day = "Chorshanba";
			break;

		case "4":
			day = "Payshanba";
			break;

		case "5":
			day = "Juma";
			break;

		case "6":
			day = "Shanba";
			break;

		case "7":
			day = "Yakshanba";
			break;

		default:
			day = "Bunday hafta kuni yoq";
	}
	elOut.textContent = day;
});
////////////////////////////// FROM_WEEKDAYS //////////////////////////////

////////////////////////////// FROM_FizzBuzz //////////////////////////////
let elInput = document.querySelector(".INPUT_FIZZBUZZ");
let output_value = document.querySelector(".OUPUT_FIZZBUZZ");
let elform = document.querySelector(".FROM_FIZZBUZZ");
let val;
elform.addEventListener("submit", function (event) {
	event.preventDefault();

	val = elInput.value;

	if (val % 3 === 0 && val % 5 !== 0) {
		output_value.textContent = "Fizz";
	} else if (val % 5 === 0 && val % 3 !== 0) {
		output_value.textContent = "Buzz";
	} else if (val % 5 === 0 && val % 3 === 0) {
		output_value.textContent = "FizzBuzz";
	} else {
		output_value.textContent = val;
	}
});
////////////////////////////// FROM_FizzBuzz //////////////////////////////

////////////////////////////// FROM_CURRENCY //////////////////////////////
let eINPUT = document.querySelector(".INPUT_CURRENCY");
let eOUTPUT = document.querySelector(".OUTPUT_CURRENCY");
let eFORM = document.querySelector(".FROM_CURRENCY");

let uzs;
eFORM.addEventListener("submit", function (event) {
	event.preventDefault();
});
////////////////////////////// FROM_CURRENCY //////////////////////////////
