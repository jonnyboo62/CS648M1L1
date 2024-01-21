


var coinFlip;
var flipResult;
do{

    coinFlip = Math.round(Math.random()) == 1;


    if (coinFlip) {
        flipResult = "Tails";
    } else { 
        flipResult = "Heads";
    }
    window.console.log(flipResult);

} while (flipResult != "Tails")
