let section = document.createElement("section");

let h1 = document.createElement("h1");
h1.innerHTML = "DOM Calculator";
h1.id = "title";

let p = document.createElement("p");
p.innerHTML = "Welcome !";
p.id = "description";

let container = createClass("container");
let calculator = createClass("calculator");
let display = createClass("display");
let display_1 = createClass2("display_1","0");
let display_2 = createClass2("display_2","0");
let temp_Result = createClass("temp-result");


let all_Button = createClass("all_button");
let btnC = createBtnOp("all-clear","clear","C");
let btnCE = createBtnOp("last-entity-clear","temp-clear","CE");
let btnMod = createBtnOp("operation","Modulus","%");
let btnX = createBtnOp("operation","multiply","x");
let btn7 = createBtn("number","7");
let btn8 = createBtn("number","8");
let btn9 = createBtn("number","9");
let btnSlash = createBtnOp("operation","divide","/");
let btn4 = createBtn("number","4");
let btn5 = createBtn("number","5");
let btn6 = createBtn("number","6");
let btnMinus = createBtnOp("operation","subtract","-");
let btn1 = createBtn("number","1");
let btn2 = createBtn("number","2");
let btn3 = createBtn("number","3");
let btnAdd = createBtnOp("operation","add","+");
let btn0 = createBtn("number","0");
let btnDot = createBtn2("number","dot",".");
let btnEqual = createBtnOp2("equal","btnEqual","equal","=");

display.append(display_1,display_2,temp_Result);
all_Button.append(
    btnC,btnCE,btnMod,btnX,
    btn7,btn8,btn9,btnSlash,
    btn4,btn5,btn6,btnMinus,
    btn1,btn2,btn3,btnAdd,
    btn0,btnDot,btnEqual);

calculator.append(display,all_Button);
container.append(calculator);
section.append(h1,p,container);
document.body.append(section);


function createClass(clsName) {
    let ele = document.createElement("div");
    ele.className = clsName;
    return ele;
};

function createClass2(clsName,value) {
    let ele = document.createElement("div");
    ele.className = clsName;
    ele.innerHTML = value;
    return ele;
};

function createBtn(clsName,value){
    let ele = document.createElement("button");
    ele.type = "button";
    ele.classList.add("button",clsName);
    ele.innerHTML= value;
    ele.id = value;
    return ele;
};

function createBtnOp(clsName,idName,value){
    let ele = document.createElement("button");
    ele.type = "button";
    ele.classList.add("button",clsName);
    ele.innerHTML= value;
    ele.id = idName;
    return ele;
};

function createBtn2(clsName2,clsName3,value){
    let ele = document.createElement("button");
    ele.type = "button";
    ele.classList.add("button",clsName2,clsName3);
    ele.innerHTML= value;
    ele.id = value;
    return ele;
};

function createBtnOp2(clsName2,clsName3,idName,value){
    let ele = document.createElement("button");
    ele.type = "button";
    ele.classList.add("button",clsName2,clsName3);
    ele.innerHTML= value;
    ele.id = idName;
    return ele;
};




const display1El = document.querySelector('.display_1');
const display2El = document.querySelector('.display_2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector(".last-entity-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.forEach((number) => {
    number.addEventListener("click", (e) => {
      if (e.target.innerText === "." && !haveDot) {
        haveDot = true;
      } else if (e.target.innerText === "." && haveDot) {
        return;
      }
      dis2Num += e.target.innerText;
      display2El.innerText = dis2Num;
    });
});

operationEl.forEach((operation) => {
    operation.addEventListener("click",(e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        
    });
});

function clearVar (name = "") {
    dis1Num += dis2Num + " " + name + " ";
    display1El.innerText = dis1Num;
    display2El.innerText = "";
    dis2Num = "";
    tempResultEl.innerText = result;
};


function mathOperation() {
    if (lastOperation === "x") {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

equalEl.addEventListener("click", ()=>{
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = "";
    dis2Num = result;
    dis1Num = "";
});

clearAllEl.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    display1El.innerText = "";
    display2El.innerText = "";
    result = "";
    tempResultEl.innerText = "";
});

clearLastEl.addEventListener("click", () => {
    display2El.innerText = "";
    dis2Num = "";
});

window.addEventListener("keydown",(e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ) {
        clickButtonEl(e.key);
    } else if (e.key ==="+" || e.key === "-" ||e.key === "/" || e.key === "%"){
        clickOperation(e.key);
    } else if (e.key === "*") {
        clickOperation("x");
    } else if (e.key === "Enter" || e.key ==="=") {
        clickEqual();
    } else {
        alert("enter only numbers");
    }

});

function clickButtonEl(key) {
    numbersEl.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    });
};

function clickOperation(key) {
    operationEl.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click();
        }
    });
};

function clickEqual() {
    equalEl.click();
};