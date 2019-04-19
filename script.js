//Javascript
var numberOne, numberTwo, insertValue;

//This function passes values into appropriate input fields
function inputValue() {
	insertValue = event.target.value;
	if (insertValue == "+" || "-" || "/" || "*"){
			document.getElementById("op").innerHTML = insertValue;
		} else if (0 <= insertValue <= 9) {
				document.getElementById("valueOne").value += insertValue;
		} else {
			insertValue = "";
		} 
}

function calculate() {
	this.blur();
	//Replace eval with another solution
	var result = Number(document.querySelector("#valueOne").value) + calcOp + document.querySelector("#valueTwo").value;
	// result output
	document.querySelector("#result").innerHTML = result; 
}

function clearInput() {
	this.blur();
	document.getElementById("valueOne").value = "";
	document.getElementById("valueTwo").value = "";
	document.getElementById("op").innerHTML = "";
	document.getElementById("result").innerHTML = "0";
}
