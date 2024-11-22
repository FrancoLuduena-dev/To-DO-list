import toDoList from "./toDoList";
import tarea from "./tarea";
import TareaInexistenteError from "./exception/tarea-inexistente-error";

/**
 * Clase encargada de calcular estadísticas relacionadas con las tareas.
 * Proporciona métodos para calcular la tasa de tareas completadas y el tiempo dedicado a cada tarea.
 */
class CalculadoraEstadistica {
    /**
     * Número de tareas completadas.
     * @private
     */
    private numeroTareasCompletadas: number = 0;

    /**
     * Número total de tareas.
     * @private
     */
    private numeroTareasTotales: number = 0;

    /**
     * Mapa que asocia cada tarea con el tiempo dedicado en días.
     * @private
     */
    private listadoTiempoDedicadoXTarea = new Map<tarea, number>();

    /**
     * Calcula la tasa de tareas completadas en porcentaje.
     * 
     * @param listaTareas - Una instancia de `toDoList` que contiene la lista de tareas.
     * @returns El porcentaje de tareas completadas, o 0 si no hay tareas.
     */
    public calcularTasa(listaTareas: toDoList): number {
        if (listaTareas.getListaTareas().length !== 0) {
            this.numeroTareasTotales = 0;
            this.numeroTareasCompletadas = 0;
            for (let i = 0; i < listaTareas.getListaTareas().length; i++) {
                if (listaTareas.getListaTareas()[i].getCompletado() === true) {
                    this.numeroTareasCompletadas++;
                }
                this.numeroTareasTotales++;
            }

            return (this.numeroTareasCompletadas / this.numeroTareasTotales) * 100;
        } else {
            return 0;
        }
    }

    /**
     * Calcula el tiempo dedicado a cada tarea en días.
     * 
     * - Si la tarea está completada, se calcula la diferencia entre la fecha de creación y finalización.
     * - Si la tarea no está completada, se calcula la diferencia entre la fecha de creación y la fecha actual.
     * 
     * @param listaTareas - Una instancia de `toDoList` que contiene la lista de tareas.
     * @returns Un mapa donde cada tarea se asocia con el tiempo dedicado en días.
     */
    public calcularTiempoDedicado(listaTareas: toDoList): Map<tarea, number> {
        this.listadoTiempoDedicadoXTarea = new Map();

        for (let i = 0; i < listaTareas.getListaTareas().length; i++) {
            if (listaTareas.getListaTareas()[i].getCompletado() === true) {
                const finalizacionMilisegundos = listaTareas.getListaTareas()[i].getFechaFinalizacion()!.getTime();
                const creacionMilisegundos = listaTareas.getListaTareas()[i].getFechaCreacion().getTime();
                const diferenciaMilisegundos = finalizacionMilisegundos - creacionMilisegundos;
                const diferenciaDias = Math.floor(diferenciaMilisegundos / (24 * 60 * 60 * 1000));
                this.listadoTiempoDedicadoXTarea.set(listaTareas.getListaTareas()[i], diferenciaDias);
            } else {
                const currentDate = new Date();
                const diferencia = Math.floor((currentDate.getTime() - listaTareas.getListaTareas()[i].getFechaCreacion().getTime()) / (24 * 60 * 60 * 1000));
                this.listadoTiempoDedicadoXTarea.set(listaTareas.getListaTareas()[i], diferencia);
            }
        }

        return this.listadoTiempoDedicadoXTarea;
    }
}

export { CalculadoraEstadistica };
export default CalculadoraEstadistica;

