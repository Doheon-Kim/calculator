// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const numBtn_0 = document.querySelector("#numBtn_0"),
      numBtn_1 = document.querySelector("#numBtn_1"),
      numBtn_2 = document.querySelector("#numBtn_2"),
      numBtn_3 = document.querySelector("#numBtn_3"),
      numBtn_4 = document.querySelector("#numBtn_4"),
      numBtn_5 = document.querySelector("#numBtn_5"),
      numBtn_6 = document.querySelector("#numBtn_6"),
      numBtn_7 = document.querySelector("#numBtn_7"),
      numBtn_8 = document.querySelector("#numBtn_8"),
      numBtn_9 = document.querySelector("#numBtn_9"),
      addBtn = document.querySelector("#addBtn"),
      subBtn = document.querySelector("#subBtn"),
      multBtn = document.querySelector("#multBtn"),
      divBtn = document.querySelector("#divBtn"),
      equalBtn = document.querySelector("#equalBtn"),
      calResult = document.querySelector("#calResult"),
      c = document.querySelector("#c"),
      historyBox = document.querySelector("#historyBox");
let num;
let numSave = "0",
    resultSave = 0;
let addBool = 0,
    subBool = 0,
    multBool = 0,
    divBool = 0;
let equalBool = 0;    
let numBool = 0;

calResult.innerHTML = "0";

function num0() {
  historyBox.innerHTML = historyBox.innerHTML + "0";
  num = calResult.innerHTML;
  if (numBool == 0) {
      calResult.innerHTML = "0";
      numSave = "0";
      numBool = 1;
  } else {
      numSave = num + "0";
      calResult.innerHTML = numSave;
  }
}

function num1() {
  historyBox.innerHTML = historyBox.innerHTML + "1";
  num = calResult.innerHTML;
  if (numBool == 0) {
      calResult.innerHTML = "1";
      numSave = "1";
      numBool = 1;
  } else {
      numSave = num + "1";
      calResult.innerHTML = numSave;
  }
}

function num2() {
  historyBox.innerHTML = historyBox.innerHTML + "2";
  num = calResult.innerHTML;
  if (numBool == 0) {
      calResult.innerHTML = "2";
      numSave = "2";
      numBool = 1;
  } else {
      numSave = num + "2";
      calResult.innerHTML = numSave;
  }
}

function num3() {
  historyBox.innerHTML = historyBox.innerHTML + "3";
  num = calResult.innerHTML;
  if (numBool == 0) {
      calResult.innerHTML = "3";
      numSave = "3";
      numBool = 1;
  } else {
      numSave = num + "3";
      calResult.innerHTML = numSave;
  }
}

function num4() {
  historyBox.innerHTML = historyBox.innerHTML + "4";
  num = calResult.innerHTML;
  if (numBool == 0) {
      calResult.innerHTML = "4";
      numSave = "4";
      numBool = 1;
  } else {
      numSave = num + "4";
      calResult.innerHTML = numSave;
  }
}

function num5() {
  historyBox.innerHTML = historyBox.innerHTML + "5";
  num = calResult.innerHTML;
  if (numBool == 0) {
      calResult.innerHTML = "5";
      numSave = "5";
      numBool = 1;
  } else {
      numSave = num + "5";
      calResult.innerHTML = numSave;
  }
}

function num6() {
  historyBox.innerHTML = historyBox.innerHTML + "6";
  num = calResult.innerHTML;
  if (numBool == 0) {
      calResult.innerHTML = "6";
      numSave = "6";
      numBool = 1;
  } else {
      numSave = num + "6";
      calResult.innerHTML = numSave;
  }
}

function num7() {
  historyBox.innerHTML = historyBox.innerHTML + "7";
  num = calResult.innerHTML;
  if (numBool == 0) {
      calResult.innerHTML = "7";
      numSave = "7";
      numBool = 1;
  } else {
      numSave = num + "7";
      calResult.innerHTML = numSave;
  }
}

function num8() {
  historyBox.innerHTML = historyBox.innerHTML + "8";
  num = calResult.innerHTML;
  if (numBool == 0) {
      calResult.innerHTML = "8";
      numSave = "8";
      numBool = 1;
  } else {
      numSave = num + "8";
      calResult.innerHTML = numSave;
  }
}

function num9() {
  historyBox.innerHTML = historyBox.innerHTML + "9";
  num = calResult.innerHTML;
  if (numBool == 0) {
      calResult.innerHTML = "9";
      numSave = "9";
      numBool = 1;
  } else {
      numSave = num + "9";
      calResult.innerHTML = numSave;
  }
}

