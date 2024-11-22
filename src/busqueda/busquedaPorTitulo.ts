
import Busqueda from "../busqueda";
import Tarea from "../tarea";

class BusquedaPorTitulo implements Busqueda{
/**
 * Metodo para buscar una tarea por titulo ingresado`
 * @param {string} titulo Titulo de la tarea
 * @returns {Tarea} devuelve la tarea que coincida con el titulo
 */
    public buscar(tareas:Tarea[], titulo: string): Tarea[]{
        return  tareas.filter(tarea => 
            tarea.getTitulo().toLowerCase().includes(titulo.toLowerCase()));
    }
}


export { BusquedaPorTitulo };
export default BusquedaPorTitulo;
