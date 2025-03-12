export default class Calculator {
  constructor(num1Element, num2Element, resultElement) {
    this.num1Element = num1Element;
    this.num2Element = num2Element;
    this.resultElement = resultElement;
  }

  get num1() {
    return parseFloat(this.num1Element.value);
  }

  get num2() {
    return parseFloat(this.num2Element.value);
  }

  add() {
    this.resultElement.textContent = this.num1 + this.num2;
  }

  subtract() {
    this.resultElement.textContent = this.num1 - this.num2;
  }

  multiply() {
    this.resultElement.textContent = this.num1 * this.num2;
  }

  divide() {
    this.resultElement.textContent = this.num1 / this.num2;
  }
}
