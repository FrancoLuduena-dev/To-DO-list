import Tarea from "./tarea";
import { prioridad } from "./enums";
import ToDoLista from "./toDoList";
/*
/**
 * Busqueda
 * @description clase para realizar busquedas
 */


export class Busqueda {
    
/**
 * Metodo para buscar una tarea por titulo ingresado
 * @param {string} titulo Titulo de la tarea
 * 
 * @returns {Tarea} devuelve la tarea que coincida con el titulo
 */
    // BUSQUEDA POR TITULO
    public busquedaPorTitulo(tareas:Tarea[], titulo: string): Tarea[]{
        return  tareas.filter(tarea => 
            tarea.getTitulo().toLowerCase().includes(titulo.toLowerCase()));
    }

/**
 * Metodo para buscar una tarea por fecha de vencimiento
 * @param {Date}  fecha Fecha que se desea buscar una tarea
 * 
 * @returns {Tarea[]} Devuelve las tareas que coincidan con la fecha en formato array
 */
   
    // BUSQUEDA POR FECHA DE VENCIMIENTO
    public buscarPorFechaDeVencimiento(tareas: Tarea[],fecha: Date): Tarea[] {
        
        
        return tareas.filter(tarea => {
            const tareaFecha = tarea.getFechaVencimiento();
            console.log(tarea.getFechaVencimiento() === fecha)
            // Verifico si la fecha de vencimiento es null
            if(tareaFecha === null) return false;

            return (
                tareaFecha.getFullYear() === fecha.getFullYear() &&
                tareaFecha.getMonth() === fecha.getMonth() &&
                tareaFecha.getDate() === fecha.getDate()
            );
        });
    }
    
    /**
     * Metodo para realizar una busqueda basada en una etiqueta en particular
     * 
     * @param {string} etiqueta Etiqueta que se desea buscar 
     * 
     * @returns {Tarea} Devuelve un array de tareas que cumplan con la etiqueta pasada por parametro
     */
    
    public busquedaPorEtiqueta(tareas: Tarea[], etiqueta: string): Tarea[] {
        return tareas.filter(tarea => 
            tarea.getEtiquetas().some(etiquetaTarea => 
                etiquetaTarea.toLowerCase() === etiqueta.toLowerCase()
            )
        );
    
}}

