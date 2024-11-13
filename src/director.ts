import ConstructorTarea from "./constructorTarea";
import { prioridad, categoria } from "./enums";
import Tarea from "./tarea";
import ToDoLista from "./toDoList";

class Director {
    private builder: ConstructorTarea;
    private lista: ToDoLista;

    constructor(builder: ConstructorTarea, lista: ToDoLista) {
        this.builder = builder;
        this.lista = lista;
        // aca se pone el tipo de builder, por ahora solo estoy creando uno, el ConstructorTarea
    }

    public setBuilder(builder: ConstructorTarea): void {
        this.builder = builder;
    }

    public construirTareaCompleta(): Tarea {
        let resultado = this.builder.construirTarea();
        this.lista.agregarALista(resultado);
        this.builder.reset();
        return resultado;
    }
}

export { Director };
export default Director;