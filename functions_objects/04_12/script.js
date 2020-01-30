// function doSomeMath() { // browser looks here first
// 	var a = 5;
// 	var b = 4;

// 	function multiply() {
// 		var res = a*b;
// 		return res;
// 	}
// 	// var sum = a + b;

// 	// return sum;
// 	return multiply;
// } // Closure, relies on variables assigned outside of scope.

// var theResult = doSomeMath(); // goes back into initial function scope

// console.log("The result: ", theResult());

// CLOSURES

// Function within a function that relies on variables in the outside function to work. 

// Ems

function giveMeEms(pixels) {
	var baseValue = 16;

	function doTheMath() {
		return pixels/baseValue;
	}

	return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log(" Small: ", smallSize())
console.log(" Medium: ", mediumSize())
console.log(" Large: ", largeSize())
console.log(" Xlarge: ", xlargeSize())


//MDN: Closures