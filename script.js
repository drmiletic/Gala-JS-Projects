//Javascript

function inputValue() {
	var insertValue = event.target.value;
		if (insertValue == [0-9]) {
			document.input.onfocus.innerHTML = insertValue;
		} else {
			document.querySelector("#op").innerHTML = insertValue;
			}
}

function calculate() {
	var numberOne = Number(document.querySelector("#valueOne").value);
	var numberTwo = Number(document.querySelector("#valueTwo").value);
	var calcOp = document.querySelector("#op").innerHTML;
	var result = eval(numberOne + calcOp + numberTwo);

	// result output
	document.querySelector("#result").innerHTML = result; 
}