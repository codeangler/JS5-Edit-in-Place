var nameData = document.querySelectorAll('.textInput');
	console.log(nameData);

// Loop through all elements of class and assign addEventListener
for (var i = 0; i < nameData.length; i ++){
	// IFFE function passing  i
	(function(i){
		nameData[i].addEventListener("click", function(){displayTextBox()}, false);
	})(i);
	// (function(i){
	// 	nameData[i].addEventListener("mouseleave", function(){blurEvent(i)}, false);
	// })(i);
}

function displayTextBox() {
	var x = document.querySelectorAll('.textInput');
	for(var i = 0; i < x.length ; i++){
		// x.removeEventListener("click", function(), false);
		console.log(x[i].innerHTML);
		x[i].innerHTML = "<input value=\"" + x[i].textContent + "\"" + ">" + "</input>";
		//x.innerHTML = "<input id=\"inputContent" + j + "\"" + " placeholder = " + x.innerHTML + "></input>"
		}
}

// function blurEvent(j) {
// 	// x = j +1;
// 	// var initialContent = document.getElementById("info" + x);
// 	// var newContent = initialContent.value;
// 	// console.log("newContent");
// 	console.log(j++);
// }


// May 26  the addEventListener is not valid after it become text box.