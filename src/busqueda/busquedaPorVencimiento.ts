import Busqueda from "../busqueda";
import Tarea from "../tarea";

class BusquedaPorVencimiento implements Busqueda {
    /**
     * Metodo para realizar una busqueda basada en una fecha de vencimiento en particular
     * @param {Date} fecha Fecha de vencimiento que se desea buscar 
     * @returns {Tarea[]} Devuelve un array de tareas que cumplan con la fecha de vencimiento pasada por parametro
     */
    public buscar(tareas: Tarea[], fecha: Date): Tarea[] {
        return tareas.filter(tarea => {
            const tareaFecha = tarea.getFechaVencimiento();
            // Verifico si la fecha de vencimiento es null
            if (tareaFecha === null) return false;

            const acertado = (
                tareaFecha.getFullYear() === fecha.getFullYear() &&
                tareaFecha.getMonth() === fecha.getMonth() &&
                tareaFecha.getDate() === fecha.getDate()
            );

            return acertado;
        });
    }
}

export { BusquedaPorVencimiento };
export default BusquedaPorVencimiento;