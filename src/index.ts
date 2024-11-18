import Tarea from "./tarea";
import Director from "./director";
import ConstructorTarea from "./constructorTarea";
import ToDoLista from "./toDoList";

// Create instances
const constructor = new ConstructorTarea();
const lista = new ToDoLista();
const director = new Director(constructor, lista);

// Use the director to construct a Tarea
constructor.setTitulo("prueba") 
.setDescripcion("probando")
.setFechaVencimiento(new Date("2022-11-05"))
.setPrioridad(1)
.setCategoria(1)
.setCompletado(true)

let tarea1 = director.construirTarea();
console.log(lista);

