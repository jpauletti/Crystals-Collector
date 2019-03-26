var game = {
    $crystals: $(".crystal"),
    $targetNumber: $("#target-number"),
    $score: $("#score"),
    $wins: $("#wins"),
    $losses: $("#losses"),
    $message: $("#message"),


    wins: 0,
    losses: 0,
    score: 0,
    targetNumber: 0,
    gameOver: false,
    
    startGame: function () {
        // get random target number
        game.targetNumber = Math.floor((Math.random() * 102) + 19);
        // display target number on page
        game.$targetNumber.text(game.targetNumber);
        console.log("game started");

        // reset score, gameOver, message, and each crystal's points
        game.setCrystalValues();
        game.score = 0;
        game.$score.text("0");
        game.$message.empty();
        game.gameOver = false;
    },

    setCrystalValues: function () {
        var valuesChosen = [];
        $.each(game.$crystals, function (i, crystal) {
            // calculate random number
            var randomCrystalNumber = Math.floor((Math.random() * 12) + 1);
            console.log("random #: " + randomCrystalNumber);

            // if number has already been chosen, choose a new number
            if (valuesChosen.indexOf(randomCrystalNumber) > -1) {
                console.log(valuesChosen.indexOf(randomCrystalNumber));
                randomCrystalNumber = Math.floor((Math.random() * 12) + 1);
                console.log("new random #: " + randomCrystalNumber);
            }


            // if number hasn't been chosen yet
            if (valuesChosen.indexOf(randomCrystalNumber) === -1) {
                // push number into array
                valuesChosen.push(randomCrystalNumber);
                console.log(valuesChosen);

                // assign the random number to the crystal
                $(this).attr("data-points", randomCrystalNumber);
                console.log("Crystal Number " + i + ": " + randomCrystalNumber);
            }

        })
    },

    youLose: function () {
        console.log("loser");
        game.losses += 1;
        game.$losses.text(game.losses);
        // message text and border color
        game.$message.text("Better luck next time! Click any crystal to play again.");
        game.$message.css("border-color", "red");
        game.gameOver = true;
    },

    youWin: function () {
        console.log("winner");
        game.wins += 1;
        game.$wins.text(game.wins);
        // message text and border color
        game.$message.text("You won! Click any crystal to play again.");
        game.$message.css("border-color", "green");
        game.gameOver = true;
    }
};


// start game

game.startGame();

game.$crystals.on("click", function() {

    if (game.gameOver) {
        // reset game on click when it's over
        game.startGame();
    } else {
        // grab points, add to score
        game.score += Number($(this).attr("data-points"));
        // update score on page
        game.$score.text(game.score);

        // decide if win or lose
        if (game.targetNumber === game.score) {
            game.youWin();
        } else if (game.targetNumber < game.score) {
            game.youLose();
        }
    }
});