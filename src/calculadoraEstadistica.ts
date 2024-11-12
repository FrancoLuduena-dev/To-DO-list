import toDoList from "./toDoList";
import tarea from "./tarea";

class calculadoraEstadistica {
    private tasaFinalizacion: number = 0;
    private numeroTareasCompletadas: number = 0;
    private numeroTareasTotales: number = 0;
    private listadoTiempoDedicadoXTarea = new Map<tarea, number>;
    private tiempoDedicadoATareas: number = 0;

    public calcularTasa(listaTareas: toDoList): number {
        for (let i = 0; i < listaTareas.getListaTareas().length; i++) {
            if (listaTareas.getListaTareas()[i].getCompletado() === true) {
                this.numeroTareasCompletadas++;
            }
            this.numeroTareasTotales++;
        }

        return (this.numeroTareasCompletadas / this.numeroTareasTotales) * 100;
    }

    public calcularTiempoDedicado(listaTareas: toDoList): Map<tarea, number> {

        for (let i = 0; i < listaTareas.getListaTareas().length; i++) {
            if (listaTareas.getListaTareas()[i].getCompletado() === true) {
                let diferencia = listaTareas.getListaTareas()[i].getFechaFinalizacion()?.getTime() ? - listaTareas.getListaTareas()[i].getFechaCreacion().getTime() : null;
                if (diferencia !== null) {
                    diferencia = diferencia / (1000 * 60 * 60 * 24);
                    this.listadoTiempoDedicadoXTarea.set(listaTareas.getListaTareas()[i], diferencia);
                }
            } else {
                let currentDate = new Date();
                let diferencia = currentDate.getTime() - listaTareas.getListaTareas()[i].getFechaCreacion().getTime();
                diferencia = diferencia / (1000 * 60 * 60 * 24);
                this.listadoTiempoDedicadoXTarea.set(listaTareas.getListaTareas()[i], diferencia);
            }
        }

        return this.listadoTiempoDedicadoXTarea;
    }
}