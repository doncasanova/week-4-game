

var crystals = $("#crystals");
var counter = 0;
var wins = 0;
var losses = 0;
//----------------------------------------------------------------------------
//Adds the crystals to DOM
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
//starts program
$(document).ready(function () {
    $("button").click(function () {
        targetNumber = 0
        counter = 0
        document.getElementById("number-to-find").innerHTML = targetNumber;
        document.getElementById("user-guess").innerHTML = counter;
        document.getElementById("re-start").innerHTML = "Play Again";
        //-------------------------------------------------------------------------
        document.getElementById("instructions").innerHTML = "";
        //-----------------------------------------------------------------------------
        //picks random numbers to add to crystals

        for (var i = 0; i < 4; i++) {
            var numberOptions = 1 + Math.floor(Math.random() * 11)
            var imageCrystal = $("<img>");
            imageCrystal.attr("data-crystalvalue", numberOptions);
            crystals.append(imageCrystal);
        }

        //-----------------------------------------------------------------------------
        // picks random number to be found
        var targetNumber = 19 + Math.floor(Math.random() * 101)
        console.log(targetNumber + "number to find")
        $("#number-to-find").text(targetNumber);
        //------------------------------------------------------------------------------
        //adds players guess together
        // $(document).ready(function () {
            $("#crystals").on("click", ".crystal-image", function () {
                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                counter += crystalValue;
                // alert("New score: " + counter);
                document.getElementById("user-guess").innerHTML = "" + counter;

                if (counter === targetNumber) {
                    setTimeout(function () {
                        alert("You win!");
                    }, 100);
                    
                    // window.location.reload()
                    wins++
                    // $("wins").text("Wins <br/>  " + wins)
                    document.getElementById("wins").innerHTML = "Wins <br/> " + wins;
                    $("#crystals").off("click", ".crystal-image")
                    
                }

                else if (counter > targetNumber) {
                    setTimeout(function () { 
                        alert("You loose!!");
                    }, 100);
                   

                    // window.location.reload()
                    losses++
                    // $("losses").text("Losses <br/>"  + losses)
                    document.getElementById("losses").innerHTML = "Losses <br/>" + losses;
                    $("#crystals").off("click", ".crystal-image")
                }



                //alerts are firing before the totals are logged

            });

        // });
        //----------------------------------------------------------------------------  
    });
});
