var nameData = document.querySelectorAll('.textInput');
	console.log(nameData);

// Loop through all elements of class and assign addEventListener
for (var i = 0; i < nameData.length; i ++){
	// IFFE function passing  i
	// (function(i){
	// 	nameData[i].addEventListener("click", function(){alertText(i)}, false);
	// })(i);
	(function(i){
		nameData[i].addEventListener("click", function(){displayContent(i)}, false);
	})(i);
	// (function(i){
	// 	nameData[i].addEventListener("mouseleave", function(){blurrEvent(i)}, false);
	// })(i);
}


// function alertText(j){
// 	alert("you did it, again." + " You have clicked item " + [j + 1])
// }

function displayContent(j) {
	j++;
	var x = document.getElementById("info" + j);
	var y = document.createElement("input")
	y.setAttribute("type", "text");
	y.setAttribute("id", "dataInput" + j);
	y.innerHTML = "replaced";
	x.parentNode.replaceChild(y, x);

}

function blurrEvent(j) {
	x = j +1;
	document.getElementById("info" + x).textContent = "Back to Neutral";
}