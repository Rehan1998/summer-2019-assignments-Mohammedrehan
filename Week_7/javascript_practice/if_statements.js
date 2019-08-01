// Conditional Logic 

if ("I am a string") {

    console.log("hello!");
}
// 0 "" undefined null 

// ==, !=, &&, ||, <=, >=, <, >

// EQUAL TO: ==
if ( 100 == "100") {
    console.log("Double Equal");
}

// Not Equal to: !=, !== 
if ( 100 != 99 ){
    console.log("Not Equal!");
}

// AND: &&
if ( true &&  false) {
    console.log("BOTH TRUE");
}

// Not Boolean: !
!true
!false 

// OR: ||
if (true || false) {
console.log("Either is True");
}

// MATH Lesser or Equal <=
if (100 <= 100) { 
    console.log("Lesser Than");
}

if (-100 < "") { 
    console.log("Lesser Than");
}

// MATH Greater than or Equal
if (100 >= 50) {
    console.log("Greater than or Equal");
}

if (100 > 100) {
    console.log("Greater than");

}

if (true) {
    
    var var1 = 100;

    if (false) {
        var var2 = 200;
    }

    var var3 = 300;

    if (true) {

        var var4 = 400;

        if (false) {

            var var5 = 500;

        }
    }
}