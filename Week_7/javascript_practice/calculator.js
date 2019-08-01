//console.log(process.argv);

parseInt("120976885")
var firstNumber = process.argv[2];
var secondNumber = process.argv[3];

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

function mathify(number1, number2) {


    if ( typeof number1 == "Number" && typeof number2 == "number") {
 
    var sum = number1 + number2;
    var difference = number1 - number2;
    var product = number1 * number2;
    var quotient = number1 / number2;

    console.log("The sum of" + number1 + "and" + number2 +" is:", sum);
    console.log("The difference of" + number1 + "and" + number2 +" is:", sum, difference);
    console.log("The product of" + number1 + "and" + number2 +" is:", sum, product);
    console.log("The quotient of" + number1 + "and" + number2 +" is:", sum, quotient);

} else {
    console.log("The value of number1 is not a number! Try Again!");
}

mathify ("string", false);
