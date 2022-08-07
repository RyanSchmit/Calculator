const numbersClass = document.querySelector(".numbers");
const numbers = numbersClass.querySelectorAll("button");
const inputDisplay = document.getElementById("input-display");
const operationClass = document.querySelector(".operations");
const operations = operationClass.querySelectorAll("button");
const equalSign = document.querySelector(".equal-sign");
let operationSelected = false;
let number1;
let number2;

numbers.forEach((number) => {
	number.addEventListener('click', () => {
		if (inputDisplay.textContent == 0 && operationSelected == false) {
			inputDisplay.textContent = number.textContent;
			number1 = number.textContent;
		}
		else if (operationSelected == false) {
			inputDisplay.textContent += number.textContent;
			number1 += number.textContent;
		}
		else if (operationSelected != false && inputDisplay.textContent == number1) {
			inputDisplay.textContent = '';
			inputDisplay.textContent = number.textContent;
			number2 = number.textContent;
		}
		else {
			inputDisplay.textContent += number.textContent;
			number2 += number.textContent;
		}
	})
})

operations.forEach((operation) => {
	operation.addEventListener('click', () => {
		if (inputDisplay.textContent == 0) {
			alert("Input numbers first!");
		}
		else {
			operationSelected = operation.textContent;
			operation.style.backgroundColor = "red";
			operation = operation.textContent;
		}
	})
})

const evaluate = () => {
	if (operationSelected == "+") {
		alert(parseInt(number1) + parseInt(number2));
	}
	else if (operationSelected == "x") {
		alert(parseInt(number1) * parseInt(number2))
	}
	else if (operationSelected == "/") {
		alert(parseInt(number1) / parseInt(number2))
	}
	else if (operationSelected == "-") {
		alert(parseInt(number1) - parseInt(number2))
	}
	inputDisplay.textContent = 0;
	operations.forEach((operation) => operation.style.backgroundColor = "coral")
	operations.backgroundColor = "blue";
}

equalSign.addEventListener('click', evaluate);


