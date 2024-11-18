import tarea, { Tarea } from "./tarea";

class Ordenamiento {
    // este flag booleano decide si el orden se hace de mayor a menor o menor a mayor
    // true == menor a mayor
    // flase == mayor a menor
    /* public ordenarPorFecha(
        listaDesordenada: Array<Tarea>,
        ascendiente: boolean
    ): Array<Tarea> {
        // Ordena la lista en base al flag booleano, si es ascendiente o no
        return listaDesordenada.sort((a, b) => {
            const fechaA = a.getFechaVencimiento();
            const fechaB = b.getFechaVencimiento();
    
            // Casos en los que la fecha es null
            if (fechaA === null && fechaB === null) return 0;
            if (fechaA === null) return ascendiente ? 1 : -1;
            if (fechaB === null) return ascendiente ? -1 : 1;
    
            // Convertir las fechas a cadenas ISO
            const isoA = fechaA.toISOString();
            const isoB = fechaB.toISOString();
    
            // Comparar las cadenas ISO directamente
            if (ascendiente) {
                return isoA.localeCompare(isoB);
            } else {
                return isoB.localeCompare(isoA);
            }
        });
    } */

        ordenarPorFecha(listaDesordenada: Array<Tarea>, ascendiente: boolean): Array<Tarea> {
            return listaDesordenada.sort((a, b) => {
                const fechaA = a.getFechaVencimiento();
                const fechaB = b.getFechaVencimiento();
        
                // Casos donde las fechas son null
                if (fechaA === null && fechaB === null) return 0; // Ambas fechas son null, no importa el orden
                if (fechaA === null) return ascendiente ? 1 : -1; // FechaA null va al final (ascendente) o al inicio (descendente)
                if (fechaB === null) return ascendiente ? -1 : 1; // FechaB null va al final (ascendente) o al inicio (descendente)
        
                // Comparación normal si ambas fechas son válidas
                const tiempoA = fechaA.getTime();
                const tiempoB = fechaB.getTime();
                return ascendiente ? tiempoA - tiempoB : tiempoB - tiempoA;
            });
        }

    //ordena alfabeticamente
    public ordenarPorTitulo(listaDesordenada: Array<tarea>): Array<tarea> {
        listaDesordenada.sort((a, b) => {
            const tituloA = a.getTitulo();
            const tituloB = b.getTitulo();
            return tituloA.localeCompare(tituloB);
        });
        return listaDesordenada;
    }

    // ordena por prioridad con el metodo sort
    public ordenarPorPrioridad(
    listaDesordenada: Tarea[],
    ascendiente: boolean
): Tarea[] {
    return listaDesordenada.sort((a, b) => {
        const prioridadA = a.getPrioridad(); // Asegúrate de que este atributo exista
        const prioridadB = b.getPrioridad(); // Asegúrate de que este atributo exista

        // Manejo de casos donde la prioridad es null
        if (prioridadA === null && prioridadB === null) return 0; // Ambos son null
        if (prioridadA === null) return ascendiente ? 1 : -1; // A es null, B no
        if (prioridadB === null) return ascendiente ? -1 : 1; // B es null, A no

        // Comparar las prioridades
        if (ascendiente) {
            return prioridadA - prioridadB; // Orden ascendente
        } else {
            return prioridadB - prioridadA; // Orden descendente
        }
    });
}

    
    
    
        public ordenarPorEtiquetas(
        listaDesordenada: Array<tarea>,
        ascendente: boolean
    ): Array<tarea> {
        return listaDesordenada.sort((a, b) => {
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

export { Ordenamiento };
export default Ordenamiento;
