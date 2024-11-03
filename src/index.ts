import Tarea from "./tarea"
import toDoLista from "./toDoList"

console.log("Hola mundo")
let tarea1 = new Tarea("prueba", "probando", new Date("2022-11-05"), 1, 0);
let prueba = new toDoLista();
prueba.agregarALista(tarea1);
console.log(prueba);
prueba.borrarDeLista(tarea1);
console.log(prueba);
prueba.borrarDeLista(tarea1);