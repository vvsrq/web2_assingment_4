// const { get } = require("express/lib/response");

// let gpa = 2.21;
// let age = 19;
// console.log(`Hi my name is Sanzhar. GPS = ${gpa}. AGE = ${age}`);

// let num1 = 10;
// let num2 = 5;

// let sum = num1 + num2;
// let difference = num1 - num2;
// let product = num1 * num2;
// let div = num1 / num2;
// let remainder = num1 % num2;

// console.log(`Sum: ${sum}`);
// console.log(`Difference: ${difference}`);
// console.log(`Product: ${product}`);
// console.log(`Quotient: ${div}`);
// console.log(`Remainder: ${remainder}`);


let d = new Date();
let d_string = d.toLocaleDateString();
let dateElement = document.getElementById("date");
dateElement.textContent = d_string;


function checkLeapYear() {
    const year = document.getElementById("yearInput").value;
    let result;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result = year + " is a leap year.";
    } else {
        result = year + " is not a leap year.";
    }

    document.getElementById("result").innerHTML = result;
}

function multipl() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const multiplication = num1 * num2;
    document.getElementById("res").textContent = `${num1} * ${num2} = ${multiplication}`;
    
}

function division() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const division = num1 / num2;
    document.getElementById("res").textContent = `${num1} / ${num2} = ${division}`;
    
}

function convertTemperature() {
    const temperature = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
  
    let cT;
    if (unit === "C") {
      cT = (temperature * 9) / 5 + 32;
      document.getElementById("res_2").textContent = `${temperature} C is equal to ${cT} F`;
    } else if (unit === "F") {
      cT = ((temperature - 32) * 5) / 9;
      document.getElementById("res_2").textContent = `${temperature} F is equal to ${cT} C`;
    } 
  }

function checkOddEven(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
}
  
function checkNumber() {
    const number = document.getElementById("numberInput").value;
    const result = checkOddEven(number);
    document.getElementById("l").textContent = `${number} is ${result}`;
}

function findLargestAndSmallest(num1, num2, num3) {
    let largest = num1;
    let smallest = num1;
  
    if (num2 > largest) {
      largest = num2;
    }
    if (num3 > largest) {
      largest = num3;
    }

    if (num2 < smallest) {
        smallest = num2;
      }
    if (num3 < smallest) {
        smallest = num3;
    }
  
    return largest; 
}
  
function findNumbers() {
    const num1 = parseInt(document.getElementById("num11").value);
    const num2 = parseInt(document.getElementById("num22").value);
    const num3 = parseInt(document.getElementById("num3").value);
  
    const { largest, smallest } = findLargestAndSmallest(num1, num2, num3);
  
    document.getElementById("result").textContent = `Largest: ${largest}, Smallest: ${smallest}`;
}

function findArea(a,b,c){
    let s = (a+b+c)/2 ; 
    console.log(s);
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

function trianglenums(){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const number3 = document.getElementById('number3').value;

    let a = findArea(number1,number2,number3);

    document.getElementById('area').textContent = `Area size is ${a}`;
}

function getNumForFactorial(){
    const factorialNum = document.getElementById("factorialN").value;
    let factorialResult = factorial(factorialNum);
    document.getElementById("factorialRes").textContent = `${factorialNum} = ${factorialResult}`;
}

function factorial(factorialNum) {
    if (factorialNum === 0) {
      return 1; 
    } else {
      return factorialNum * factorial(factorialNum - 1); 
    }
}

function getString(){
    const stringToCheck = document.getElementById("string").value;
    let stringR1 = checkVowels(stringToCheck);
    let stringR2 = checkConsonants(stringToCheck);
    document.getElementById("stringRes").textContent = `Vowels = ${stringR1} , consonants = ${stringR2}`
}

function checkVowels(s){
    let vowelsSet = ["a","e","i","o","u","A","E","I","O","U"]
    let vowelsRes = 0;
    for(let i = 0; i < s.length; i++){
        if (vowelsSet.includes(s)){
            vowelsRes++;
        }
    }
    return vowelsRes;
}
function checkConsonants(s){
    let vowelsSet = ["a","e","i","o","u","A","E","I","O","U"];
    let nothing = 0
    let consonants = 0;
    for(let i = 0; i < s.length; i++){
        if (vowelsSet.includes(s)){
            nothing++;
        }
        else{
            consonants++;
        }
    }
    return consonants;
}

function getSeconds(){
    const givenSeconds = document.getElementById("givenSeconds").value;
    const secondsResult = secondsConverter(givenSeconds);
    document.getElementById("secondsResult").textContent = `${givenSeconds} seconds is equal to ${secondsResult}`
}

function secondsConverter(seconds){
    const hours = Math.floor(seconds / 3600); 
    const remainingSeconds = seconds % 3600;
    const minutes = remainingSeconds / 60;

    return `${hours} hours, ${minutes.toFixed(4)} minutes`;
}

function getNumberForfrequent(){
    const number_freq = document.getElementById("number_freq").value;
    const freqResult = findMostFrequent(number_freq);
    document.getElementById("freqRes").textContent = `The most frequent is ${freqResult}`;
}

function findMostFrequent(arr){
    const arr_nums = arr.split(',').map(Number);

    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentNumber = null;

    for (const number of arr_nums) {
        if (frequencyMap[number]) {
          frequencyMap[number]++;
        } else {
          frequencyMap[number] = 1;
        }
    
        if (frequencyMap[number] > maxFrequency) {
          maxFrequency = frequencyMap[number];
          mostFrequentNumber = number;
        }
    }

    return mostFrequentNumber;
}

function getNumForFibanaci(){
    const fibNum = document.getElementById("fibNum").value;
    const fibRes = fibanaci(fibNum);
    document.getElementById("FibR").textContent = fibRes;
}

function fibanaci(n){
    if (n <= 1) {
        return n;
    } else {
        return fibanaci(n - 1) + fibanaci(n - 2);
    }
}

const days = daysUntilNewYear();
document.getElementById("daysRem").textContent = days;

function daysUntilNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
  
    const diffInMs = newYear.getTime() - today.getTime();
    const daysLeft = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  
    return daysLeft;
  }