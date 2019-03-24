var $crystals = $(".crystal");
var $targetNumber = $("#target-number");
var $score = $("#score");
var $wins = $("#wins");
var $losses = $("#losses");


// var crystalPoints = [];
var wins = 0;
var losses = 0;
var score = 0;
var targetNumber = 0;

function startGame() {
    // get random target number
    targetNumber = Math.floor((Math.random() * 102) + 19);
    // display target number on page
    $targetNumber.text(targetNumber);
    console.log("Target Number: " + targetNumber);

    // reset score and each crystal's points
    // newCrystalPoints();
    setCrystalValues();
    score = 0;
    $score.text("0");
}

// function newCrystalPoints() {
//     for (var i = 1; i < 5; i++) {
//         var randomCrystalNumber = Math.floor((Math.random() * 12) + 1);
//         crystalPoints.push(randomCrystalNumber);
//     }
//     console.log(crystalPoints);
// }

function setCrystalValues() {
    // assign data-points values for each crystal using crystalPoints array
    $.each($crystals, function (i, crystal) {
        // var points = crystalPoints[i];
        var randomCrystalNumber = Math.floor((Math.random() * 12) + 1);
        // crystalPoints.push(randomCrystalNumber);
        $(this).attr("data-points", randomCrystalNumber);
        console.log("Crystal Number " + i + ": " + randomCrystalNumber);
    })
}


function youLose() {
    console.log("loser");
    losses += 1;
    $losses.text(losses);
    startGame();
}

function youWin() {
    console.log("winner");
    wins +=1;
    $wins.text(wins);
    startGame();
}








startGame();



$crystals.on("click", function() {
    // grab points, add to score
    score += Number($(this).attr("data-points"));
    // update score on page
    $score.text(score);

    // decide if win or lose
    if (targetNumber === score) {
        youWin();
    } else if (targetNumber < score) {
        youLose();
    }
});




// generate random winning number (19 - 120)
// generate random numbers for each crystal (1 - 12)
    // each time a user clicks a crystal, that number is added to their score

// when you guess the number, wins++


// if user's score goes above the winning number, they lose, loses++
// when user wins or loses, game resets with new random numbers