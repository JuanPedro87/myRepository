/**
Crear 3 variables de tipo numérico y asignarles un valor a cada una
Crear una variable de tipo inferido
	Intentar ponerle otro tipo
Crear una variable sin valor
Escribir en consola
	La suma de todos los que tienen valor
	La variable inferida
	La variable sin valor
**/

let v1: number = 1;
let v2: number = 3;
let v3: number = 5;

let v4 = 8;

let v6: number;

let pre = document.createElement('pre');

pre.innerText = `
    sum = ${v1 + v2 + v3 + v4}
    inferred = ${v4}
    uninitialized = ${v6}
`;

document.body.appendChild(pre);
