let flag = 0;
function isNumber(char) {
    return /^\d$/.test(char);
}

document.getElementById("answer").readOnly = true;
let screen = document.getElementById("answer");
buttons = document.querySelectorAll("button");
let screenValue = "";
let maxItem = 6;
for (item of buttons) {
    item.addEventListener("click", (e) => ){
        buttonsText = e.target.innerText;
        if (buttonText == "X") {
            if (flag == 1) {
                flag = 0;
            }
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if 
    }
