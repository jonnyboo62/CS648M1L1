for (var i = 1; i <= 100; i++) {
    var divisable_3 = i % 3
    var divisable_5 = i % 5
    if (divisable_3 == 0 && divisable_5 == 0){
        window.document.write("Marco! Polo!<br>")
    } 
    else if (divisable_3 == 0){
        window.document.write("Marco<br>");
    }
    else if (divisable_5 == 0){
        window.document.write("Polo!<br>");
    } else {
        window.document.write(i + "<br>");
    }
}