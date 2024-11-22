import Busqueda from "../busqueda";
import Tarea from "../tarea";

class BusquedaPorEtiqueta implements Busqueda {
    
    /** Metodo para buscar una tarea por fecha de vencimiento
    * @param {Date}  fecha Fecha que se desea buscar una tarea
    * @returns {Tarea[]} Devuelve las tareas que coincidan con la fecha en formato array
    */
    public buscar(tareas: Tarea[], etiqueta: string): Tarea[] {
        return tareas.filter(tarea =>
            tarea.getEtiquetas().some(etiquetaTarea =>
                etiquetaTarea.toLowerCase() === etiqueta.toLowerCase()
            )
        );
    }
}

export { BusquedaPorEtiqueta };
export default BusquedaPorEtiqueta;