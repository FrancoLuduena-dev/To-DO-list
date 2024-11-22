import Tarea from "../tarea";
import ordenamiento from "../ordenamiento";


/**
 * Clase para ordenar un arreglo de tareas según su prioridad.
 * Implementa la interfaz "ordenamiento".
 */
class ordenarPorPrioridad implements ordenamiento {
    /**
     * Ordena un arreglo de objetos "Tarea" basándose en su prioridad.
     * Las prioridades se comparan de manera numérica. Si una prioridad es "null",
     * se considera como menor que cualquier valor numérico.
     *
     * @param tarea - Arreglo de objetos "Tarea" que se desea ordenar.
     * @param ascendente - Indica si el orden debe ser ascendente ("true") o descendente ("false").
     * @returns Un nuevo arreglo de "Tarea" ordenado por prioridad.
     */
     public ordenar(tarea: Tarea[], ascendente: boolean): Tarea[] {
        return tarea.sort((a, b) => {
            const prioridadA = a.getPrioridad();  
            const prioridadB = b.getPrioridad();

            // Manejo de casos donde la prioridad es null
            if (prioridadA === null && prioridadB === null) return 0; // Caso en el que ambos son null
            if (prioridadA === null) return ascendente ? 1 : -1; // A es null, B no
            if (prioridadB === null) return ascendente ? -1 : 1; // B es null, A no

            // Comparar las prioridades
            if (ascendente) {
                return prioridadA - prioridadB; // Orden ascendente
            } else {
                return prioridadB - prioridadA; // Orden descendente
            }
        });
    }
}

export { ordenarPorPrioridad };
export default ordenarPorPrioridad;
