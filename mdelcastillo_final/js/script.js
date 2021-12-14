//Getting elements by their id
var calculateBtn = document.getElementById('calculateBtn');

var calculate = function() {
	var totalBill = document.getElementById('totalBill');
	var srvcPerc = document.getElementById('srvcPerc');
	var numOfPeeps = document.getElementById('numOfPeeps');
	var result = document.getElementById('result');

	//validate and check for errors
	var error = 0;

	if (totalBill.value == "") {
		totalBill.style.borderColor = "#fc8370";
		error = 1;
	} else {
		totalBill.style.borderColor = "#655091";
		error = 0;
	}

	if (srvcPerc.value == 0) {
		srvcPerc.style.borderColor = "#fc8370";
		error = 1;
	} else {
		srvcPerc.style.borderColor = "#655091";
		error = 0;
	}
	//check to be sure there's no error and calculate tip based on number of people
	if (!error) {
		let tip = 0;
		let tipCalc = totalBill.value * srvcPerc.value;
		if (numOfPeeps.value != 1 && numOfPeeps.value != "") {
			let tipPerPers = tipCalc / numOfPeeps.value;
			let tipPerPersRounded = Math.round(tipPerPers * 100) / 100;	
			tipPerPersRounded = tipPerPersRounded.toFixed(2);
			tip = tipPerPersRounded == 0 ? tipPerPers + " Per Person" : tipPerPersRounded + " Per Person";
		} else {
				let tipRounded = Math.round(tipCalc * 100) / 100;
				tipRounded = tipRounded.toFixed(2);	
				tip = tipRounded == 0 ? tipCalc : tipRounded;
		}	
		
		result.innerText = tip;
	} else {
		return;
	}
}
//add click feature to the calculate button
calculateBtn.addEventListener('click', calculate);