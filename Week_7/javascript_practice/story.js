console.log(process.argv);

var randomNumber = process.argv[2];

//var randomNumber = Math.random() * 4;
//randomNumber = Math.floor(randomNumber);

console.log(randomNumber);

var vehicle;

if (randomNumber == 0) {
    vehicle = "bus"
} else if (randomNumber == 1) {
    vehicle == "car";
} else if (randomNumber == 2) {
    vehicle = "carpet"
} else if ( randomNumber == 3) {
    vehicle = "";
}

var accident = "";
var tardinessMinutes = 15; // minutes

console.log("Value of vehicle: ", vehicle);
console.log("Value of accient: ", accident);

if ( vehicle == "bus") {
    console.log("John takes the bus.");
    tardinessMinutes = tardinessMinutes + 5;
} else if (vehicle == "car") {
    console.log("John takes his car.");
    tardinessMinutes = tardinessMinutes + 1;
} else if ( vehicle == "carpet") {
    console.log("John takes a magic carpet.");
} else {
    console.log("John does not know what to commute on.");
    tardinessMinutes = tardinessMinutes + 1000;
}

if (accident == "tire flat") {
    
    if (vehicle == "car") {
        console.log("John had a flat tire, but luckily he had a spare tire, he is a little late to work.");
        tardinessMinutes = tardinessMinutes + 10;
    } else if (vehicle == "bus") {
        console.log("John's bus tire popped off and left John stranded, the next bus came 3 hours later.");
        tardinessMinutes = tardinessMinutes + 180;
    }

} else {
    console.log("John's morning was the usual.");
    tardinessMinutes = tardinessMinutes - 2;
}

if (tardinessMinutes >= 15) {
    console.log("John arrived" +  tardinessMinutes + "minutes late to work, He was fired on the spot.");
} else if ( tardinessMinutes > 0 && tardinessMinutes < 15) {
    Console.log("John arrived a little late, he dodged his boss's fury.");
} else {
    console.log("John arrives on time, thanks to an eventless commute.");
}

200

"Hello World"

"Hello" + 100
