/**
Crea la interfaz persona: nombre, apellidos (opcional), edad
Crea un array de personas
Usa map para obtener un array de edades a partir del array de personas
Usa reduce para obtener la suma de todas las edades
Calcula la media
Intenta hacerlo todo usando map y reduce
**/

interface IPerson {
  name: string;
  lastName?: string;
  age: number;
}

let people: IPerson[] = [];

people.push({
  name: 'alex',
  age: 35
});

people.push({
  name: 'juan',
  age: 11
});

people.push({
  name: 'perico',
  lastName: 'palotes',
  age: 81
});

let ages = people.map(person => person.age);
let sum = ages.reduce((prev, curr) => prev + curr, 0);
let avg = sum / people.length;

alert(JSON.stringify(ages));
alert(sum);
alert(avg);

let avg2 = people
  .map(person => person.age / people.length)
  .reduce((prev, curr) => (prev + curr));

alert(avg2);