function add() {
  historyBox.innerHTML = historyBox.innerHTML + "+";
  if (addBool == 1) {
      resultSave += Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 1;
      subBool = 0;
      multBool = 0;
      divBool = 0;
  } else if (subBool == 1) {
      resultSave -= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 1;
      subBool = 0;
      multBool = 0;
      divBool = 0;
  } else if (multBool == 1) {
      resultSave *= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 1;
      subBool = 0;
      multBool = 0;
      divBool = 0;
  } else if (divBool == 1) {
      resultSave /= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 1;
      subBool = 0;
      multBool = 0;
      divBool = 0;
  } else {
    if(equalBool == 1) {
      numBool = 0;
      addBool = 1;
    } else {
      resultSave += Number(numSave);
      numBool = 0;
      addBool = 1;
    }
  }
}

function subtract() {
  historyBox.innerHTML = historyBox.innerHTML + "-";
  if (addBool == 1) {
      resultSave += Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 1;
      multBool = 0;
      divBool = 0;
  } else if (subBool == 1) {
      resultSave -= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 1;
      multBool = 0;
      divBool = 0;
  } else if (multBool == 1) {
      resultSave *= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 1;
      multBool = 0;
      divBool = 0;
  } else if (divBool == 1) {
      resultSave /= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 1;
      multBool = 0;
      divBool = 0;
  } else {
    if(equalBool == 1) {
      numBool = 0;
      subBool = 1;
    } else {
      resultSave += Number(numSave);
      numBool = 0;
      subBool = 1;
    }
  }
}

function multiply() {
  historyBox.innerHTML = historyBox.innerHTML + "*";
  if (addBool == 1) {
      resultSave += Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 1;
      divBool = 0;
  } else if (subBool == 1) {
      resultSave -= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 1;
      divBool = 0;
  } else if (multBool == 1) {
      resultSave *= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 1;
      divBool = 0;
  } else if (divBool == 1) {
      resultSave /= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 1;
      divBool = 0;
  } else {
    if(equalBool == 1) {
      numBool = 0;
      multBool = 1;
    } else {
      resultSave += Number(numSave);
      numBool = 0;
      multBool = 1;
    }
  }
}

function divide() {
  historyBox.innerHTML = historyBox.innerHTML + "/";
  if (addBool == 1) {
      resultSave += Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 0;
      divBool = 1;
  } else if (subBool == 1) {
      resultSave -= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 0;
      divBool = 1;
  } else if (multBool == 1) {
      resultSave *= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 0;
      divBool = 1;
  } else if (divBool == 1) {
      resultSave /= Number(numSave);
      calResult.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 0;
      divBool = 1;
  } else {
      if(equalBool == 1) {
        numBool = 0;
        divBool = 1;
      } else {
        resultSave += Number(numSave);
        numBool = 0;
        divBool = 1;
      }
  }
}


function equal() {
  
  if (addBool == 1) {
      resultSave += Number(numSave);
      calResult.innerHTML = resultSave;
      historyBox.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 0;
      divBool = 0;
      equalBool = 1;
  } else if (subBool == 1) {
      resultSave -= Number(numSave);
      calResult.innerHTML = resultSave;
      historyBox.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 0;
      divBool = 0;
      equalBool = 1;
  } else if (multBool == 1) {
      resultSave *= Number(numSave);
      calResult.innerHTML = resultSave;
      historyBox.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 0;
      divBool = 0;
      equalBool = 1;
  } else if (divBool == 1) {
      resultSave /= Number(numSave);
      calResult.innerHTML = resultSave;
      historyBox.innerHTML = resultSave;
      numBool = 0;
      addBool = 0;
      subBool = 0;
      multBool = 0;
      divBool = 0;
      equalBool = 1;
  }
}

function clear() {
  calResult.innerHTML = "0";
  historyBox.innerHTML = "";
  numSave = "0";
  resultSave = 0;
  addBool = 0;
  subBool = 0;
  multBool = 0;
  divBool = 0;
  equalBool = 0;    
  numBool = 0;
}

numBtn_0.addEventListener("click",num0);
numBtn_1.addEventListener("click",num1);
numBtn_2.addEventListener("click",num2);
numBtn_3.addEventListener("click",num3);
numBtn_4.addEventListener("click",num4);
numBtn_5.addEventListener("click",num5);
numBtn_6.addEventListener("click",num6);
numBtn_7.addEventListener("click",num7);
numBtn_8.addEventListener("click",num8);
numBtn_9.addEventListener("click",num9);
addBtn.addEventListener("click", add);
subBtn.addEventListener("click", subtract);
multBtn.addEventListener("click", multiply);
divBtn.addEventListener("click",divide);
equalBtn.addEventListener("click",equal);
c.addEventListener("click", clear);



