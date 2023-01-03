var num1 = 0;
var num2 = 0;
var typeCalculation;

function giveNumber(number) {
  if (num1 == 0 && num1 !== "0.") {
    num1 = number;
  } else {
    num1 += number;
  }
  toReset();
}

function giveComma() {
  if (num1 == 0) {
    num1 = "0.";
  } else if (num1.indexOf(".") == -1) {
    num1 += ".";
  }
  toReset();
}

function giveC() {
  num1 = 0;
  num2 = 0;
  toReset();
}

function calculate(valor) {
  if (num1 == 0) {
    num1 = parseFloat(document.getElementById("val_number").value);
  }
  num2 = parseFloat(num1);
  num1 = 0;
  typeCalculation = valor;
}


function sum (num1, num2)
{
    var resultado;
    resultado = num1 + num2;
    return resultado;
}

function subtrac (num1, num2)
{
    var resultado;
    resultado = num2 - num1;
    return resultado;
}

function multiply (num1, num2)
{
    var resultado;
    resultado = num1 * num2;
    return resultado;
}

function div (num1, num2)
{
    var resultado;
    resultado = num2 / num1;
    return resultado;
}

function powe (num1, num2)
{
    var resultado;
    resultado =  Math.pow(num2, num1);
    return resultado;
}

function equal() {
  num1 = parseFloat(num1);
  switch (typeCalculation) {
    case 1:
      num1 = sum(num1,num2);
      break;
    case 2:
      num1 = subtrac (num1, num2);
      break;
    case 3:
      num1 = multiply (num1, num2);
      break;
    case 4:
      num1 = div (num1, num2);
      break;
    case 5:
      num1 = powe (num1, num2);
      break;
  }
  toReset();
  num2 = parseFloat(num1);
  num1 = 0;
}

function toReset() {
  document.getElementById("val_number").value = num1;
}
