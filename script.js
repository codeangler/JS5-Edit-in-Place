var nameData = document.querySelectorAll('.textInput');
	console.log(nameData);

// Loop through all elements of class and assign addEventListener
for (var i = 0; i < nameData.length; i ++){
	// IFFE function passing  i
	
	(function(i){
		nameData[i].addEventListener("click", function(){displayTextBox(i)}, false);
	})(i);
	// (function(i){
	// 	nameData[i].addEventListener("mouseleave", function(){blurEvent(i)}, false);
	// })(i);
}

function displayTextBox(j) {
	j++;
	var x = document.getElementById("info" + j);
		x.setAttribute("style", "display:none");

	var y = document.createElement("input")
		y.setAttribute("type", "text");
		y.setAttribute("id", "dataInput" + j);
		y.setAttribute("class", "textInput");
		y.setAttribute("placeholder", x.innerHTML);
		y.innerHTML = "replaced";
	x.appendChild(y);
	// explaination http://stackoverflow.com/questions/843680/how-to-replace-dom-element-in-place-using-javascript
	// Replace node with #info + j  with newly created  y  
	// x.parentNode.replaceChild(y, x);
	// (function(j){
	// 	(function(i){
	// 	nameData[i].addEventListener("mouseleave", function(){alertText("howdy")}, false);
	// })(j);
	// })(j);
	// for (var i = 0; i < nameData.length; i ++){
	// 	(function(i){
	// 	nameData[i].addEventListener("mouseleave", function(){blurEvent(i)}, false);
	// })(i);
	
}

function blurEvent(j) {
	// x = j +1;
	// var initialContent = document.getElementById("info" + x);
	// var newContent = initialContent.value;
	// console.log("newContent");
}


// May 26  the addEventListener is not valid after it become text box.