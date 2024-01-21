var coinFlip = Math.round(Math.random()) == 1;

var choice = window.prompt("Heads or Tails").toLowerCase();

var flipResult;

if (coinFlip) {
    flipResult = "tails";
} else { 
    flipResult = "heads";
}

window.console.log("Choice: " + choice);
window.console.log("Flip Result: " + flipResult);


if  (choice == "heads") {
    if (flipResult == "heads"){
        window.alert("The flip was heads and you chose heads...you win!");
    } else if (flipResult == "tails") {
        window.alert("The flip was tails but you chose heads...you lose!");
    }
} else if (choice == "tails") {
    if (flipResult == "heads"){
        window.alert("The flip was heads and you chose tails...you lose!");
    } else if (flipResult == "tails") {
        window.alert("The flip was tails and you chose tails...you win!");
    }
}