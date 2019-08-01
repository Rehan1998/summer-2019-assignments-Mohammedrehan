$(document).ready(function (){

    $("#calculate").click(function(){

    var firstNumber = $("#firstNumber").val();
    firstNumber = parseInt(firstNumber);

    var secondNumber = $("#secondNumber").val();
    secondNumber = parseInt(secondNumber);

    //console.log(firstNumber + secondNumber);

    $("body").append(firstNumber + secondNumber);


    })

    

});