const form = document.getElementById("numberForm");
const resultDiv = document.getElementById("result");


let display = document.getElementById("display");
let firstOperand = null;
let operator = null;

const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTaskInput");
const addTaskButton = document.getElementById("addTaskButton");

let array = {};

function getArrayLength(arr) {
  let count = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    count++;
  }
  return count;
}

let i = getArrayLength(array);

function adding(){
  const information = document.getElementById("myInput").value;
  array[i]=information;
  i = getArrayLength(array);
  displayToDo();
}

function displayToDo(){
  if(i != 0){
    const listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    const label = document.createElement("label");
    const delette = document.createElement("button");
    checkBox.type = "checkbox";
    checkBox.checked = true;
    checkBox.id = i.toString();
    listItem.textContent = array[i-1];
    listItem.setAttribute("class", "item");
    const myList = document.getElementById("myUL");
    myList.appendChild(listItem);
    label.htmlFor = i.toString();
    listItem.id = i.toString();
    delette.id = i.toString();
    delette.textContent = "Delete";
    myList.appendChild(checkBox);
    myList.appendChild(label);
    myList.appendChild(delette);
    delette.addEventListener("click",function(){
      deleteElement();
    })
    console.log(document.getElementById("myUL"));
  }
}

function deleteElement(){
  document.addEventListener('click', function(event) {
    let variable = "";
    variable = event.target.id;
    const parent = document.getElementById("myUL");
    const child = document.getElementById(variable);
    parent.removeChild(child);
  });
}




function sortNumbers(numbersInput, order) {
  const numbersArray = numbersInput.split(",").map(Number);

  if (order === "asc") {
    numbersArray.sort((a, b) => a - b);
  } else {
    numbersArray.sort((a, b) => b - a);
  }

  return numbersArray.join(", ");
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const numbersInput = document.getElementById("numbers").value;
  const order = document.getElementById("order").value;

  const sortedNumbers = sortNumbers(numbersInput, order);
  resultDiv.textContent = "Sorted numbers: " + sortedNumbers;
});

function appendNumber(number) {
    display.value += number;
}

function setOperator(op) {
    firstOperand = parseFloat(display.value);
    operator = op;
    display.value = "";
}

function clearDisplay() {
    display.value = "";
    firstOperand = null;
    operator = null;
}

function calculate() {
    let secondOperand = parseFloat(display.value);

    if (firstOperand !== null && operator !== null) {
      let result;
      switch (operator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "/":
          result = firstOperand / secondOperand;
          break;
      }
      display.value = result;
      firstOperand = result;
      operator = null;
    }
}

function convertTemperature() {
    const temperature = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
  
    let cT;
    if (unit === "C") {
      if(temperature>10000000){
        cT = temperature*0.25;
        document.getElementById("res_2").textContent = `${temperature} and you will pay + ${cT} tenge`;
      }
      if (temperature>5000000 && temperature<10000000){
        cT = temperature*0.2;
        document.getElementById("res_2").textContent = `${temperature} and you will pay + ${cT} tenge`;
      }
      if(temperature<5000000){
        cT = temperature*0.15;
        document.getElementById("res_2").textContent = `${temperature} and you will pay + ${cT} tenge`;
      }

    } else if (unit === "F") {
        if(temperature>10000){
            cT = temperature*0.25;
            document.getElementById("res_2").textContent = `${temperature} and you will pay + ${cT} usdt`;
          }
          if (temperature>5000 && temperature<10000){
            cT = temperature*0.2;
            document.getElementById("res_2").textContent = `${temperature} and you will pay + ${cT} usdt`;
          }
          if(temperature<5000){
            cT = temperature*0.15;
            document.getElementById("res_2").textContent = `${temperature} and you will pay + ${cT} usdt`;
          }
    } 
}