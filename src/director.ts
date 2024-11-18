import Builder from "./builder";
import Tarea from "./tarea";
import ToDoLista from "./toDoList";

/**
 * Clase Director que se encarga de construir tareas y agregarlas a una lista.
 * @param builder - El constructor a utilizar para crear las tareas.
 * @param lista - La lista de tareas a la que se agregarán las tareas.
 */
class Director {
    /**
     * El constructor de la clase Director.
        @param builder - El constructor a utilizar para crear las tareas.
        @param lista - La lista de tareas a la que se agregarán las tareas.
     */
    constructor(private builder: Builder, private lista: ToDoLista) {
        this.builder = builder;
        this.lista = lista;
    }

    /**
     * Configura el constructor de tareas a utilizar.
     * @param builder - El nuevo constructor de tareas.
     */
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    /**
     * Construye una nueva tarea utilizando el constructor y la agrega a la lista.
     * @returns La tarea construida.
     */
    public construirTarea(): Tarea {
        let resultado = this.builder.construirTarea();
        this.lista.agregarALista(resultado);
        this.builder.reset();
        return resultado;
    }
}

export { Director };
export default Director;