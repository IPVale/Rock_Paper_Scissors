alert ("Hi!! Are you ready?");

var namePlayer= window.prompt("Insert your name");

document.getElementById("title").innerHTML= "Welcome " + namePlayer;

var choicePlayer

function clickRock(){
    choicePlayer = "rock";
    alert (namePlayer+ " you chose "+ choicePlayer);
}
function clickPaper(){
    choicePlayer = "paper";
    alert (namePlayer+ " you chose "+ choicePlayer);
}
function clickScissors(){
    choicePlayer = "scissors";
    alert (namePlayer+ " you chose "+ choicePlayer);
}

function ruling(){
    document.getElementById("rock").style.display= 'none';
    document.getElementById("paper").style.display= 'none';
    document.getElementById("scissors").style.display= 'none';
    document.getElementById("button").style.display= 'none';

    var choiceComputer;
    if (choicePlayer == "rock"){
        choiceComputer = "paper";
    }
    if (choicePlayer == "paper"){
        choiceComputer = "scissors";
    }
    if (choicePlayer == "scissors"){
        choiceComputer = "rock";
    }

    document.getElementById("title").innerHTML= "I'm sorry " + namePlayer + " you lost the game"
    document.getElementById("information").innerHTML= "This game is rigged! the computer choice " + choiceComputer + " your choice has been " + choicePlayer;

}