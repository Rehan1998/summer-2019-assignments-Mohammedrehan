// Loops 


/* Infinite Loops
while () { 

}
*/

var counter = 5;

while (counter <= 10) {

    console.log("This is loop number " + counter + ".");

    counter++;
}



var counter = 0;

while (counter >= -10 ) {
    console.log("while Loop: This is  loop number" + counter + ".");

    counter = counter - 1;
}
// i= counter
// For Loop 
for ( var i = 0; i <= 10; i = i+ 1 ) {
    
    console.log ("For Loop: This is a loop number" + i + ".");
}
// Shorter For Loop 
for (var i = 1; i < 100; i++) {
    console.log(i);
}

// counting the amount of letters in a string.
 var string = "Hello there, how are you doing?";

 var stringLength = string.length;
 var lcount = 0;

 for (var i = 0; i < string.length; i++) {

    console.log("Character:" + string[i]);

    if (string[i] == "l" || string[i] == "L") {
        lcount = lcount + 1;
    }
 }

 console.log("The string" + " has " + lcount + "in it.");