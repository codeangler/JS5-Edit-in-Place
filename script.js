var nameData = document.querySelectorAll('.textInput');
	console.log(nameData);

for (var i = 0; i < nameData.length; i ++){
	nameData[i].addEventListener("click", alertText, false);
		
}


function alertText(){
	alert("you did it, again." + " You have clicked item " + [i])}