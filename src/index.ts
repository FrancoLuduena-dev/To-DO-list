import Tarea from "./tarea"
import { categoria, prioridad } from "./enums"
import BusquedaYordenamiento from  "./busquedas"

function main(){
    console.log("Hola mundo")
    const servicioTareas = new BusquedaYordenamiento();
    
    const  tarea1 = new Tarea("Comprar leche", "En carrefour", new Date('2024-11-02'), prioridad.baja, categoria.Personal);
    const tarea2 = new Tarea("Salir a correr", "1 hora", new Date('2024-11-01'), prioridad.alta, categoria.Personal);

    servicioTareas.agregarTarea(tarea1)
    servicioTareas.agregarTarea(tarea2)

    console.log(servicioTareas.buscarPorTitulo)
}