var coinFlip;

for (i = 0; i < 10; i++){

    coinFlip = Math.round(Math.random()) == 1;


    if (coinFlip) {
        flipResult = "Tails";
    } else { 
        flipResult = "Heads";
    }

    window.console.log(flipResult);
}