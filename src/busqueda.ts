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
    buscarPorFechaDeVencimiento(fecha: Date): Tarea[] {
        return this.tareas.filter(tarea => {
            const tareaFecha = tarea.getFechaVencimiento();
            
            // Verifigo si la fecha de vencimiento es null
            if(tareaFecha === null) return false;

            return (
                tareaFecha.getFullYear() === fecha.getFullYear() &&
                tareaFecha.getMonth() === fecha.getMonth() &&
                tareaFecha.getDate() === fecha.getDate()
            );
        });
    }
    busquedaPorEtiqueta(etiqueta: string): Tarea[] {
        return this.tareas.filter(tarea => 
            tarea.getEtiquetas().includes(etiqueta.toLowerCase()));
    }
    
}