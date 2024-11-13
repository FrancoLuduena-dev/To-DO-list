import { Builder } from "./builder";
import { categoria, prioridad } from "./enums";
import Tarea from "./tarea";

class ConstructorTarea implements Builder {
    private tarea: Tarea;

    constructor() {
        this.tarea = new Tarea("", "", null, null, null);
    }

    public reset(): void {
        this.tarea = new Tarea("", "", null, null, null);
    }

    public setTitulo(titulo: string): this {
        this.tarea.setTitulo(titulo);
        return this;
    }

    public setDescripcion(descripcion: string): this {
        this.tarea.setDescripcion(descripcion);
        return this;
    }

    public setFechaVencimiento(fechaVencimiento: Date): this {
        this.tarea.setFechaVencimiento(fechaVencimiento);
        return this;
    }

    public setPrioridad(prioridad: prioridad): this {
        this.tarea.setPrioridad(prioridad);
        return this;
    }


    public setCompletado(completado: boolean): this {
        this.tarea.setCompletado(completado);
        return this;
    }

    public setPorcentajeAvance(porcentaje: number): this {
        this.tarea.setPorcentajeAvance(porcentaje);
        return this;
    }

    public setCategoria(categoria: categoria): this {
        this.tarea.setCategoria(categoria);
        return this;
    }

    public setEtiquetas(etiqueta: string[]): this {
        this.tarea.setEtiquetas(etiqueta);
        return this;
    }

    public construirTarea(): Tarea {
        return this.tarea;
    }
}



export { ConstructorTarea };
export default ConstructorTarea;