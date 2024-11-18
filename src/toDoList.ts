import { Busqueda } from "./busqueda";
import TareaInexistenteError from "./exception/tarea-inexistente-error";
import Tarea from "./tarea";

/**
 * Clase que representa una lista de tareas.
 */
class ToDoLista {
    /**
     * @type {Tarea[]} La lista general de tareas.
     */
    private listaTareas: Tarea[] = [];

    /**
     * @type {Tarea[]} La lista de tareas completadas.
     */
    private listaTareasCompletadas: Tarea[] = [];

    /**
     * @type {Tarea[]} La lista de tareas pendientes.
     */
    private listaTareasPendientes: Tarea[] = [];

    /**
     * Agrega una tarea a la lista general y a la lista de completado o pendiente dependiendo si está o no completada la tarea.
     * @param {Tarea} tarea - La tarea que se va a agregar a la lista.
     */
    public agregarAListas(tarea: Tarea): void {
        this.listaTareas.push(tarea);
        if (tarea.getCompletado()) {
            this.listaTareasCompletadas.push(tarea);
        } else {
            this.listaTareasPendientes.push(tarea);
        }
    }

    /**
     * Agrega cambia de lista una tarea de la lista de completadas a la de pendientes y viceversa.
     * @param {Tarea} tarea - La tarea que se va a agregar a la lista.
     */
    public cambiarDeListas(tarea: Tarea): void {
        if (tarea.getCompletado()) {
            this.listaTareasCompletadas.push(tarea);
            this.listaTareasPendientes.splice(this.listaTareasPendientes.indexOf(tarea), 1);
        } else {
            this.listaTareasPendientes.push(tarea);
            this.listaTareasCompletadas.splice(this.listaTareasCompletadas.indexOf(tarea), 1);
        }
    }

    /**
     * Borra una tarea de la lista general y de las listas completado y pendiente.
     * @param {Tarea} tarea - La tarea que se va a borrar de la  lista.
     * @throws {TareaInexistenteError} - Error que se muestra si la tarea no se encuentra en la lista.
     */
    public borrarDeListas(tarea: Tarea): void | string {
        try {
            const index = this.listaTareas.indexOf(tarea);
            if (index > -1) {
                this.listaTareas.splice(index, 1);
                const indexCompletadas = this.listaTareasCompletadas.indexOf(tarea);
                if (indexCompletadas > -1) {
                    this.listaTareasCompletadas.splice(indexCompletadas, 1);
                }
                const indexPendientes = this.listaTareasPendientes.indexOf(tarea);
                if (indexPendientes > -1) {
                    this.listaTareasPendientes.splice(indexPendientes, 1);
                }
            } else {
                throw new TareaInexistenteError(`La tarea "${tarea.getTitulo()}" no se encuentra en la lista`);
            }
        } catch (error) {
            if (error instanceof TareaInexistenteError) {
                return error.message;
            } else {
                return error.message;
            }
        }
    }

    /**
     * Borra una tarea de las listas general y completada o pendiente, en base al título de la tarea.
     * @param {string} titulo - El título de la tarea a borrar de la lista.
     * @throws {TareaInexistenteError} - Error que se muestra si la tarea con el título especificado no se encuentra en la lista.
     */
    public borrarPorTitulo(titulo: string): void | string {
        try {
            const tarea: Tarea | undefined = this.listaTareas.find(t => t.getTitulo() === titulo);
            if (!tarea) {
                throw new TareaInexistenteError(`la tarea con el título \"${titulo}\" no se encuentra en la lista`);
            }
            this.borrarDeListas(tarea);
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

    /**
     * Devuelve la lista de tareas completadas.
     * @returns {Tarea[]} La lista de tareas completadas.
     */
    public getTareasCompletadas(): Tarea[] {
        return this.listaTareasCompletadas;
    }

    /**
     * Devuelve la lista de tareas pendientes.
     * @returns {Tarea[]} La lista de tareas pendientes.
     */
    public getTareasPendientes(): Tarea[] {
        return this.listaTareasPendientes;
    }

    /**
     * 
     * @param titulo El titulo de la tarea a buscar
     * @returns la tarea que coincida con el titulo
     */
    public getTarea(titulo: string): Tarea | undefined {
        return this.listaTareas.find(tarea => tarea.getTitulo() === titulo);
    }

}

export { ToDoLista };
export default ToDoLista;