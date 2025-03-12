import Calculator from "./math.js";

const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const resultElement = document.getElementById("result");

const calculator = new Calculator(num1Element, num2Element, resultElement);

document
  .getElementById("addBtn")
  .addEventListener("click", () => calculator.add());
document
  .getElementById("subtractBtn")
  .addEventListener("click", () => calculator.subtract());
document
  .getElementById("multiplyBtn")
  .addEventListener("click", () => calculator.multiply());
document
  .getElementById("divideBtn")
  .addEventListener("click", () => calculator.divide());
