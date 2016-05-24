var nameData = document.querySelectorAll('.textInput');
	console.log(nameData);

for (var i = 0; i < nameData.length; i ++){
	(function(i){
		nameData[i].addEventListener("click", function(){alertText(i)}, false);
	})(i);
		
}


function alertText(i){
	alert("you did it, again." + " You have clicked item " + [i])}