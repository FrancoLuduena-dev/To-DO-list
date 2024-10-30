import Tarea from "./tarea";
import { categoria, prioridad } from "./enums";
import toDoLista from "./toDoList";


export default class AdministrarTarea{
    constructor(){}; 
    public agregarTarea(
        titulo: string, 
        descripcion: string, 
        fechaVencimiento: Date, 
        prioridad: prioridad, 
        categoria: categoria
    ){
        const tarea = new Tarea(titulo, descripcion, fechaVencimiento, prioridad, categoria);
        toDoLista.agregarTareaALista(tarea.getTitulo(), tarea);
    }

    public borrarTarea(){
// logica del metodo
    } 
    
    public modificarTitulo(){
// logica del metodo
// acabo de buscar, y no se puede modificar la key una vez creada, lo que hay que hacer es generar el objeto de vuelta, con el titulo (key) nuevos (tanto el key que se llame como el titulo nuevo, como el tarea.titulo con el titulo nuevo), y despues borrar el objeto viejo.
    }

    public modificarDescripcion(){
// logica del metodo
    }

    public modificarFechaVencimiento(){
// logica del metodo
    }

    public modificarPrioridad(){
// logica del metodo
    }

    public modificarPorcentajeAvance(){
// logica del metodo
    }

    public modificarEtiquetas(){
// logica del metodo
    }

    public marcarComoCompletado(){
// logica del metodo
    }

}