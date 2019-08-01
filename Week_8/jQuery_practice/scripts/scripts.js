console.log("Hello there!");


$(document).ready(function () {

    console.log("jQuery is ready!");

    // css jQuery Method
    $("p").css("font-size", "100px");
    $("body").css("color", "#777777");

    $("#box").css("width", "400px");
    $("#box").css("height", "400px");
    $("#box").css("background-color", "green");
    $("#box").css("border", "1px solid red");

    var array1 = [100, 1000, 10000];
    
    // Quick overview of Objects
    var object1 = {
        "name": "Eduardo",
        "age": 29,
        "hair color": "black"
    };
    
    // Accessing object properties
    console.log(object1["age"]);
    console.log(object1.age);

    $("#box").css({
        "background-color": "red",
        "border-radius": "25px",
        "margin-left": "100px"
    });

    // Remove CSS properties.
    $("#box").css("border", "");

    // End of css jQuery Method

    // HTML jQuery Method syntax -> $().html();
    jQuery("#box").html("<p>Hello World!</p>");

    // $().append(); Adds to the end of the children of the target.
    $("#box").append("<p>How are you doing?</p>");

    // $().prepend(); Adds to the start of the children of the target.
    $("#box").prepend("<h1>Welcome Message</h1>");

    // .remove();
    $("body > p").remove();
    
    $("#box p").css("color", "yellow");
    $("#box p").css("font-size", "24px");
    $("#box p").css("padding", "13px");
    // End HTML jQuery Method

    // jQuery Click Handler
    $("#change-bg").click( function () {

        $("#box").css("background-color", "green");

    } );

    $("#change-bg-stop").click( function () {

        $("#box").css("background-color", "red");

    } );


    $("input").keypress(  function (event) {

        if (event.which == 101) {
            console.log("You pressed the E key!");

            var currentMargin = $("#box").css("margin-left");
            console.log(currentMargin);

            currentMargin = parseInt(currentMargin);
            $("#box").css("margin-left", currentMargin + 10 );
        }

        console.log(event.which);
        

    }  );

    $("#disappear").click(  function () {

        $("#box").css("visibility", "hidden");

    }  );

});



