import Tarea from "./tarea";
import { prioridad } from "./enums";

export default class BusquedaYordenamiento {
    private tareas: Tarea[] = [];

    agregarTarea(tarea: Tarea): void {
        this.tareas.push(tarea);
    }

    //BUSQUEDA POR TITULO
    buscarPorTitulo(titulo: string): Tarea[] {
        return this.tareas.filter(tarea =>
            tarea.getTitulo().toLowerCase().includes(titulo.toLowerCase())
        );
    }

    //BUSCAR POR FECHA VENCIMIENTO
    buscarPorFechaVencimiento(fecha: Date): Tarea[] {
        return this.tareas.filter(tarea =>
            tarea.getFechaVencimiento().toDateString() === fecha.toDateString()
        );
    }

    //ORDENAR POR TITULO
    ordenarPorTitulo(): Tarea[] {
        return [...this.tareas].sort((a, b) =>
            a.getTitulo().localeCompare(b.getTitulo())
        );
    }

    //ORDENAR POR FECHA VENCIMIENTO
    ordenarPorFechaVencimiento(): Tarea[] {
        return [...this.tareas].sort((a, b) =>
            a.getFechaVencimiento().getTime() - b.getFechaVencimiento().getTime()
        );
    }

    //ORDENAR  POR PRIORIDAD
    ordenarPorPrioridad(): Tarea[] {
        const prioridadOrder: Record<prioridad, number> = {
            [prioridad.alta]: 2,
            [prioridad.media]: 1,
            [prioridad.baja]: 0,
        };
        return  [...this.tareas].sort((a, b) =>
        prioridadOrder[a.getPrioridad()] - prioridadOrder[b.getPrioridad()]
        );

    }

}