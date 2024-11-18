import TareaInexistenteError from "./exception/tarea-inexistente-error";
import Tarea from "./tarea";

/**
 * Clase que representa una lista de tareas.
 */
class ToDoLista {
    /**
     * @type {Tarea[]} La lista de tareas.
     */
    private listaTareas: Tarea[] = [];

    /**
     * Agrega una tarea a la lista.
     * @param {Tarea} tarea - La tarea que se va a agregar a la lista.
     */
    public agregarALista(tarea: Tarea): void {
        this.listaTareas.push(tarea);
    }

    /**
     * Borra una tarea de la lista.
     * @param {Tarea} tarea - La tarea que se va a borrar de la  lista.
     * @throws {TareaInexistenteError} - Error que se muestra si la tarea no se encuentra en la lista.
     */
    public borrarDeLista(tarea: Tarea): void | string {
        try {
            const index = this.listaTareas.indexOf(tarea);
            if (index > -1) {
                this.listaTareas.splice(index, 1);
            } else {
                throw new TareaInexistenteError(`la tarea "${tarea.getTitulo()}" no se encuentra en la lista`);
            }
        } catch (error) {
            if (error instanceof TareaInexistenteError) {
                return error.message;
            }
        }
    }

    /**
     * Borra una tarea de la lista por su título.
     * @param {string} titulo - El título de la tarea a borrar de la lista.
     * @throws {TareaInexistenteError} - Error que se muestra si la tarea con el título especificado no se encuentra en la lista.
     */
    public borrarPorTitulo(titulo: string): void | string {
        try {
            const tarea: Tarea | undefined = this.listaTareas.find(t => t.getTitulo() === titulo);
            if (!tarea) {
                throw new TareaInexistenteError(`la tarea con el título \"${titulo}\" no se encuentra en la lista`);
            }
            this.borrarDeLista(tarea);
        } catch (error) {
            if (error instanceof TareaInexistenteError) {
                return error.message;
            }
        }
    }

    /**
     * Devuelve una tarea especifica de la lista en base a su título.
     * @param {string} titulo - El título de la tarea a devolver.
     * @returns {Tarea | undefined} La tarea encontrada o undefined si no se encuentra.
     */
    public getTareaDeLista(titulo: string): Tarea | undefined {
        return this.listaTareas.find(t => t.getTitulo() === titulo);
    }

    /**
     * Devuelve la lista de tareas.
     * @returns {Tarea[]} La lista de tareas.
     */
    public getListaTareas(): Tarea[] {
        return this.listaTareas;
    }
}

export { ToDoLista };
export default ToDoLista;