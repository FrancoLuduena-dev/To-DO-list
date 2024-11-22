import Tarea from "./tarea";

/**
 * Representa la funcionalidad de búsqueda de tareas.
 * 
 * @interface Busqueda
 */
interface Busqueda {
    /**
     * Realiza una búsqueda en un conjunto de tareas basado en un parámetro.
     * 
     * @param tarea - Un array de instancias de Tarea.
     * @param parametro - El criterio de búsqueda. Puede ser de cualquier tipo.
     * @returns Un array de tareas que coinciden con el criterio de búsqueda.
     */
    buscar(tarea: Tarea[], parametro: any): Tarea[];
}

export { Busqueda };
export default Busqueda;
