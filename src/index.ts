import Tarea from "./tarea";
import Director from "./director";
import ConstructorTarea from "./constructorTarea";
import ToDoLista from "./toDoList";
import Persistencia from "./persistencia/persistencia";
import { Busqueda } from "./busqueda";
import CalculadoraEstadistica from "./calculadoraEstadistica";
import Ordenamiento from "./ordenamiento";
import { categoria, prioridad } from "./enums";

// Crear Instancias
const constructor = new ConstructorTarea();
const lista = new ToDoLista();
const director = new Director(constructor, lista);
const persistencia = new Persistencia(constructor, lista, director);
const ordenamiento = new Ordenamiento();
const busqueda = new Busqueda();
const calculadora = new CalculadoraEstadistica();

async function main() {
    await persistencia.obtenerBaseDeDatos();

    // Ejemplo de creacion de Tarea con el Director
    director.construirTarea(() => {
        constructor.setTitulo("Tarea 1")
            .setDescripcion("Descripción de la Tarea 1")
            .setFechaVencimiento(new Date("2021/11/22"))
            .setPrioridad(prioridad.alta)
            .setCompletado(false)
            .setPorcentajeAvance(25)
            .setCategoria(categoria.Trabajo)
            .setEtiquetas(["importante", "urgente"]);
    });

    console.log(lista.getListaTareas());
    console.log("#################################3")
    
    // Ejemplo de modificaciones de Tarea
    let tarea = lista.getTarea("Tarea 1");
    tarea?.setCompletado(true);
    console.log(lista.getTarea("Tarea 1"));


    persistencia.guardarBaseDeDatos(JSON.stringify(lista.getListaTareas()));
}

main();
