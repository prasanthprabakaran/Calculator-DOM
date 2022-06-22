let section = document.createElement("section");

let container = createClass("container");
let calculator = createClass("calculator");
let display = createClass("display");
let display_1 = createClass2("display_1","0");
let display_2 = createClass2("display_2","0");
let temp_Result = createClass("temp-result");


let all_Button = createClass("all_button");
let btnC = createBtn("all-clear","C");
let btnCE = createBtn("last-entity-clear","CE");
let btnDot = createBtn("operation",".");
let btnX = createBtn("operation","X");
let btn7 = createBtn("number","7");
let btn8 = createBtn("number","8");
let btn9 = createBtn("number","9");
let btnSlash = createBtn("operation","/");
let btn4 = createBtn("number","4");
let btn5 = createBtn("number","5");
let btn6 = createBtn("number","6");
let btnMinus = createBtn("operation","-");
let btn1 = createBtn("number","1");
let btn2 = createBtn("number","2");
let btn3 = createBtn("number","3");
let btnAdd = createBtn("operation","+");
let btn0 = createBtn("number","0");
let btn00 = createBtn("number","00");
let btnEqual = createBtn2("operation","btnEqual","=");

display.append(display_1,display_2,temp_Result);
all_Button.append(
    btnC,btnCE,btnDot,btnX,
    btn7,btn8,btn9,btnSlash,
    btn4,btn5,btn6,btnMinus,
    btn1,btn2,btn3,btnAdd,
    btn0,btn00,btnEqual);

calculator.append(display,all_Button);
container.append(calculator);
section.append(container);
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
    let ele = document.createElement("div");
    ele.classList.add("button",clsName);
    ele.innerHTML= value;
    return ele;
};

function createBtn2(clsName2,clsName3,value){
    let ele = document.createElement("div");
    ele.classList.add("button",clsName2,clsName3);
    ele.innerHTML= value;
    return ele;
};


