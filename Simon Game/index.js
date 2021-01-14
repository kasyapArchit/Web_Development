// Variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var levelCompleted = 1;

// Functions
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    level++;
    return randomNumber;
}

function playSound(colour) {
    var audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
}

function animatePress(colour) {
    $("#" + colour).addClass("pressed");

    setTimeout(function () {
        $("#" + colour).removeClass("pressed");
    }, 100);
}

function restartGame() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    levelCompleted = 1;

    $("h1").html("Game Over, Press Any Key to Restart");
}

function checkAnswer() {
    if (gamePattern.length === userClickedPattern.length) {
        var flag = 1;
        for (var i = 0; i < gamePattern.length; i++) {
            if (gamePattern[i] !== userClickedPattern[i]) {
                console.log("Failure");
                flag = 0;
            }
        }

        if (flag === 1) {
            console.log("Success");
        } else {
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);
            restartGame();
        }

        userClickedPattern.length = 0;
        levelCompleted = 1;
    }
}

// Features
$(document).keypress(function () {
    if (levelCompleted !== 1) {
        alert("Win the level to proceed!!");
    } else {
        var randomChosenColour = buttonColours[nextSequence()];
        gamePattern.push(randomChosenColour);

        $("h1").html("Level " + level);
        $("#" + randomChosenColour).addClass("pressed");
        playSound(randomChosenColour);
        setTimeout(function () {
            $("#" + randomChosenColour).removeClass("pressed");
        }, 100);

        levelCompleted = 0;
    }
});


$(".btn").click(function () {
    if (levelCompleted === 1) {
        alert("Press A key to proceed!!");
    } else {
        var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);

        animatePress(userChosenColour);
        playSound(userChosenColour);

        checkAnswer();
    }
});