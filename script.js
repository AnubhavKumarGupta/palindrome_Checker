document.getElementById("btn").addEventListener("click", function() { 
	let input = document.getElementById('inputData').value;
	let total_length = input.length;
	let reverse = input.split("").reverse().join("");
	let new_input = input.toUpperCase();
	let new_reverse = reverse.toUpperCase();
  
	if (new_input == new_reverse) {
	  document.getElementById('inputDataPal').value = "Yes";
	} else {
	  document.getElementById('inputDataPal').value = "No";
	}
  
	document.getElementById('inputDataLength').value = total_length;
  });
  
  document.getElementById("resetBtn").addEventListener("click", function() {
	document.getElementById('inputData').value = '';
	document.getElementById('inputDataLength').value = '';
	document.getElementById('inputDataPal').value = '';
  });
  