//Javascript

function inputValue() {
	var insertValue = event.target.innerHTML;
		/* if (insertValue === [0-9]) {
			document.input.onfocus.innerHTML += insertValue;
		} else { */
		document.querySelector("#op").innerHTML = insertValue;
		//}
}

function calculate() {
	var numberOne = Number(document.querySelector("#valueOne").value);
	var numberTwo = Number(document.querySelector("#valueTwo").value);
	var calcOp = document.querySelector("#op").value;
	//Replace eval with another solution
	var result = eval(numberOne + calcOp + numberTwo);

	// result output
	document.querySelector("#result").innerHTML = result; 
}

function clearInput() {
	//To clear all input fields - IDEA: something.innerHTML = ''
}
