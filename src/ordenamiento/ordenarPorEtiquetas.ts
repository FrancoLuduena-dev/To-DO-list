import Tarea from "../tarea";
import ordenamiento from "../ordenamiento";

/**
 * Clase para ordenar un arreglo de tareas por sus etiquetas.
 * Implementa la interfaz "ordenamiento".
 */
class ordenarPorEtiquetas implements ordenamiento {
    /**
     * Ordena un arreglo de objetos "Tarea" basándose en las etiquetas asociadas.
     * Las etiquetas se combinan en una cadena única para cada tarea y se comparan alfabéticamente.
     *
     * @param tarea - Arreglo de objetos "Tarea" que se desea ordenar.
     * @param ascendente - Indica si el orden debe ser ascendente ("true") o descendente ("false").
     * @returns Un nuevo arreglo de "Tarea" ordenado por etiquetas.
     */
    ordenar(tarea: Tarea[], ascendente: boolean): Tarea[] {
        return tarea.sort((a, b) => {
            const etiquetasA = a.getEtiquetas().join(",").toLowerCase();
            const etiquetasB = b.getEtiquetas().join(",").toLowerCase();

            if (ascendente) {
                return etiquetasA.localeCompare(etiquetasB);
            } else {
                return etiquetasB.localeCompare(etiquetasA);
            }
        });
    }
}

export { ordenarPorEtiquetas };
export default ordenarPorEtiquetas;
