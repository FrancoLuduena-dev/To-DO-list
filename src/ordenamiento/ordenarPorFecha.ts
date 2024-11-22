import Tarea from "../tarea";
import ordenamiento from "../ordenamiento";

/**
 * Clase para ordenar un arreglo de tareas según su fecha de vencimiento.
 * Implementa la interfaz "ordenamiento".
 */
class ordenarPorFecha implements ordenamiento {
    /**
     * Ordena un arreglo de objetos "Tarea" basándose en su fecha de vencimiento.
     * Las fechas nulas se consideran menores que cualquier fecha válida y se posicionan
     * al final en orden ascendente o al inicio en orden descendente.
     *
     * @param tarea - Arreglo de objetos "Tarea" que se desea ordenar.
     * @param ascendente - Indica si el orden debe ser ascendente ("true") o descendente ("false").
     * @returns Un nuevo arreglo de "Tarea" ordenado por fecha de vencimiento.
     */
    public ordenar(tarea: Tarea[], ascendente: boolean): Tarea[] {
        return tarea.sort((a, b) => {
            const fechaA = a.getFechaVencimiento();
            const fechaB = b.getFechaVencimiento();

            // Casos donde las fechas son null
            if (fechaA === null && fechaB === null) return 0; // Ambas fechas son null, no importa el orden
            if (fechaA === null) return ascendente ? 1 : -1; // FechaA null va al final (ascendente) o al inicio (descendente)
            if (fechaB === null) return ascendente ? -1 : 1; // FechaB null va al final (ascendente) o al inicio (descendente)

            // Comparación normal si ambas fechas son válidas
            const tiempoA = fechaA.getTime();
            const tiempoB = fechaB.getTime();
            return ascendente ? tiempoA - tiempoB : tiempoB - tiempoA;
        });
    }
}

export { ordenarPorFecha };
export default ordenarPorFecha;
