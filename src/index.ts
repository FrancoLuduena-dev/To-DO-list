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
.setCompletado(true);
director.construirTarea();

constructor.setTitulo("segunda tarea") 
.setDescripcion("prueba de tarea 2")
.setFechaVencimiento(new Date("2021-10-03"))
.setPrioridad(0)
.setCategoria(0);
director.construirTarea();

console.log("-----------------------")
lista.getTarea("prueba")?.agregarEtiqueta("prueba");
lista.getTarea("prueba")?.agregarEtiqueta("prueba 2");
console.log(lista);
console.log("-----------------------")
lista.getTarea("prueba")?.borrarEtiqueta("prueba");
console.log(lista.getListaTareas());
let pruebaError = lista.getTarea("prueba 2")?.borrarEtiqueta("prueba");
console.log(pruebaError);

lista.borrarPorTitulo("prueba");
console.log(lista);