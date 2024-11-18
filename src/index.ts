import Tarea from "./tarea";
import Director from "./director";
import ConstructorTarea from "./constructorTarea";
import ToDoLista from "./toDoList";
import Persistencia from "./persistencia/persistencia";
import { Busqueda } from "./busqueda";
import CalculadoraEstadistica from "./calculadoraEstadistica";
import Ordenamiento from "./ordenamiento";

// Create instances
const constructor = new ConstructorTarea();
const lista = new ToDoLista();
const director = new Director(constructor, lista);
const persistencia = new Persistencia(constructor,lista,director);
const ordenamiento = new Ordenamiento();
const busqueda = new Busqueda();
const calculadora = new CalculadoraEstadistica();

async function main() {
    await persistencia.obtenerBaseDeDatos()
    
    


    persistencia.guardarBaseDeDatos(JSON.stringify(lista.getListaTareas()))
}


main()

