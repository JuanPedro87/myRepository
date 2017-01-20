/**
Declara un array numérico de dos maneras distintas
Píntalos
**/

let v1: number[] = [1, 2, 3];
let v2: Array<number> = [4, 5, 6];

let pre = document.createElement('pre');

pre.innerText = `
    ${v1}
    ${v2}
`;

document.body.appendChild(pre);
