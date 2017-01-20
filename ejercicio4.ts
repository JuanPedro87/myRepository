/**
Crear un tipo de datos enumerado con los colores del semáforo
	Asigna el rojo a una variable de tipo string
	Asigna el verde a una variable de tipo number
Pinta los resultados válidos por pantalla
Consigue que el enumerado siga la secuencia 1,2,3
**/

enum TrafficLights { RED=1, YELLOW, GREEN }

// let red: string = TrafficLights.RED; <-- Invalid value
let green: number = TrafficLights.GREEN;

let pre = document.createElement('pre');

pre.innerText = `
    ${green}
`;

document.body.appendChild(pre);
