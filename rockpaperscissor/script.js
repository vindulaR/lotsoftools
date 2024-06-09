const score = {
    ties: 0,
    wins: 0,
    losses: 0
};

// Genarate random value
function randomGenerator(){
    const random_number = Math.floor(Math.random()*3)
    let computerSelected=''
    if (random_number === 0) {
        computerSelected = "Rock";
    }
    else if (random_number === 1) {
        computerSelected = "Paper";
    }
    else if (random_number === 2) {
        computerSelected = "Scissor";
    }

    return computerSelected;
};

//Your move
function yourSelection(make) {
    const computerSelected = randomGenerator();
    //console.log("Your selection " + make);
    //console.log("Computer selected " + computerSelected);
    if (computerSelected == make){
        score.ties += 1
        alert(`You picked ${make} and Computer picked ${computerSelected}. Game Tied!\n`+ `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    }
    else if (computerSelected == "Paper" && make == "Rock" ){
        score.losses += 1
        alert(`You picked ${make} and Computer picked ${computerSelected}. Computer Won!\n`+ `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    }
    else if (computerSelected == "Scissor" && make == "Paper" ){
        score.losses += 1
        alert(`You picked ${make} and Computer picked ${computerSelected}. Computer Won!\n`+ `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    }
    else if (computerSelected == "Rock" && make == "Scissor" ){
        score.losses += 1
        alert(`You picked ${make} and Computer picked ${computerSelected}. Computer Won!\n`+ `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    }
    else {
        score.wins += 1
        alert(`You picked ${make} and Computer picked ${computerSelected}. You Won!\n`+ `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    }
};

//Reset Score
function resetScore(){
    score.losses = 0;
    score.wins = 0;
    score.ties = 0;
};