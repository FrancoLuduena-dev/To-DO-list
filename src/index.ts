import Tarea from "./tarea"
import toDoLista from "./toDoList"
import  Persistencia  from "./persistencia/persistencia";
import  Ordenamiento  from "./ordenamiento";
import { Busqueda } from "./busqueda";
import Director from "./director";
import ConstructorTarea from "./constructorTarea";


let tarea1 = new Tarea("prueba", "probando", new Date("2022-11-05"), 1, 0);
let prueba = new toDoLista();
let ordentamiento = new Ordenamiento()
const constructor = new ConstructorTarea()
const director = new Director(constructor, prueba)
let tarea2 = director.construirTareaCompleta()


async function main() {
    let datos = await Persistencia.obtenerBaseDeDatos();

    prueba.setListaTareas(datos);

    prueba.borrarPorTitulo("prueba")
    
    

   Persistencia.guardarBaseDeDatos(JSON.stringify(prueba.getListaTareas()))



}

main()

