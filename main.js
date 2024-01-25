function calculate(event){
   const inputValue = event.target.value;
   const expression = /\+|\*|\-|\//;

   const numbers = inputValue.split(expression);

   const numberA = +numbers[0]; //You can also use parseInt() method to convert int 
   const numberB = +numbers[1];

   const operation = inputValue.match(expression);
   if(isNaN(numberA) || isNaN(numberB) || operation === null){
    return updateResult('Operation not recognized')        
   }
   const operator = operation[0]; // To retrieve the + - * / 
   
   const calculator = new Calculator();
   calculator.add(numberA);

   let result;
   switch(operator){
    case '+':
        result = calculator.add(numberB)
        break;
    case '/':
        result = calculator.divide(numberB)
        break;
    case '*':
        result = calculator.multiply(numberB)
        break;
    case '-':
        result = calculator.subtract(numberB)
        break;
    default:
        throw new Error("Operator is not recognized");

   }

   //console.log(result);
   updateResult(result);
}

function updateResult(result){
    let element = document.getElementById('result');
    if(element){
        element.innerText = result
    }
}

document.getElementById('inputValue').addEventListener('change', calculate);