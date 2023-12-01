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
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

//Almacenar el objeto local storage con formato json
//Variable de tipo Object de un objeto vehículo
const vehiculoObject = {
    marca: 'BMW',
    modelo: 'z4',
    color: 'Rojo',
    fabricacion: 1992,
    cilindrada: '2400'
}

//Almacenar el objeto en local storage - Guardar el JSON en el local storage
localStorage.setItem('vehiculo', JSON.stringify(vehiculoObject));

//Recuperar datos - Mostrar el Object en consola del JSON que hemos guardado en el local storage
console.log(localStorage.getItem('vehiculo'));

//Imprimimos por consola el JSON
//De JSON a objeto --> parte
console.log(JSON.parse(localStorage.getItem('vehiculo')));


//Muestra de un objeto furgoneta por consola 
const furgoneta1 = new Furgoneta('Mercedes', 'Kangoo', 'Azul', 2014, '1800', 8);
mostrarResultado('<br><br>-------------------Furgoneta 1--------------------------'); 
furgoneta1.mostrarDatos();
furgoneta1.arrancar();
furgoneta1.acelerar(130);
furgoneta1.frenar();

//Guardar unicamente la clase furgoneta (por furgoneta)
localStorage.setItem('marca-furgoneta1', JSON.stringify(furgoneta1.marca));

//Muestra un objeto Todoterreno

const todoterreno1 = new Todoterreno('Suzuki','FullPower','negro',2016,'3600','si')
mostrarResultado('<br><br>-------------------Todoterreno 1--------------------------'); 
todoterreno1.mostrarDatos();
todoterreno1.arrancar();
todoterreno1.acelerar(150);
todoterreno1.frenar();
console.log(todoterreno1.marca)

//Generar una variable de tipo Object con POO
const todoterrenoObject = {
    marca:todoterreno1.marca ,
    modelo:todoterreno1.modelo ,
    color:todoterreno1.color ,
    fabricacion:todoterreno1.fabricacion ,
    cilindrada:todoterreno1.cilindrada ,
    traccion:todoterreno1.traccion
}