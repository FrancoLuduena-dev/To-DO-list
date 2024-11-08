import Tarea from "./tarea";
import { prioridad } from "./enums";

export class Ordenamiento{
    private tareas: Tarea[];

    constructor(tareas: Tarea[]){
        this.tareas = tareas;
    }

    // ORDENAR POR PRIORIDAD
    ordenarPorPrioridad(): Tarea[]{
        return this.tareas.sort((a, b) => a.getPrioridad() - b.getPrioridad());
    }
    
    // ORDENAR POR FECHA DE VENCIMIENTO
    ordenarPorFechaVencimiento(): Tarea[]{
        return this.tareas.sort((a, b) => a.getFechaVencimiento().getTime() - b.getFechaVencimiento().getTime());
    }

    // ORDENAR POR TITULO
    ordenarPorTitulo(): Tarea[]{
        return this.tareas.sort((a, b) => 
        a.getTitulo().toLowerCase().localeCompare(b.getTitulo().toLowerCase()));
    }
}