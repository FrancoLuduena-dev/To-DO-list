import TareaInexistenteError from "./exception/tarea-inexistente-error";
import Tarea from "./tarea";

export default class ToDoLista {
    private listaTareas: Tarea[] = [];
    
    public agregarALista(tarea: Tarea): void {
        this.listaTareas.push(tarea);
    }

    public borrarDeLista(tarea: Tarea): void {
        try {
            let inicio = this.listaTareas.indexOf(tarea);
            if (inicio === -1) {
                throw new TareaInexistenteError(`la tarea \"${tarea.getTitulo()}\" no se encuentra en la lista`);
            }
            this.listaTareas.splice(inicio, 1);
        } catch (error) {
            if(error instanceof TareaInexistenteError){
               console.log(error.message);
                // no se si dejarlo como console.log el mensaje o si deberia ser simplemente un return, por los tests 
                //return error.message;
            }
        }
    }

    public borrarPorTitulo(titulo: string) {
        try {
            const tarea: Tarea | undefined = this.listaTareas.find(t => t.getTitulo() === titulo);
            if (!tarea) {
                throw new TareaInexistenteError(`la tarea con el título \"${titulo}\" no se encuentra en la lista`);
            }
            this.borrarDeLista(tarea);
        } catch (error) {
            if (error instanceof TareaInexistenteError) {
                console.log(error.message);
            }
        }
    }

    // falta, si vamos a ponerlos al final listaTareasCompletadas[] y listaTareasPendientes[], o sino podemos hacer metodos que solo devuelvan de la lista los objetos que completado === true y completado !== true

    /*
        public static agregarTareaALista(titulo: string, tarea: Tarea): void{
            this.( tarea);
        }
    
        public static getTareaDeLista(titulo: string): Tarea | undefined {
            return toDoLista.listaTareas.get(titulo);   
            // ver si puedo hacer un return mejor: la fecha imprime horas y minutos y segundos, y prioridad y categoria ver que lo imprima como el nombre, no un number
        
        }
    
        public static getTitulosDeTareas(): string[]{
            return Array.from(toDoLista.listaTareas.keys());
        }
    */



}