var game = {

};



var $crystals = $(".crystal");
var $targetNumber = $("#target-number");
var $score = $("#score");
var $wins = $("#wins");
var $losses = $("#losses");
var $message = $("#message");


var wins = 0;
var losses = 0;
var score = 0;
var targetNumber = 0;
var gameOver = false;

function startGame() {
    // get random target number
    targetNumber = Math.floor((Math.random() * 102) + 19);
    // display target number on page
    $targetNumber.text(targetNumber);
    console.log("game started");

    // reset score, gameOver, message, and each crystal's points
    setCrystalValues();
    score = 0;
    $score.text("0");
    $message.empty();
    gameOver = false;
}

function setCrystalValues() {
    $.each($crystals, function (i, crystal) {
        // calculate random number
        var randomCrystalNumber = Math.floor((Math.random() * 12) + 1);
        // assign the random number to the crystal
        $(this).attr("data-points", randomCrystalNumber);
        console.log("Crystal Number " + i + ": " + randomCrystalNumber);
    })
}


function youLose() {
    console.log("loser");
    losses += 1;
    $losses.text(losses);
    $message.text("Better luck next time! Want to play again?");
    gameOver = true;
}

function youWin() {
    console.log("winner");
    wins += 1;
    $wins.text(wins);
    $message.text("You won! Let's play again.");
    // startGame();
    gameOver = true;
}








startGame();



$crystals.on("click", function() {

    if (gameOver) {
        startGame();
    } else {
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
    }
});