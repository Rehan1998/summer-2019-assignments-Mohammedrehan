console.log("Hello there!");

$(document).ready(function () {

    console.log("jQuery is ready!");

    //css jQuery Method 
    
    $("p").css("font-size", "100px");

    $("div").css("color", "#777777");

    $("div").css("background-color", "green");

    $("div").css("height", "400px");

    $("div").css("width", "400px");
    $("div").css("border", "1px solid red");

   
    var array1 = [100, 1000, 10000];

    var object1 = {
        "name": "Rehan",
        "hair-color": "black",
    };

    console.log(object1["name"]);
    console.log(object1["hair-color"]);

    $("div").css({
        "background-color": "red",
        "border-radius": "25px",
        "margin-left": "100px",
    });
    // Remove CSS properties.
    $("div").css("border", "");

// End of css jQuery Method

// HTML jQuery Method syntax -> $().html();

    jQuery("div").html("<p>Hello World!</p>");
    
    $("div p").css("color", "yellow");
    $("div p").css("font-size", "24px");
    $("div p").css("padding", "13px");
    //End HTML jQuery Method
    
    //jQuery Click Handler
    $("#change-bg").click(function () {

       $("div").css("background-color", "green");
    } );

    $("#change-bg-stop").click(function () {

        $("div").css("background-color", "red");
     } );

     $("input").keypress( function (event){

        if (event.which == 100){
            console.log("you pressed the E key!");

            var currentMargin = $("div").css("margin-left");
            console.log(currentMargin);

            currentMargin = parseInt(currentMargin);
            $("div").css("margin-left")
     });
});

jQuery();
$();