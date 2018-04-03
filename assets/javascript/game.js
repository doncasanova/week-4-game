

var crystals = $("#crystals");
var counter = 0;
var wins = 0
var loses = 0

for (var i = 0; i < 4; i++) {
    var numberOptions = 1 + Math.floor(Math.random() * 11)
    console.log(numberOptions + "  crystal")
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions);
    crystals.append(imageCrystal);
}
//-----------------------------------------------------------------------------
$(document).ready(function () {
    $("button").click(function () {
        targetNumber = 0
        console.log(targetNumber + "  number to find reset")
        counter = 0
        console.log(counter + "  player number reset")
        document.getElementById("number-to-find").innerHTML = targetNumber;
        document.getElementById("user-guess").innerHTML = counter;
        //-----------------------------------------------------------------------------


        for (var i = 0; i < 4; i++) {
            var numberOptions = 1 + Math.floor(Math.random() * 11)
            console.log(numberOptions + "  crystal")
            var imageCrystal = $("<img>");
            imageCrystal.attr("data-crystalvalue", numberOptions);
            crystals.append(imageCrystal);
        }

        //-----------------------------------------------------------------------------
        // number to be found
        var targetNumber = 19 + Math.floor(Math.random() * 101)
        console.log(targetNumber + "number to find")
        $("#number-to-find").text(targetNumber);
        //------------------------------------------------------------------------------

        $("#crystals").on("click", ".crystal-image", function () {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
            // alert("New score: " + counter);
            document.getElementById("user-guess").innerHTML = "" + counter;

            if (counter === targetNumber) {
                setTimeout(function () {
                }, 100);
                alert("You win!");
                wins++
                document.getElementById("wins").innerHTML = "Wins  " + wins;


            }

            else if (counter >= targetNumber) {
                setTimeout(function () {
                }, 100);
                alert("You lose!!");
                loses++
                document.getElementById("loses").innerHTML = "Loses  " + loses;


            }

            //alerts are firing before the totals are logged

        });

    });
    //----------------------------------------------------------------------------  
});
