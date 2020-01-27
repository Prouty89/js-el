// function findBiggestFraction(a,b) {
//     console.log("Fraction a: ", firstFraction);
//     console.log("Fraction b: ", secondFraction);

//     var result; // local scope

// 	a>b ? result = ["a",a] : result = ["b",b];
//     return result;
// }

// var firstFraction = 7/16; // global scope
// var secondFraction = 13/25; // global scope

// var fractionResult = findBiggestFraction(firstFraction,secondFraction);
// console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest.");

// VAR vs CONST & LET

// CONST is a CONSTANT

// LET is a BLOCK SCOPE variable, smaller scope than var. 


// const myConstant = 5;
// console.log(myConstant)

// myConstant = 6; // re-assignment will not work. Throws error. 


function logScope() {
    var localVar = 2;

    if (localVar) {
        var localVar = "I'm different!";
        console.log("nested: ", localVar)
    }

    console.log("logScope local: ", localVar);
}

logScope()
