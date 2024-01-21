var num1 = parseInt(window.prompt("Enter Number 1"), 10);
var num2 = parseInt(window.prompt("Enter Number 2"), 10);

window.console.log("Number 1: " + num1);
window.console.log("Number 2: " + num2);

var larger_num;
if (num1 > num2) {
    window.document.write(num1);
} else if (num2 > num1){
    window.document.write(num2);
} else if (num1 == num2){
    window.document.write("Numbers are equal: " + num1);
}
