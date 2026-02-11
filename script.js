
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

function handleReset(){
    operand1 = "";
    operand2 = "";
    operator = "";
    currentTotal = "";
    miniDisplay.textContent = "";
    maxDisplay.textContent = "";
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
        const value = button.textContent;
        
        if(value === "AC"){
            handleReset();
        }

        if(value === "C"){
            if(operand2 !== ""){
                operand2 = operand2.slice(0, -1);
                maxDisplay.textContent = operand2;
            } else if (operator !== "") {
                operator = "";
                miniDisplay.textContent = operand1;
            }
            else{
                operand1 = operand1.slice(0, -1);
                maxDisplay.textContent = operand1;
            }
        }

        if(value === "."){
            if(operator === "") {
                if(!operand1.includes(".")){
                    if(operand1 === ""){
                        operand1 = "0.";
                    }else{
                        operand1 += ".";
                    }
                }
                maxDisplay.textContent = operand1;
            }
            else{
                if(!operand2.includes(".")){
                    if(operand2 === ""){
                        operand2 = "0.";
                    }else{
                        operand2 += ".";
                    }
                    
                }
                maxDisplay.textContent = operand2;
            }
        }

        if(!isNaN(Number(value))){
            if(operator === ""){
                operand1 += value;
                maxDisplay.textContent = operand1;
            }
            else{
                operand2 += value;
                maxDisplay.textContent = operand2;
            }
        } 

        if(value === "+" || value === "-" || value === "×" || value === "÷" || value === "%"){
            if(operator === ""){
                operator = value;
            }
            miniDisplay.textContent = `${operand1} ${operator}`;
        }

        console.log("operand1:", operand1);
        console.log("operand2:", operand2);
        console.log("operator:", operator);
        console.log("pressed:", value);

        

        if(value === "="){
            let num1 = Number(operand1);
            let num2 = Number(operand2);
            let result;

            switch(operator){
                case "+": 
                    result = addition(num1, num2);
                    break;
                case "-": 
                    result = subtraction(num1, num2);
                    break;
                case "×": 
                    result = multiplication(num1, num2);
                    break;
                case "÷": 
                    result = division(num1, num2);
                    break;
                case "%": 
                    result = calculatePercentage(num1, num2);
                    break;
                default:

            }
            currentTotal = parseFloat(result.toFixed(10));
            miniDisplay.textContent = `${operand1} ${operator} ${operand2} = `;
            maxDisplay.textContent = result;
            console.log(result);
            operand1 = String(result);
            operand2 = "";
            operator = "";
        }
    })
} )

// console.log(addition(5, 7));
// console.log(subtraction(9, 2));
// console.log(multiplication(5, 5));
// console.log(division(1, 0));
// console.log(division(20, 2));
// console.log(squareRoot(25)) ;
// console.log(calculatePercentage(20, 100));