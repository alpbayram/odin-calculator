const KIRMIZI = "#B0413E";
const TURKUAZ = "#548687";
const COPPER = "#c76a36";
const MAVI = "#334257";
const KOYUMAVI = "#1f2937";

//BAŞLANGIÇ TANIMLAMALARI
let displayArray = [];
let displayArray2 = [];
indicatorDiv = false;

let choice1 = "";
let choice2 = "";
let operator = "";
let result = "";

let isArithmeticButtonPressed = false;
//KAPSAYICILAR VE FONKSİYON YÖNLENDİRMELERİ
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");
const indicator = document.querySelector(".indicator-container");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const arithmetic = document.querySelector(".arithmetic");
const indicatorStates = document.querySelectorAll(".indicator");
const allClear = document.querySelector(".all-clear");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (e) => {
	if (result !== "") {
		allClearFunction();
	} else if (indicatorDiv == true) {
		if (displayArray2.includes(".") == false && choice2 !== "-" && choice2 !== "") {
			displayArray2.push(".");
			joinedDisplayArray2 = displayArray2.join("");
			display.textContent = `${joinedDisplayArray2}`;
			choice2 = joinedDisplayArray2;
		}
	} else if (indicatorDiv == false) {
		if (displayArray.includes(".") == false && choice1 !== "-" && choice1 !== "") {
			displayArray.push(".");
			joinedDisplayArray = displayArray.join("");
			display.textContent = `${joinedDisplayArray}`;
			choice1 = joinedDisplayArray;
		}
	}
});
clear.addEventListener("click", (e) => {
	if (result !== "") {
		allClearFunction();
		// if (indicatorDiv == false) {

		// } else if (indicatorDiv == true) {

		// }
	} else if (indicatorDiv == true) {
		displayArray2.pop();
		joinedDisplayArray2 = displayArray2.join("");
		display.textContent = `${joinedDisplayArray2}`;
		choice2 = joinedDisplayArray2;
	} else if (indicatorDiv == false) {
		displayArray.pop();
		joinedDisplayArray = displayArray.join("");
		display.textContent = `${joinedDisplayArray}`;
		choice1 = joinedDisplayArray;
	}
});
function allClearFunction(e) {
	displayArray = [];
	displayArray2 = [];
	indicatorDiv = false;
	choice1 = "";
	choice2 = "";
	operator = "";
	result = "";
	indicatorState("empty");
	console.log("cleara basıldı");
	display.textContent = "";
}
allClear.addEventListener("click", allClearFunction);

arithmetic.addEventListener("click", (e) => {
	if (result !== "") {
		if (indicatorDiv == false) {
			result = result * -1;
			display.textContent = `${result}`;
		} else if (indicatorDiv == true) {
			choice1 = result;
		}
		//burası dogru calısmıyor olabilir
	} else if (indicatorDiv == true) {
		if (displayArray2.includes("-") == true) {
			displayArray2.shift();
			joinedDisplayArray2 = displayArray2.join("");
			display.textContent = `${joinedDisplayArray2}`;
			choice2 = joinedDisplayArray2;
		} else if (displayArray2.includes("-") == false) {
			displayArray2.unshift("-");
			joinedDisplayArray2 = displayArray2.join("");
			display.textContent = `${joinedDisplayArray2}`;
			choice2 = joinedDisplayArray2;
		}
	} else if (indicatorDiv == false) {
		if (displayArray.includes("-") == true) {
			displayArray.shift();
			joinedDisplayArray = displayArray.join("");
			display.textContent = `${joinedDisplayArray}`;
			choice1 = joinedDisplayArray;
		} else {
			displayArray.unshift("-");
			joinedDisplayArray = displayArray.join("");
			display.textContent = `${joinedDisplayArray}`;
			choice1 = joinedDisplayArray;
		}
	}
});

