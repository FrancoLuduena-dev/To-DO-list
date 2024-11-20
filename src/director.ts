import Builder from "./builder";
import Tarea from "./tarea";
import ToDoLista from "./toDoList";

/**
 * Clase Director que se encarga de construir tareas y agregarlas a una lista.
 */
class Director {
    /**
    * @type {Builder} builder - El constructor a utilizar para crear las tareas.
     */
    private builder: Builder;


    /**
     * El constructor de la clase Director.
     * @param {Builder} builder - El constructor a utilizar para crear las tareas.
     */
    constructor(builder: Builder) {
        this.builder = builder;
    }

    /**
     * Configura el constructor de tareas a utilizar.
     * @param {Builder} builder - El nuevo constructor de tareas.
     */
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    /**
     * Construye una nueva tarea utilizando el constructor y la agrega a la lista.
     * @returns {Tarea} La tarea construida.
     */
    public construirTarea(configurar: () => void): Tarea {
        configurar();
        let resultado = this.builder.construirTarea();
        this.builder.reset();
        return resultado;
    }
}

export { Director };
export default Director;