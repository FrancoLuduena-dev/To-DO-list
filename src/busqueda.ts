import Tarea from "./tarea";
import { prioridad } from "./enums";

export class Busqueda {
    private tareas: Tarea[];

    constructor(tareas: Tarea[]){
        this.tareas = tareas;
    }

    // BUSQUEDA POR TITULO
    busquedaPorTitulo(titulo: string): Tarea[]{
        return  this.tareas.filter(tarea => 
            tarea.getTitulo().toLowerCase().includes(titulo.toLowerCase()));
    }
    // BUSQUEDA POR FECHA DE VENCIMIENTO
    buscarPorFechaDeVencimiento(fecha: Date): Tarea[]{
        return this.tareas.filter(tarea => 
            tarea.getFechaVencimiento() === fecha
        );
    }
}