numberButtons.forEach((item, index, array) => {
	item.addEventListener("click", buttonClick);
});
operatorButtons.forEach((item, index, array) => {
	item.addEventListener("click", operate);
});
console.log(indicatorStates);
//FONKSİYONLARIM
function indicatorState(state) {
	indicatorStates.forEach((item, index, array) => {
		if (state === "addition" && item.id == "indicator1") {
			item.textContent = "+";
			array[1].textContent = "";
			array[2].textContent = "";
			array[3].textContent = "";
		} else if (state === "minus" && item.id == "indicator2") {
			array[0].textContent = "";
			array[2].textContent = "";
			array[3].textContent = "";
			item.textContent = "-";
		} else if (state === "multiply" && item.id == "indicator3") {
			array[1].textContent = "";
			array[0].textContent = "";
			array[3].textContent = "";
			item.textContent = "x";
		} else if (state === "divide" && item.id == "indicator4") {
			array[1].textContent = "";
			array[2].textContent = "";
			array[0].textContent = "";
			item.textContent = "÷";
		} else if (state === "empty") {
			array[1].textContent = "";
			array[2].textContent = "";
			array[0].textContent = "";
			array[3].textContent = "";
		}
	});
}
function buttonClick(e) {
	if (!displayArray.length > 8 || !displayArray2.length > 8) {
	}
	if (indicatorDiv == false) {
		if (result !== "") {
			console.log("KONTROL");
			result = "";
			choice1 = "";
			//choice2 = "";

			clickedNumber = e.currentTarget.id;
			console.log(e.currentTarget, "button click hedef targeti");
			console.log(`${clickedNumber}`, "basılan tuş");
			displayArray.push(clickedNumber);
			console.log(displayArray, "ekrana yazdırılan ilk choice arrayi");
			joinedDisplayArray = displayArray.join("");
			display.textContent = `${joinedDisplayArray}`;
			choice1 = joinedDisplayArray;
			console.log(choice1, "dönüştükten sonraki choice1");
			console.log(indicatorDiv, "indicatordivin anlık durumu");
		} else {
			clickedNumber = e.currentTarget.id;
			console.log(e.currentTarget, "button click hedef targeti");
			console.log(`${clickedNumber}`, "basılan tuş");
			displayArray.push(clickedNumber);
			console.log(displayArray, "ekrana yazdırılan ilk choice arrayi");
			joinedDisplayArray = displayArray.join("");
			display.textContent = `${joinedDisplayArray}`;
			choice1 = joinedDisplayArray;
			console.log(choice1, "dönüştükten sonraki choice1");
			console.log(indicatorDiv, "indicatordivin anlık durumu");
		}
	} else if (indicatorDiv == true) {
		if (result !== "") {
			console.log("KONTROL");
		} else {
			clickedNumber = e.currentTarget.id;

			console.log(e.currentTarget);

			console.log(`${clickedNumber}`);
			displayArray2.push(clickedNumber);
			joinedDisplayArray2 = displayArray2.join("");
			display.textContent = `${joinedDisplayArray2}`;
			console.log(displayArray2);
			choice2 = joinedDisplayArray2;
			console.log(choice2 + `choice2`);
		}
	}
}

