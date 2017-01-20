/**
Crea una función llamada salute, que reciba dos parámetros: nombre y apellidos. El segundo de ellos debe ser opcional. Mostrará el nombre completo en un alert
Crea una función de división. Tendrá un mensaje de error opcional (con un valor predeterminado) para cuando haya una división entre cero.
**/

function salute(firstName:string, lastName?:string) {
  alert(`Hello ${firstName} ${lastName || ''}`);
}

salute('Alex');
salute('Alex', 'Such');

function divide(a: number, b: number, error: string = 'ArithmeticException: Division by zero') {
  if (b === 0) {
    alert(error);
    return;
  }

  return a / b;
}

divide(1, 0);
divide(1, 0, 'Date cuenta de lo que estás haciendo');
