const calcResultNum = document.querySelector("#calcResultNum")
const buttondel = document.querySelector("#buttondel");
const buttonClear = document.querySelector("#buttonClear");
const buttonPlus = document.querySelector("#buttonPlus");
const buttonMinus = document.querySelector("#buttonMinus");
const buttonMultiplication = document.querySelector("#buttonMultiplication");
const buttonDivision = document.querySelector("#buttonDivision");
const buttonEqually = document.querySelector("#buttonEqually");


const buttonOne = document.querySelector("#buttonOne");
const buttonTwo = document.querySelector("#buttonTwo");
const buttonThree = document.querySelector("#buttonThree");
const buttonFour = document.querySelector("#buttonFour");
const buttonFive = document.querySelector("#buttonFive");
const buttonSix = document.querySelector("#buttonSix");
const buttonSeven = document.querySelector("#buttonSeven");
const buttonEight = document.querySelector("#buttonEight");
const buttonNine = document.querySelector("#buttonNine");
const buttonZero = document.querySelector("#buttonZero");
const buttonDot = document.querySelector("#buttonDot");

let checknumbers = true;
let numberOperations = 0;
let result;
let currentOperation = undefined;
let blockDot = false;
let SecondNumber = 0;

buttondel.onclick = function() {checknumbers = true;if(!calcResultNum.innerText.includes(".")){blockDot = false}; if (!checkingZeroErase()) {calcResultNum.innerText = calcResultNum.innerText.slice(0, -1)} else {calcResultNum.innerText = 0}}
buttonClear.onclick = () => {checknumbers = true;calcResultNum.innerText = "0";blockDot = false;}

buttonPlus.onclick = function(){if (checknumbers) {
    numberOperations = Number(calcResultNum.innerText)
    calcResultNum.innerText = "0";
    checknumbers = false;
    currentOperation = "Plus"
    blockDot = false;
}}
buttonMinus.onclick = function(){ 
    if(calcResultNum.innerText === "0"){calcResultNum.innerText = "-"; return;}   
    if (checknumbers) {
    numberOperations = Number(calcResultNum.innerText)
    calcResultNum.innerText = "0";
    checknumbers = false;
    currentOperation = "Minus"
    blockDot = false;
}}
buttonMultiplication.onclick = function(){if (checknumbers) {
    numberOperations = Number(calcResultNum.innerText)
    calcResultNum.innerText = "0";
    checknumbers = false;
    currentOperation = "Multiplication";
    blockDot = false;
}}
buttonDivision.onclick = function(){if (checknumbers) {
    numberOperations = Number(calcResultNum.innerText)
    calcResultNum.innerText = "0";
    checknumbers = false;
    currentOperation = "Division";
    blockDot = false;
}}


buttonEqually.onclick = function(){

if(!checknumbers && currentOperation == "Plus"){
   SecondNumber = Number(calcResultNum.innerText);
   result = numberOperations + SecondNumber
   calcResultNum.innerText = result
   checknumbers = true;
   blockDot = false;
} else if(!checknumbers && currentOperation == "Minus") {
    SecondNumber = Number(calcResultNum.innerText);
    result = numberOperations - SecondNumber
   calcResultNum.innerText = result
   checknumbers = true;
} else if(!checknumbers && currentOperation == "Multiplication") {
    SecondNumber = Number(calcResultNum.innerText);
    result = numberOperations * SecondNumber;
   calcResultNum.innerText = result
   checknumbers = true;
} else if(!checknumbers && currentOperation == "Division") {
     SecondNumber = Number(calcResultNum.innerText);
    result = numberOperations / SecondNumber;
      calcResultNum.innerText = result
    checknumbers = true;
}}


buttonOne.onclick = function() { if (!checkingZero()) {calcResultNum.innerText += "1"} else {calcResultNum.innerText = "1"}}
buttonTwo.onclick = function() { if (!checkingZero()) {calcResultNum.innerText += "2"} else {calcResultNum.innerText = "2"}}
buttonThree.onclick = function() { if (!checkingZero()) {calcResultNum.innerText += "3"} else {calcResultNum.innerText = "3"}}
buttonFour.onclick = function() { if (!checkingZero()) {calcResultNum.innerText += "4"} else {calcResultNum.innerText = "4"}}
buttonFive.onclick = function() { if (!checkingZero()) {calcResultNum.innerText += "5"} else {calcResultNum.innerText = "5"}}
buttonSix.onclick = function() { if (!checkingZero()) {calcResultNum.innerText += "6"} else {calcResultNum.innerText = "6"}}
buttonSeven.onclick = function() { if (!checkingZero()) {calcResultNum.innerText += "7"} else {calcResultNum.innerText = "7"}}
buttonEight.onclick = function() { if (!checkingZero()) {calcResultNum.innerText += "8"} else {calcResultNum.innerText = "8"}}
buttonNine.onclick = function() { if (!checkingZero()) {calcResultNum.innerText += "9"} else {calcResultNum.innerText = "9"}}
buttonZero.onclick = function() { if (!checkingZero()) {calcResultNum.innerText += "0"}}
buttonDot.onclick = function() { if(!blockDot){calcResultNum.innerText += "."; blockDot = true;}}




function checkingZeroErase(){
    if (calcResultNum.innerText.length == 1) {
        return true
    } else {
        return false
    }
}
function checkingZero(){
    if (calcResultNum.innerText === "0") {
        return true
    } else {
        return false
    }
}













console.log(buttonOne)
console.log(buttonTwo)
console.log(buttonThree)
console.log(buttonFour)
console.log(buttonFive)
console.log(buttonSix)
console.log(buttonSeven)
console.log(buttonEight)
console.log(buttonNine)
console.log(buttonZero)
console.log(buttonPlus)
console.log(buttonMinus)


