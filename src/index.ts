import Tarea from "./tarea";
import Director from "./director";
import ConstructorTarea from "./constructorTarea";
import ToDoLista from "./toDoList";
import Persistencia from "./persistencia/persistencia";
import { Busqueda } from "./busqueda";
import CalculadoraEstadistica from "./calculadoraEstadistica";
import Ordenamiento from "./ordenamiento";
import { categoria, prioridad } from "./enums";
import ModificadorTarea from "./modificadorTarea";
import BusquedaPorTitulo from "./busqueda/busquedaPorTitulo";
import BusquedaPorEtiqueta from "./busqueda/busquedaPorEtiqueta";
import BusquedaPorVencimiento from "./busqueda/busquedaPorVencimiento";

// Crear Instancias
const constructor = new ConstructorTarea();
const lista = new ToDoLista();
const director = new Director(constructor);
const persistencia = new Persistencia(constructor, lista, director);
const calculadora = new CalculadoraEstadistica();
const busquedaPorTitulo = new BusquedaPorTitulo();
const busquedaPorEtiquetas = new BusquedaPorEtiqueta();
const busquedaPorVencimiento = new BusquedaPorVencimiento();

async function main() {
    await persistencia.obtenerBaseDeDatos();

    console.log(lista.getListaTareas());
    console.log("#################################");

    
    // Ejemplo de creacion de Tarea con el Director
    let tareaACrear = director.construirTarea(() => {
        constructor.setTitulo("Tarea 1")
            .setDescripcion("Descripción de la Tarea 1")
            .setFechaVencimiento(new Date("2021/11/22"))
            .setPrioridad(prioridad.alta)
            .setCompletado(false)
            .setPorcentajeAvance(25)
            .setCategoria(categoria.Trabajo)
            .setEtiquetas(["importante", "urgente"]);
    });
    lista.agregarAListas(tareaACrear);

    console.log(lista.getListaTareas());
    console.log("#################################");

    // Ejemplo de modificaciones de Tarea

    let tareaModificable = lista.getTarea("Tarea 1")!;
    console.log(tareaModificable);
    console.log("###############################")
    let modificador = new ModificadorTarea(tareaModificable);
    modificador.setTarea(tareaModificable);
    modificador.setTitulo("Nuevo titulo Tarea1")
        .setCategoria(categoria.Personal)
        .agregarEtiqueta("nueva etiqueta")
        .borrarEtiqueta("urgente");
    console.log("Tarea modificada \n", tareaModificable);
    console.log("###############################")
    console.log(lista.getListaTareas());


    // Ejemplo de busquedas
    console.log("###############################")
    console.log("Resultados de búsqueda por título 'Reunión con el equipo de marketing':");
    console.log(busquedaPorTitulo.buscar(lista.getListaTareas(), "Reunión con el equipo de marketing"));
    console.log("###############################")


    console.log("Resultados de búsqueda por etiquetas 'etiquetaA':");
    console.log(busquedaPorEtiquetas.buscar(lista.getListaTareas(), "etiquetaA"));
    console.log("###############################")

    console.log("Resultados de búsqueda por fecha de vencimiento '2024/10/25':");
    console.log(busquedaPorVencimiento.buscar(lista.getListaTareas(), new Date("2024/10/25")));

    // Ejemplo de ordenamiento por título
    console.log("Ordenamiento por título:");
    const tareasOrdenadasPorTitulo = lista.getListaTareas().sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
    lista.setListaTareas(tareasOrdenadasPorTitulo);
    console.log(lista.getListaTareas());
    console.log("###############################");






    persistencia.guardarBaseDeDatos(JSON.stringify(lista.getListaTareas()));
}

main();