function operate(event) {
	console.log(event.currentTarget.id);
	if (choice1 == "-" || choice2 == "-") {
		choice1 = 0;
		choice2 = 0;
	}
	if (event.currentTarget.id == "equals") {
		indicatorDiv = false;
		indicatorState("empty");
		//indicator.textContent = ``;
		if (operator !== "") {
			switch (operator) {
				case "minus":
					if (result === "") {
						if (choice2 === "" && choice1 !== "") {
							choice2 = choice1;
							let temp = parseFloat(choice1) - parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else if (choice1 === "" && choice2 !== "") {
							choice1 = 0;
							let temp = parseFloat(choice1) - parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else if (choice1 === "" && choice2 === "") {
							console.log("deneme");
							choice1 = 0;
							choice2 = 0;
							let temp = parseFloat(choice1) - parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else {
							let temp = parseFloat(choice1) - parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						}
					} else {
						choice1 = result;
						result = choice1 - choice2;
						result = Math.round(result * 10000) / 10000;
						console.log(result, "sonuç");
						display.textContent = result;
						indicatorDiv = false;
						displayArray = [];
						displayArray2 = [];
						console.log(displayArray, displayArray2, result, choice1, choice2);
					}

					break;
				case "addition":
					if (result == "") {
						if (choice2 === "" && choice1 !== "") {
							choice2 = choice1;
							let temp = parseFloat(choice1) + parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else if (choice1 === "" && choice2 !== "") {
							choice1 = 0;
							let temp = parseFloat(choice1) + parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else if (choice1 === "" && choice2 === "") {
							console.log("deneme");
							choice1 = 0;
							choice2 = 0;
							let temp = parseFloat(choice1) + parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else {
							let temp = parseFloat(choice1) + parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						}
					} else {
						console.log("buraya girmiyior mu");
						choice1 = result;
						let temp = parseFloat(choice1) + parseFloat(choice2);
						result = temp;
						result = Math.round(result * 10000) / 10000;
						console.log(result, "sonuç");
						display.textContent = result;
						indicatorDiv = false;
						displayArray = [];

						displayArray2 = [];
						console.log(displayArray, displayArray2, result, choice1, choice2);
					}

					break;

				case "divide":
					if (result == "") {
						if (choice2 === "" && choice1 !== "") {
							choice2 = choice1;
							let temp = parseFloat(choice1) / parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else if (choice1 === "" && choice2 !== "") {
							choice1 = 0;
							let temp = parseFloat(choice1) / parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else if (choice1 === "" && choice2 === "") {
							console.log("deneme");
							choice1 = 0;
							choice2 = 0;
							let temp = parseFloat(choice1) / parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							allClearFunction();
							display.textContent = "Error";
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else if (choice1 !== "" && choice2 == "0") {
							let temp = parseFloat(choice1) / parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							allClearFunction();
							display.textContent = "ERROR";
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else {
							let temp = parseFloat(choice1) / parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						}
					} else {
						console.log("buraya girmiyior mu");
						choice1 = result;
						let temp = parseFloat(choice1) / parseFloat(choice2);
						result = temp;
						result = Math.round(result * 10000) / 10000;
						console.log(result, "sonuç");
						display.textContent = result;
						indicatorDiv = false;
						displayArray = [];

						displayArray2 = [];
						console.log(displayArray, displayArray2, result, choice1, choice2);
					}

					break;
				case "multiply":
					if (result == "") {
						if (choice2 === "" && choice1 !== "") {
							choice2 = choice1;
							let temp = parseFloat(choice1) * parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else if (choice1 === "" && choice2 !== "") {
							choice1 = 0;
							let temp = parseFloat(choice1) * parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else if (choice1 === "" && choice2 === "") {
							console.log("deneme");
							choice1 = 0;
							choice2 = 0;
							let temp = parseFloat(choice1) * parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							display.textContent = result;
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						} else {
							let temp = parseFloat(choice1) * parseFloat(choice2);
							result = temp;
							result = Math.round(result * 10000) / 10000;
							console.log(result, "sonuç");
							if (result.toString().length > 8) { 
								result = result.toExponential(4); 
								display.textContent = result;
							}else{
								display.textContent = result;
							}
							
							indicatorDiv = false;
							displayArray = [];

							displayArray2 = [];
							console.log(displayArray, displayArray2, result, choice1, choice2);
						}
					} else {
						console.log("buraya girmiyior mu");
						choice1 = result;
						let temp = parseFloat(choice1) * parseFloat(choice2);
						result = temp;
						result = Math.round(result * 10000) / 10000;
						console.log(result, "sonuç");
						display.textContent = result;
						indicatorDiv = false;
						displayArray = [];

						displayArray2 = [];
						console.log(displayArray, displayArray2, result, choice1, choice2);
					}
					break;

				default:
			}
		} else {
			console.log("operatore basılmadan eşittire basıldı. opeartor yoktur.");
		}
	} else {
		//operator = event.currentTarget.id;
		if (indicatorDiv == false) {
			choice2 = "";
			operator = event.currentTarget.id;
			indicatorDiv = true;
			indicatorState(event.currentTarget.id);

			console.log("indicator div basılan operatore atandı");
			if (result !== "") {
				if (choice2 !== "" && indicatorDiv == false) {
				} else {
				}
				choice1 = result;
				//choice2=""
				result = "";
			}
		} else if (indicatorDiv == true) {
			if (operator == event.currentTarget.id) {
				console.log("indicator div basılan operatorden kaldırıldı");
			} else {
				operator = event.currentTarget.id;
				indicatorState(event.currentTarget.id);
				console.log("operator değiştirildi indicator div hala true");
			}
		}
	}
}
