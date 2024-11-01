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




}