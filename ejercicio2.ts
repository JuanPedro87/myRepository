/**
Crea 4 variables. Tipos:
	String
	Number
	Boolean
	Any
Asocia valores por destructuring assignment
**/

let v1: number;
let v2: string;
let v3: boolean;
let v4: any;

[v1, v2, v3, v4] = [4, 'hello', false, 'nulle'];


let pre = document.createElement('pre');

pre.innerText = `
    ${v1}
    ${v2}
    ${v3}
    ${v4}
`;

document.body.appendChild(pre);
