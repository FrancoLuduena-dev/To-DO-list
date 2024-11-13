import Tarea from "./tarea"
import toDoLista from "./toDoList"
import  Persistencia  from "./persistencia/persistencia";
import  Ordenamiento  from "./ordenamiento";


console.log("Hola mundo")
let tarea1 = new Tarea("prueba", "probando", new Date("2022-11-05"), 1, 0);
let prueba = new toDoLista();

async function main() {
    let base_de_datos = await Persistencia.obtenerBaseDeDatos()

    base_de_datos.tareas[0].titulo = "Probando!!!"

    Persistencia.guardarBaseDeDatos(JSON.stringify(base_de_datos))


}



main()

