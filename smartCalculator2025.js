console.log("Welcome !!");
const sum = (a, b) => {
    return a+b;
}

/* 
    Braket-multiplication problem
    Backspace problem gor function
*/
const pi = 3.14159265358979323846264;
const e = 2.71828182845904523536028;
console.log(Math.exp(1));
console.log(`actual  : ${sum(2,4)}`);

const isDigit = (str) => {
    return str >= "0" && str <= "9";
}
const fact = (n) => {
    if(n == 1 || n == 0) return 1;
    return n*fact(n-1);
}

console.log(`testint : ${eval("fact((5))")}`);

let expression = "";
let userDisplay = "";
let point = false;
let operatorDef = false;
let result;
let advCalcOn = false;

const advBtnCtrl = (advCalcOn) => {
    if(advCalcOn) {
        let shrinkout = document.querySelector(".keyboard").style;
        shrinkout.translate = "0 0";
        shrinkout.scale = "1";
        shrinkout.transition = "0.3s";
    } else {
        let shrinkin = document.querySelector(".keyboard").style; //.animation = "shrinkOut 2s ease-in-out 1 forwards";
        shrinkin.translate = "4vw 6.5vw";
        shrinkin.scale = "0.795 0.71";
        shrinkin.transition = "0.3s";
    }
}

btns = document.querySelectorAll(".button");

btns.forEach((btn) => {
    
    document.querySelector("#optAdvCalc").addEventListener("click", () => {
        advBtnCtrl(advCalcOn);
        if(advCalcOn) advCalcOn = false;
        else advCalcOn = true;
    });
    
    btn.addEventListener("click", () => {
        let equalPressed = false;
        console.log(btn.id);
        if(btn.id === "btn0") {
            expression += "0"; userDisplay += "0"; operatorDef = false;
        }
        else if(btn.id === "btn1") {
            expression += "1"; userDisplay += "1"; operatorDef = false;
        }
        else if(btn.id === "btn2") {
            expression += "2"; userDisplay += "2"; operatorDef = false;
        }
        else if(btn.id === "btn3") {
            expression += "3"; userDisplay += "3";operatorDef = false;
        }
        else if(btn.id === "btn4") {
            expression += "4"; userDisplay += "4"; operatorDef = false;
        }
        else if(btn.id === "btn5") {
            expression += "5"; userDisplay += "5"; operatorDef = false;
        }
        else if(btn.id === "btn6") {
            expression += "6"; userDisplay += "6"; operatorDef = false;
        }
        else if(btn.id === "btn7") {
            expression += "7"; userDisplay += "7"; operatorDef = false;
        }
        else if(btn.id === "btn8") {
            expression += "8"; userDisplay += "8"; operatorDef = false;
        }
        else if(btn.id === "btn9") {
            expression += "9"; userDisplay += "9"; operatorDef = false;
        }
        else if(btn.id === "point" && !point) {
            expression += "."; userDisplay += ".";
            point = true;
            operatorDef = false;
        }
        else if(btn.id === "devide") {
            if(operatorDef) {
                expression = expression.substring(0, expression.length-1);
                userDisplay = userDisplay.substring(0, userDisplay.length-1);
            }
            expression += "/"; userDisplay += "/"
            operatorDef = true;
            point = false;
        }
        else if(btn.id === "multiplication") {
            if(operatorDef) {
                expression = expression.substring(0, expression.length-1);
                userDisplay = userDisplay.substring(0, userDisplay.length-1);
            }
            expression += "*"; userDisplay += "×";
            operatorDef = true;
            point = false;
        }
        else if(btn.id === "subtraction") {
            if(operatorDef) {
                expression = expression.substring(0, expression.length-1);
                userDisplay = userDisplay.substring(0, userDisplay.length-1);
            }
            expression += "-"; userDisplay += "-";
            operatorDef = true;
            point = false;
        }
        else if(btn.id === "addition") {
            if(operatorDef) {
                expression = expression.substring(0, expression.length-1);
                userDisplay = userDisplay.substring(0, userDisplay.length-1);
            }
            expression += "+"; userDisplay += "+";
            operatorDef = true;
            point = false;
        }

        else if(btn.id === "sin") {
            expression += "Math.sin("; userDisplay += "sin(";
        }
        else if(btn.id === "cosin") {
            expression += "Math.cos("; userDisplay += "cos(";
        }
        else if(btn.id === "tangent") {
            expression += "Math.tan("; userDisplay += "tan(";
        }
        else if(btn.id === "log") {
            expression += "Math.log10("; userDisplay += "log(";
        }
        else if(btn.id === "ln") {
            expression += "Math.log("; userDisplay += "ln(";
        }

        else if(btn.id === "openBraket") {
            let lastEl = expression[expression.length-1];
            if(isDigit(lastEl) || lastEl == ")") expression += "*";
            expression += "("; userDisplay += "(";
        }
        else if(btn.id === "closeBraket") {
            expression += ")"; userDisplay += ")";
        }

        else if(btn.id === "factorial") {
            for(let i=expression.length-1; i>=0; i--) {
                if(expression[i] == "+" || expression[i] == "-" || expression[i] == "*" || expression[i] == "/") {
                    expression = expression.substring(0, i+1) + "fact(" + expression.substring(i+1) + ")";
                } 
                else if(expression[i] == "(") expression = expression.substring(0, i) + "fact(" + expression.substring(i) +")";
                else expression = "fact(" + expression + ")";
                break;
            }
            userDisplay += "!";
        }
        else if(btn.id === "power") {
            expression += "**"; userDisplay += "^";
        }
        else if(btn.id === "sqRoot") {
            expression += "Math.sqrt("; userDisplay += "√(";
        }
        else if(btn.id === "pi") {
            expression += pi; userDisplay += "π";
        }
        else if(btn.id === "e") {
            expression += e; userDisplay += "e";
        }

        else if(btn.id === "backspace") {
            // if(isDigit(expression[expression.lenth-1])) 
            expression = expression.substring(0, expression.length-1);
            userDisplay = userDisplay.substring(0, userDisplay.length-1);
            if(point) point = false;
            if(operatorDef) operatorDef = false;
            let lastEl = expression[expression.length-1];
            if(lastEl === "/" || lastEl === "*" || lastEl === "-" || lastEl === "+") operatorDef = true;
        }
        else if(btn.id === "allClearbtn") {
            expression = ""; userDisplay = "";
            result = "";
            point = false;
            operatorDef = false;

        }
        else if(btn.id === "equal") {
            expression = eval(expression).toString();
            userDisplay = eval(expression).toString();
            result = "";
            document.querySelector(".ansDisplay").innerText = result;
            equalPressed = true;
        }
        // else if(btn.id === "percent") expression += "9";
        console.log(`expression : ${expression}`);
        if(userDisplay.length > 14) document.querySelector(".userDisplay").style.fontSize = "2.6vw";
        else document.querySelector(".userDisplay").style.fontSize = "4vw";
        document.querySelector(".userDisplay").innerText = userDisplay;

        try {
            if(operatorDef) result = eval(expression.substring(0, expression.length-1));
            else result = eval(expression);
            if(!equalPressed) {
              if(!result && result != 0) result = "";
              console.log(`result : ${result}`);
              document.querySelector(".ansDisplay").innerText = result; 
            }
        } catch(error) {
            console.log("An error occurred :", error); result = "";
            document.querySelector(".ansDisplay").innerText = result;
        }

    })
})