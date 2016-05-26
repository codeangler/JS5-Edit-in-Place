var nameData = document.querySelectorAll('.textInput');
	console.log(nameData);

// Loop through all elements of class and assign addEventListener
for (var i = 0; i < nameData.length; i ++){
	// Add unique ID
	content = "content" + (i + 1);
	nameData[i].setAttribute("id", content);

	// IFFE function passing  i
	(function(i){
		nameData[i].addEventListener("click", function(){displayTextBox(i)}, false);
	})(i);
	// (function(i){
	// 	nameData[i].addEventListener("mouseleave", function(){blurEvent(i)}, false);
	// })(i);
}

function displayTextBox(j) {
	j ++;
	var x = document.getElementById("content" + j);
	var y = document.createElement("input")
		y.setAttribute("type", "text");
		y.setAttribute("id", "dataInput" + j);
		y.setAttribute("class", "textInput");
		y.setAttribute("placeholder", x.innerHTML);
		y.innerHTML = "replaced";
	// The append is an issued as the click is already passed... replace doens't give this erro x.appendChild(y);
	// explaination http://stackoverflow.com/questions/843680/how-to-replace-dom-element-in-place-using-javascript
	// Replace node with #info + j  with newly created  y  
	x.parentNode.replaceChild(y, x); // double clicking doesn't produce an error
	
	// Add new event handler for mouseleave on input
	document.getElementById("dataInput" + j).addEventListener("mouseleave", function(){blurEvent(j)}, false);
	
}

function blurEvent(j) {
	var initialContent = document.getElementById("dataInput" + j).value;
	initialContent.parentNode.replaceChild(initialContent, )
}
