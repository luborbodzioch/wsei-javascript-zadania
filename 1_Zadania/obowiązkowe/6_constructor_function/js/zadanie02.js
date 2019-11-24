function Calculator(){

    this.history = [];

}

Calculator.prototype.add = function(num1, num2){
    const sum = num1 + num2;
    this.history.push("added " + num1 + " to " + num2 + " got " + sum)


    return sum;
}

Calculator.prototype.multiply = function(num1, num2){
    const mul = num1 * num2;
    this.history.push("multiplied " + num1 + " by " + num2 + " got " + mul)


    return mul;
}

Calculator.prototype.subtract = function(num1, num2){
    const sub = num1 - num2;
    this.history.push("subtracted " + num2 + " from " + num1 + " got " + sub)
  

    return sub;
}

Calculator.prototype.divide = function(num1, num2){
    const div = num1 / num2;
    this.history.push("divided " + num1 + " by " + num2 + " got " + div)
  

    return div;
}

Calculator.prototype.printOperations = function(){
    console.table("history: " + this.history);
}

Calculator.prototype.clearOperation = function(){
    this.history = [];
}


calculator = new Calculator();

calculator.add(2, 2);
calculator.multiply(4, 4);
calculator.subtract(5, 2);
calculator.divide(6, 2);
calculator.printOperations();
calculator.clearOperation();
calculator.printOperations();