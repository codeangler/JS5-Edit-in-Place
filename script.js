var nameData = document.querySelectorAll('.textInput');
	console.log(nameData);

// Loop through all elements of class and assign addEventListener
for (var i = 0; i < nameData.length; i ++){
	// IFFE function passing  i
	(function(i){
		nameData[i].addEventListener("click", function(){alertText(i)}, false);
	})(i);
		
}


function alertText(j){
	alert("you did it, again." + " You have clicked item " + [j + 1])
}