function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound (player, computer) {
    
    player = player.toLowerCase();

    if (player == "rock") {
        switch(computer) {
            case "rock":
                return "Draw!";

            case "scissors":
                return "You win!";

            case "paper":
                return "You lose!";

            default:
                return "Invalid choice.";
        }
    }

    if (player == "paper") {
        switch(computer) {
            case "rock":
                return "You win!";

            case "scissors":
                return "You lose!";

            case "paper":
                return "Draw!";

            default:
                return "Invalid choice.";
        }
    }

    if (player == "scissors") {
        switch(computer) {
            case "rock":
                return "You lose!";

            case "scissors":
                return "Draw!";

            case "paper":
                return "You win!";

            default:
                return "Invalid choice.";
        }
    }

}

var roundNumber = 1;

function game() {
    var playerScore = 0;
    var computerScore = 0;
    for (var i = 0; i < 5; i++) {
        var playerChoice = prompt("Enter your choice.");
        var computerChoice = getComputerChoice();

        var result = playRound(playerChoice, computerChoice);
        console.log("Result: ", result)

        if (result.includes("win")) {
            playerScore++;
          } else if (result.includes("lose")) {
            computerScore++;
          }

        roundNumber ++
    }

    console.log("Player Score: ", playerScore);
    console.log("Computer Score: ", computerScore);
}

game();