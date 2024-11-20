import Tarea from "../tarea";
import ordenamiento from "../ordenamiento";

/**
 * Clase para ordenar un arreglo de tareas según su título.
 * Implementa la interfaz "ordenamiento".
 */
class ordenarPorTitulo implements ordenamiento {
    /**
     * Ordena un arreglo de objetos "Tarea" basándose en sus títulos alfabéticamente.
     *
     * @param tarea - Arreglo de objetos "Tarea" que se desea ordenar.
     * @param ascendente - Indica si el orden debe ser ascendente ("true") o descendente ("false").
     * @returns Un nuevo arreglo de "Tarea" ordenado por título.
     */
    ordenar(tarea: Tarea[], ascendente: boolean): Tarea[] {
        return tarea.sort((a, b) => {
            const tituloA = a.getTitulo();
            const tituloB = b.getTitulo();
            if (ascendente) {
                return tituloA.localeCompare(tituloB);
            } else {
                return tituloB.localeCompare(tituloA);
            }
        });
    }
}

export { ordenarPorTitulo };
export default ordenarPorTitulo;
