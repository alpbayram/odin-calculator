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

//KAPSAYICILAR VE FONKSİYON YÖNLENDİRMELERİ
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");
const indicator = document.querySelector(".indicator-container");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

numberButtons.forEach((item, index, array) => {
	item.addEventListener("click", buttonClick);
});
operatorButtons.forEach((item, index, array) => {
	item.addEventListener("click", operate);
});

//FONKSİYONLARIM
function buttonClick(e) {
	if (indicatorDiv == false) {
		clickedNumber = e.currentTarget.id;

		console.log(e.currentTarget, "button click hedef targeti");

		console.log(`${clickedNumber}`, "basılan tuş");
		displayArray.push(clickedNumber);
		console.log(displayArray, "ekrana yazdırılan ilk choice arrayi");
		joinedDisplayArray = displayArray.join("");
		display.textContent = `${joinedDisplayArray}`;
		choice1 = joinedDisplayArray;
		console.log(choice1,"dönüştükten sonraki choice1")

		console.log(indicatorDiv, "indicatordivin anlık durumu");
	} else if (indicatorDiv == true) {
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

function operate(event) {
	console.log(event.currentTarget.id);

	if (event.currentTarget.id == "equals") {
		if (!operator == "") {
			switch (operator) {
				case "minus":

					result=choice1 - choice2
					console.log(result,"sonuç");
					display.textContent = result;
					indicatorDiv = false;
					displayArray = [];
					displayArray2 = [];
					console.log(displayArray, displayArray2, result);
					break;
				case "addition":
					let temp = parseInt(choice1) + parseInt(choice2);
					result = temp;
					console.log(result,"sonuç");
					display.textContent = result;
					indicatorDiv = false;
					displayArray = [];

					displayArray2 = [];
					console.log(displayArray, displayArray2, result);
					break;

				case "divide":
					break;
				case "multiply":
					break;

				default:
			}
		} else {
			console.log("operatore basılmadan eşittire basıldı. opeartor yoktur.");
		}
	} else {
		//operator = event.currentTarget.id;
		if (indicatorDiv == false) {
			operator = event.currentTarget.id;
			indicatorDiv = true;
			indicator.textContent = `${event.currentTarget.id}`;
			console.log("indicator div basılan operatore atandı");
		} else if(indicatorDiv==true){
			if(operator==event.currentTarget.id){

				
				indicatorDiv = false;
				indicator.textContent = ``;
				console.log("indicator div basılan operatorden kaldırıldı");
			}else{
				operator = event.currentTarget.id;
				indicator.textContent = `${event.currentTarget.id}`;
				console.log("operator değiştirildi indicator div hala true")
			}
			
		}
	}
}
