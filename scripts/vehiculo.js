class Vehiculo{
    #marca; //Con la # decimos que es private
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    //Constructor con parámetros
    constructor (marca, modelo, color,fabricacion,cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#fabricacion =fabricacion;
        this.#cilindrada = cilindrada;
    }

    //Constructor por defecto o sin parámetros
    constructor(){

    }

    mostrarDatos(){
        const datos = `
        La marca es: ${this.#marca}
        </br>
        El modelo es: ${this.#modelo}
        </br>
        Su color es: ${this.#color}
        <br/>
        Se fabricó en el año: $ ${this.#fabricacion}
        <br/>
        Cilindrada: ${this.#cilindrada}
        `;

        //Llamar a la funcion mostrarResultado definida en el main.js
        //Siempre llamamos a los privados con this
    mostrarResultado(`<p>${datos}</p>`);
    }
    acelerar(velocidad){
        const mensaje = `<br/>Se ha acelerado hasta: ${velocidad}`;
        mostrarResultado(`<p>${datos}</p>`);
    }
    arrancar(){
        const mensaje = `<br/> EL coche ${this.#marca}, ${this.#modelo}, de color ${this.#color}, ha arrancado`;
        mostrarResultado(`<p>${datos}</p>`);
    }
    frenar(){
        const mensaje = `<br/> EL coche ${this.#marca}, ${this.#modelo}, de color ${this.#color}, ha parado`;
        mostrarResultado(`<p>${datos}</p>`);
    }
    get marca(){
        return this.#marca;
    }
    set marca(value){
        this.#marca = value;
    }
    get modelo(){
        return this.#modelo;
    }
    set modelo(value){
        this.#modelo = value;
    }
    get color(){
        return this.#color;
    }
    set color(value){
        this.#color = value;
    }
    get fabricacion(){
        return this.#fabricacion;
    }
    set fabricacion(value){
        this.#fabricacion = value;
    }
    get cilindrada(){
        return this.#cilindrada;
    }
    set cilindrada(value){
        this.#cilindrada = value;
    }
}