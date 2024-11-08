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

    public getTareaDeLista(titulo: string): Tarea | undefined {
        return this.listaTareas.find(t => t.getTitulo() === titulo);
            // cambiarlo por el search hecho de los chicos.
    
    }
    
    


}