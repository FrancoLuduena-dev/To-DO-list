import Tarea from "./tarea";

export default class toDoLista{
    private static listaTareas: Map<string, Tarea> = new Map<string, Tarea>();

// falta, si vamos a ponerlos al final listaTareasCompletadas[] y listaTareasPendientes[], o sino podemos hacer metodos que solo devuelvan de la lista los objetos que completado === true y completado !== true

    public static agregarTareaALista(titulo: string, tarea: Tarea): void{
        toDoLista.listaTareas.set(titulo, tarea);
    }

    public static getTareaDeLista(titulo: string): Tarea | undefined {
        return toDoLista.listaTareas.get(titulo);
    }

    public static getTitulosDeTareas(): string[]{
        return Array.from(toDoLista.listaTareas.keys());
    }



}