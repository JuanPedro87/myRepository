/**
Crear una lista de elementos
Iterarlos para mostrarlos
	For… of
	For… in
**/

const list: number[] = [1, 2, 3];

let forInResult = '';
for (let index in list) {
  const item = list[index];
  forInResult += `${item} `;
}

let forOfResult = '';
for (let item of list) {
  forOfResult += `${item} `;
}

let pre = document.createElement('pre');

pre.innerText = `
    ${forInResult}
    ${forOfResult}
`;

document.body.appendChild(pre);
