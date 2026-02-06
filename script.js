
function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    if(b === 0){
        return "Division by Zero Error!";
    }
    return a / b;
}

function squareRoot(a){
    return Math.sqrt(a);
}


function calculatePercentage(a, b) {
    return (a / 100) * b;
}


let currentTotal = "";
let operand1 = "";
let operand2 = "";
let operator = "";

const miniDisplay = document.querySelector(".mini-display");
const maxDisplay = document.querySelector(".max-display");




const userInput = document.querySelectorAll('.btn');
userInput.forEach((button) => {
    button.addEventListener("click", () => {
        miniDisplay.textContent += button.textContent;
        maxDisplay.textContent = button.textContent;
        console.log(button.textContent);
    })
} )

console.log(addition(5, 7));
console.log(subtraction(9, 2));
console.log(multiplication(5, 5));
console.log(division(1, 0));
console.log(division(20, 2));
console.log(squareRoot(25)) ;
console.log(calculatePercentage(20, 100));