// Write an array
var someNum = [1,2,3,4,5];

// Create a function that maps the array and passes them each through a function
function doubleTheValue(arrayOfNumbers){
	return arrayOfNumbers.map(function twoTimes(num) {
		return  num * 2;
	});
}

console.log(someNum, doubleTheValue(someNum));

// Reduce   compiles all parts of Array into one storage unit to execute
var myBankAccount = 900,
	myPurchases = [10,40,55,698];

function myPaycheck(runningTotal, purchase){
	return	runningTotal - purchase;
}

var finalResult = myPurchases.reduce(myPaycheck, myBankAccount);

console.log(finalResult, myBankAccount, myBankAccount - finalResult);

// Filter  a native JS array object  ---  
//JSON 
var employees = [
    {"firstName":"John", "lastName":"Doe", "isAvailable": false,},
    {"firstName":"Anna", "lastName":"Smith", "isAvailable": true,},
    {"firstName":"Peter", "lastName":"Jones", "isAvailable": true}
];

var result = employees.filter(function(employeeObj){
	//function selects only available employees
	//must return a boolean value
	return employeeObj.isAvailable === true;
});

console.log(JSON.stringify(result));
