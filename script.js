let rounds = 0;
let points = 0;
const result = {
	Tie: "Tie",
	Win: "Win",
	Lose: "Lose"
}
const choice = ['rock', 'paper', 'scissors'];
while (rounds<5){

    let userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

    while (!choice.includes(userChoice)){
        userChoice = prompt("Invalid choice.\nDo you choose rock, paper or scissors?").toLowerCase();
    }


    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } 

    let compare = function(choice1,choice2) {
        
        if (choice1 === choice2) {
            
            return "Tie";
        }
        
        else if (choice1 === "rock") {
            
            if (choice2 === "scissors") {
                return "Win";
            }
            else {
                return "Lose";
            }
        }
        
        else if (choice1 === "paper") {
            
            if (choice2 === "rock") {
                return "Win";
            }
            else {
                return "Lose";
            }
                
        }
        
        else if (choice1 === "scissors") {
            
            if (choice2 === "rock") {
                return "Lose";
            }
            else {
                return "Win";
            }
        }
        
        
        }

        
    //console.log("Computer chose: " + computerChoice);
    if (compare(userChoice,computerChoice) === result.Win){
        points+=1;
        alert("Computer chose: " + computerChoice + '\n' + 'You win, nice job!');
    } else if (compare(userChoice,computerChoice) === result.Tie){
        alert("Computer chose: " + computerChoice + '\n' + 'It\'s a tie!');
    } else {
        alert("Computer chose: " + computerChoice + '\n' + 'You lose, better luck next time!');
    }
    rounds+=1;
}
alert('Your point is: ' + points + '\n' + 'Thanks for playing!');

