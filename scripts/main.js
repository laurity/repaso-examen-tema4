import { Vehiculo} from './vehiculo.js';
import { Furgoneta } from './furgoneta.js';
import { Todoterreno } from './todoterreno.js';

//Crear un contenedor para mostrar los resultados
const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

// Función para mostrar los datos
export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

// Muestra de un obeto vehículo

const vehiculo1 = new Vehiculo('BMW', 'z4', 'Rojo', 1992, '2400');
mostrarResultado('-- Vehículo 1 --'); 
vehiculo1.mostrarResultado();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();