/**
Crea dos variable que pueda ser string o boolean
	La primera vale 'hello'
	La segunda vale false
Crea un tipo stringOrBoolean y dos variables de este tipo
	La primera vale 'world'
	La segunda vale true
Imprime los valores por pantalla
**/

type stringOrBoolean = string | boolean; 

let v1: string | boolean;
let v2: string | boolean;
let v3: stringOrBoolean;
let v4: stringOrBoolean;

[v1, v2, v3, v4] = [ 'hello', false, 'world', true ];

let pre = document.createElement('pre');

pre.innerText = `
    ${v1}
    ${v2}
    ${v3}
    ${v4}
`;

document.body.appendChild(pre);
