function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

var roundCounter = 1;

function playRound(player) {
    var computer = getComputerChoice();

    player = player.toLowerCase();

    if (player == "rock") {
        switch (computer) {
            case "rock":
                showResult("Draw!");
                break;

            case "scissors":
                showResult("You win!");
                break;

            case "paper":
                showResult("You lose!");
                break;

            default:
                showResult("Invalid choice.");
                break;
        }
    }

    if (player == "paper") {
        switch(computer) {
            case "rock":
                showResult("You win!");
                break;

            case "scissors":
                showResult("You lose!");
                break;

            case "paper":
                showResult("Draw!");
                break;

            default:
                showResult("Invalid choice.");
                break;
        }
    }

    if (player == "scissors") {
        switch(computer) {
            case "rock":
                showResult("You lose!");
                break;

            case "scissors":
                showResult("Draw!");
                break;

            case "paper":
                showResult("You win!");
                break;

            default:
                showResult("Invalid choice.");
                break;
        }
    }

    function showResult(result) {
        var resultElement = document.getElementById("result");
        resultElement.textContent = result;
    }
}

function game() {
    var maxRounds = 5;

    var rockButton = document.getElementById("rockButton");
    rockButton.addEventListener("click", function() {
        if (roundCounter <= maxRounds) {
            playRound("rock");
        }
        checkGameOver();
    });

    var paperButton = document.getElementById("paperButton");
    paperButton.addEventListener("click", function() {
        if (roundCounter <= maxRounds) {
            playRound("paper");
        }
        checkGameOver();
    });

    var scissorsButton = document.getElementById("scissorsButton");
    scissorsButton.addEventListener("click", function() {
        if (roundCounter <= maxRounds) {
            playRound("scissors");
        }
        checkGameOver();
    });

    function checkGameOver() {
        roundCounter++

        if (roundCounter > maxRounds) {
            var resultElement = document.getElementById("result");
            resultElement.textContent = "Game over! Maximum rounds reached.";
        } else {
            var roundNumberElement = document.getElementById("roundNumber");
            roundNumberElement.textContent = roundCounter;
        }
    }
}

game();