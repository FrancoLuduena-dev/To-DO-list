import Tarea from "./tarea";

/**
 * Interfaz que define el contrato para implementar métodos de ordenamiento en un arreglo de tareas.
 */
interface Ordenamiento {
    /**
     * Ordena un arreglo de objetos "Tarea" según un criterio específico.
     *
     * @param tarea - Arreglo de objetos "Tarea" que se desea ordenar.
     * @param ascendente - Indica si el orden debe ser ascendente ("true") o descendente ("false").
     * @returns Un nuevo arreglo de "Tarea" ordenado según el criterio implementado.
     */
    ordenar(tarea: Tarea[], ascendente: boolean): Tarea[];
}

export { Ordenamiento };
export default Ordenamiento;
