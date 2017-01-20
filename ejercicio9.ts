/**
Crea una función que sume dos números
Crea una variable, cuyo tipo de dato sea una función. Ésta será una función que reste dos números.
Crea una variable, cuyo tipo de dato sea una función. Ésta será una arrow function que multiplique dos números.
Crea una variable, cuyo tipo de dato sea una función. Ésta será una arrow function que divida dos números. No debe tener sentencia return
Crea una variable, cuyo tipo de dato sea una función. Ésta será una arrow function que obtenga el factorial de un número. No debe tener sentencia return ni paréntesis alguno
**/

function add(a, b) {
  return a + b;
}

let substract: Function = function (a, b) {
  return a - b;
}

let multiply: Function = (a, b) => {
  return a * b;
}

let divide: Function = (a, b) => a / b;

let factorial: Function = a => a > 1 ? a * factorial(a - 1) : 1;

alert(add(1, 2));
alert(substract(1, 2));
alert(multiply(3, 2));
alert(divide(1, 2));
alert(factorial(4));
