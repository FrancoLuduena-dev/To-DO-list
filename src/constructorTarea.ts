import { Builder } from "./builder";
import { categoria, prioridad } from "./enums";
import Tarea from "./tarea";

/**
 * Clase ConstructorTarea que implementa la interfaz Builder.
 * Esta clase se utiliza para construir instancias de Tarea.
 * @type {Tarea} tarea - La tarea que se está construyendo.
 */
class ConstructorTarea implements Builder {
    /**
     * La tarea que se está construyendo.
     */
    private tarea: Tarea;

    /**
     * Constructor de la clase ConstructorTarea.
     * Inicializa una nueva instancia de Tarea con parametros vacios.
     */
    constructor() {
        this.tarea = new Tarea("", "");
    }

    /**
     * Reinicia la tarea actual con una nueva instancia de Tarea.
     */
    public reset(): void {
        this.tarea = new Tarea("", "");
    }

    /**
     * Configura el título de la tarea.
     * @param {string} titulo - El título de la tarea en construccion.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    public setTitulo(titulo: string): this {
        this.tarea.setTitulo(titulo);
        return this;
    }

    /**
     * Configura la descripción de la tarea en construccion.
     * @param  {string} descripcion - La descripción de la tarea  en construccion.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    public setDescripcion(descripcion: string): this {
        this.tarea.setDescripcion(descripcion);
        return this;
    }

    /**
     * Configura la fecha de vencimiento de la tarea en construccion.
     * @param {Date} fechaVencimiento - La fecha de vencimiento de la tarea  en construccion.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    public setFechaVencimiento(fechaVencimiento: Date | null): this {
        this.tarea.setFechaVencimiento(fechaVencimiento);
        return this;
    }

    /**
     * Configura la fecha que una tarea fue creada (solo para persistencia, no se debe usar en la creacion de tareas, ya que es automatica).
     * @param {Date} fechaCreacion - La fecha de creacion de la tarea  en construccion.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    public setFechaCreacion(fechaCreacion: Date): this {
        this.tarea.setFechaCreacion(fechaCreacion)
        return this;
    }

    /**
     * Configura la fecha que una tarea es marcada como completada (solo para persistencia, no se debe usar en la creacion de tareas, ya que es automatica).
     * @param {Date} fechaFinalizacion - La fecha de finalizacion de la tarea.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    public setFechaFinalizacion(fechaFinalizacion: Date | null): this {
        this.tarea.setFechaFinalizacion(fechaFinalizacion)
        return this;
    }


    /**
     * Configura la prioridad de la tarea en construccion.
     * @param {prioridad} prioridad - La prioridad de la tarea  en construccion ("baja = 0, "media" = 1 y "alta" = 2").
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    public setPrioridad(prioridad: prioridad | null): this {
        this.tarea.setPrioridad(prioridad);
        return this;
    }

    /**
     * Configura si la tarea está completada en construccion.
     * @param {boolean} completado - El estado de completado de la tarea en construccion ("true" si está completada la tarea y "false" si no lo está).
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    public setCompletado(completado: boolean): this {
        this.tarea.setCompletado(completado);
        return this;
    }

    /**
     * Configura el porcentaje de avance de la tarea en construccion.
     * @param {number} porcentaje - El porcentaje de avance de la tarea en construccion.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    public setPorcentajeAvance(porcentaje: number): this {
        this.tarea.setPorcentajeAvance(porcentaje);
        return this;
    }

    /**
     * Configura la categoría de la tarea en construccion.
     * @param {categoria} categoria - La categoría de la tarea en construccion ( "Trabajo" = 0, "Personal" = 1, "Familia" = 2 y "Estudio" = 3).
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    public setCategoria(categoria: categoria | null): this {
        this.tarea.setCategoria(categoria);
        return this;
    }

    /**
     * Configura las etiquetas personalidas por el usuario de la tarea en construccion.
     * @param {string[]} etiqueta - Las etiquetas personalidas por el usuario de la tarea en construccion.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    public setEtiquetas(etiqueta: string[]): this {
        this.tarea.setEtiquetas(etiqueta);
        return this;
    }

    /**
     * Construye la tarea y la devuelve.
     * @returns {Tarea} La tarea construida.
     */
    public construirTarea(): Tarea {
        let resultado = this.tarea;
        this.reset()
        return resultado;
    }

}

export { ConstructorTarea };
export default ConstructorTarea;