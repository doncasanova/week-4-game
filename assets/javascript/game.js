


//------------------------------------------------------------------------
// ADD A NAV BAR!!! for a start button that will say "if you think you have what it takes click on me and see what to do.
// The game is this, a random numer will be there. To find this number all you have to do is click a crystals . each chystal 
// will keep a hidden number that you can have by clicking   " 
//add variables for each crystal

//when nav bar is clicked 
//randimizer numbers for crystals and number guess
//change html 
//add the random number and the players tally and show the cystals

//var number = 1 + Math.floor(Math.random() * 6); add this to a loop for the 3 crystals


// code for addition
//first crystal click store the value "using a function"
//when next crystal is clicked add them together with math function. store value and display it in the players tally.
//this should be done out side a loop.

//need a loop to continue adding the next crystal clicked
//this loop needs to add next crystal clicked to total aready clicked 
//update player count
//compare player count to random number


// game start 

// game end

// 

// function update_try( number_to_find ) {
//     //used charactor list
//     document.getElementById("number_to_find").innerHTML = number_to_find;
//     console.log(number_to_find)
// }


var crystal_1 = 0
var crystal_2 = 0
var crystal_3 = 0
var crystal_4 = 0
var no_to_find = 0
var players_no = 0

//-----------------------------------------------------------------------------
// number to be found
var number_to_find = 19 + Math.floor(Math.random() * 101)
console.log(number_to_find + "number to find")
//------------------------------------------------------------------------------
// crystal numbers
var crystal_1 = 1 + Math.floor(Math.random() * 12)
console.log(crystal_1 + "  crystal 1")

var crystal_2 = 1 + Math.floor(Math.random() * 12)
console.log(crystal_2 + "  crystal 2")

var crystal_3 = 1 + Math.floor(Math.random() * 12)
console.log(crystal_3 + "  crystal 3")

var crystal_4 = 1 + Math.floor(Math.random() * 12)
console.log(crystal_4 + "  crystal 4")


//----------------------------------------------------------------------------
//changes random number at the begining of the game. Is outsideof the game loop

$(document).ready(function () {
    $("button").click(function () {
        // $("#number_to_find").text(test);
        document.getElementById("number-to-find").innerHTML = number_to_find;
        console.log(number_to_find)

    });

});

// end of start
//----------------------------------------------------------------------------
// begining of game loop
$('.crystal-1').click(function () {
    players_no = crystal_1 + players_no
    console.log(players_no + "  player number")
});

$('.crystal-2').click(function () {
    players_no = crystal_2 + players_no
    console.log(players_no + "  player number")
});

$('.crystal-3').click(function () {
    players_no = crystal_3 + players_no
    console.log(players_no + "  player number")
});

$('.crystal-4').click(function () {
    players_no = crystal_4 + players_no
    console.log(players_no + "  player number")
});


//end of game
//----------------------------------------------------------------------------
//reset game
$(document).ready(function () {
    $("input").click(function () {

        var crystal_1 = 0
        console.log(crystal_1 + "  crystal 1")
        var crystal_2 = 0
        console.log(crystal_2 + "  crystal 2")
        var crystal_3 = 0
        console.log(crystal_3 + "  crystal 3")
        var crystal_4 = 0
        console.log(crystal_4 + "  crystal 4")
        var number_to_find = 0
        console.log(number_to_find + "  number to find")
        var players_no = 0
        console.log(players_no + "  player number")
        document.getElementById("number-to-find").innerHTML = number_to_find;
    });
});
