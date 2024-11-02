import Tarea from "./tarea";
import { categoria, prioridad } from "./enums";
import toDoLista from "./toDoList";


export default abstract class AdministrarTarea {
    constructor() { };

    public static agregarTarea(
        titulo: string,
        descripcion: string,
        fechaVencimiento: Date,
        prioridad: prioridad,
        categoria: categoria
    ): void {
        try {
            const tarea = new Tarea(titulo, descripcion, fechaVencimiento, prioridad, categoria);
            toDoLista.agregarTareaALista(tarea.getTitulo(), tarea);

            // agregar logica de persistencia en JSON
        } catch (error) {
            // agregar una excepcion si el titulo (key) de la tarea ya existe en el mapa de tareas 
            // agregar excepcion si el titulo esta vacio
        }
    }


    public static borrarTarea(titulo: string): void {
        try {
            let key = titulo.toLowerCase();
            toDoLista.borrarTareaDeLista(key);

            // agregar logica de persistencia en JSON
            // ¿Necesitamos algun tipo de return que le avise a la persona?
        } catch (error) {
            // agregar una excepcion si la tarea que se quiere borrar no existe
        }
    }

    public static modificarTitulo(titulo: string): void {
        try {
            let key = titulo.toLowerCase();
            // logica del metodo
            // acabo de buscar, y no se puede modificar la key una vez creada, lo que hay que hacer es generar el objeto de vuelta, con el titulo (key) nuevos (tanto el key que se llame como el titulo nuevo, como el tarea.titulo con el titulo nuevo), y despues borrar el objeto viejo.

            // agregar logica de persistencia en JSON
        } catch (error) {
            // agregar una excepcion si la tarea que se quiere modificar no existe
        }
    }

    public static modificarDescripcion(titulo: string): void {
        try {
            let key = titulo.toLowerCase();
            // logica del metodo

            // agregar logica de persistencia en JSON
        } catch (error) {
            // agregar una excepcion si la tarea que se quiere modificar no existe
        }
    }

    public static modificarFechaVencimiento(titulo: string): void {
        try {
            let key = titulo.toLowerCase();
            // logica del metodo

            // agregar logica de persistencia en JSON
        } catch (error) {
            // agregar una excepcion si la tarea que se quiere modificar no existe
        }
    }

    public static modificarPrioridad(titulo: string): void {
        try {
            let key = titulo.toLowerCase();
            // logica del metodo

            // agregar logica de persistencia en JSON
        } catch (error) {
            // agregar una excepcion si la tarea que se quiere modificar no existe
        }
    }

    public static modificarPorcentajeAvance(titulo: string): void {
        try {
            let key = titulo.toLowerCase();
            // logica del metodo

            // agregar logica de persistencia en JSON
        } catch (error) {
            // agregar una excepcion si la tarea que se quiere modificar no existe
        }
    }

    public static modificarEtiquetas(titulo: string): void {
        try {
            let key = titulo.toLowerCase();
            // logica del metodo

            // agregar logica de persistencia en JSON
        } catch (error) {
            // agregar una excepcion si la tarea que se quiere modificar no existe
        }
    }

    public static marcarComoCompletado(titulo: string): void {
        try {
            let key = titulo.toLowerCase();
            // logica del metodo

            // agregar logica de persistencia en JSON
        } catch (error) {
            // agregar una excepcion si la tarea que se quiere modificar no existe
        }
    }
} 