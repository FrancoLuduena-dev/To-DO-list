import toDoList from "./toDoList";
import tarea from "./tarea";
import TareaInexistenteError from "./exception/tarea-inexistente-error";

class CalculadoraEstadistica {
    private numeroTareasCompletadas: number = 0;
    private numeroTareasTotales: number = 0;
    private listadoTiempoDedicadoXTarea = new Map<tarea, number>;

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

    public calcularTiempoDedicado(listaTareas: toDoList): Map<tarea, number> {
        
        this.listadoTiempoDedicadoXTarea = new Map();

        for (let i = 0; i < listaTareas.getListaTareas().length; i++) {

            if (listaTareas.getListaTareas()[i].getCompletado() === true) {

                let finalizacionMilisegundos = listaTareas.getListaTareas()[i].getFechaFinalizacion()!.getTime();
                let creacionMilisegundos = listaTareas.getListaTareas()[i].getFechaCreacion().getTime();
                let diferenciaMilisegundos = finalizacionMilisegundos - creacionMilisegundos;
                const diferenciaDias = Math.floor(diferenciaMilisegundos / (24 * 60 * 60 * 1000));
                this.listadoTiempoDedicadoXTarea.set(listaTareas.getListaTareas()[i], diferenciaDias);

            } else {
                let currentDate = new Date();
                let diferencia = Math.floor((currentDate.getTime() - listaTareas.getListaTareas()[i].getFechaCreacion().getTime()) / (24 * 60 * 60 * 1000));
                this.listadoTiempoDedicadoXTarea.set(listaTareas.getListaTareas()[i], diferencia);
            }
        }

        return this.listadoTiempoDedicadoXTarea;
    }
}


export { CalculadoraEstadistica };
export default CalculadoraEstadistica;
