import tareaInexistenteError from "./exception/tarea-inexistente-error";
import Tarea from "./tarea";

export default class toDoLista {
    private listaTareas: Tarea[] = [];
    
    public agregarALista(tarea: Tarea): void {
        this.listaTareas.push(tarea);
    }

    public borrarDeLista(tarea: Tarea): void {
        try {
            let inicio = this.listaTareas.indexOf(tarea);
            if (this.listaTareas.indexOf(tarea) === -1) {
                throw new tareaInexistenteError(`la tarea \"${tarea.getTitulo()}\" no se encuentra en la lista`);
            }
            let final = inicio + 1
            this.listaTareas.splice(inicio, final);
        } catch (error) {
            if(error instanceof tareaInexistenteError){
               console.log( error.getMessage())
                // no se si dejarlo como console.log el mensaje o si deberia ser simplemente un return, por los tests 
                //return error.getMessage();
            }
        }
    }

    public borrarPorTitulo(titulo: string) {
        try {
            // let tarea = logica de busqueda por titulo
            // this.borrarDeLista(tarea);
        } catch (error) {
            // la tarea no existe
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