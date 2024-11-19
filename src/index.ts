import Tarea from "./tarea";
import Director from "./director";
import ConstructorTarea from "./constructorTarea";
import ToDoLista from "./toDoList";
import Persistencia from "./persistencia/persistencia";
import { Busqueda } from "./busqueda";
import CalculadoraEstadistica from "./calculadoraEstadistica";
import Ordenamiento from "./ordenamiento";
import { categoria, prioridad } from "./enums";

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
    
    console.log(lista.getListaTareas())

    //lista.getTarea("Reunión con el equipo de marketing")?.setCompletado(true);
    // console.log(lista.getTarea("Reunión con el equipo de marketing"))

    constructor.setTitulo("Tarea 1")
    .setDescripcion("Descripción de la Tarea 1")
    .setFechaVencimiento(new Date("2021/11/22"))
    .setPrioridad(prioridad.alta)
    .setCompletado(false)
    .setPorcentajeAvance(25)
    .setCategoria(categoria.Trabajo)
    .setEtiquetas(["importante", "urgente"]);

    director.construirTarea();

    console.log(lista.getTarea("Tarea 1"));
    console.log("###############################################");

    lista.getTarea("Tarea 1")?.setCompletado(true); 
    console.log(lista.getTarea("Tarea 1")); 


// console.log(lista.getTarea("probando nuevamente"))


    persistencia.guardarBaseDeDatos(JSON.stringify(lista.getListaTareas()))
}


main()


