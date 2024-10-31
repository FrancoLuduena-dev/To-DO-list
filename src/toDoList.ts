import Tarea from "./tarea";

export default abstract class toDoLista{
    private static listaTareas: Map<string, Tarea> = new Map<string, Tarea>();

// falta, si vamos a ponerlos al final listaTareasCompletadas[] y listaTareasPendientes[], o sino podemos hacer metodos que solo devuelvan de la lista los objetos que completado === true y completado !== true

    public static agregarTareaALista(titulo: string, tarea: Tarea): void{
        toDoLista.listaTareas.set(titulo.toLowerCase(), tarea);
    }

    public static getTareaDeLista(titulo: string): Tarea | undefined {
        return toDoLista.listaTareas.get(titulo);   
        // ver si puedo hacer un return mejor: la fecha imprime horas y minutos y segundos, y prioridad y categoria ver que lo imprima como el nombre, no un number
    
    }

    public static getTitulosDeTareas(): string[]{
        return Array.from(toDoLista.listaTareas.keys());
    }

    public static borrarTareaDeLista(titulo: string): void{
        toDoLista.listaTareas.delete(titulo);
    }

    public static modificarTituloDeTarea(): void{
//agregar logica para modificaciones
    }

    public static modificarDescripcionDeTarea(): void{
//agregar logica para modificaciones
    }

    public static modificarFechaVencimientoDeTarea(): void{
//agregar logica para modificaciones
    }


    public static modificarPrioridadDeTarea(): void{
        //agregar logica para modificaciones
            }


    public static modificarPorcentajeAvanceDeTarea(): void{
//agregar logica para modificaciones, si se pone a 100% poner completado en true, si se saca de 100% poner completado en false
    }

    
    public static modificarEtiquetasDeTarea(): void{
        //agregar logica para modificaciones
            }

            
    public static modificarMarcarCompletadoDeTarea(): void{
        //agregar logica para modificaciones
            }
}