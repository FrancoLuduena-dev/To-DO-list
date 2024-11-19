import { categoria, prioridad } from "./enums";
import Tarea from "./tarea";

/**
 * Interfaz que define los métodos para construir una tarea.
 */
interface Builder {
    /**
     * Reinicia el estado del constructor.
     */
    reset(): void;

    /**
     * Configura el título de la tarea a construir.
     * @param {string} titulo - El título de la tarea a construir.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    setTitulo(titulo: string): void;

    /**
     * Configura la descripción de la tarea a construir.
     * @param {string} descripcion - La descripción de la tarea a construir.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    setDescripcion(descripcion: string): this;

 /**
     * Configura la fecha que una tarea fue creada (solo para persistencia, no se debe usar en la creacion de tareas, ya que es automatica).
     * @param {Date} fechaCreacion - La fecha de creacion de la tarea  en construccion.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    setFechaCreacion(fechaCreacion: Date): this;

    /**
     * Configura la fecha de vencimiento de la tarea a construir.
     * @param {Date} fechaVencimiento - La fecha de vencimiento de la tarea a construir.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    setFechaVencimiento(fechaVencimiento: Date | null): this;

        /**
     * Configura la fecha que una tarea es marcada como completada (solo para persistencia, no se debe usar en la creacion de tareas, ya que es automatica).
     * @param {Date} fechaFinalizacion - La fecha de finalizacion de la tarea.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    setFechaFinalizacion(fechaFinalizacion: Date): this;

    /**
     * Configura la prioridad de la tarea a construir.
     * @param {prioridad} prioridad - La prioridad de la tarea a construir.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    setPrioridad(prioridad: prioridad): this;

    /**
     * Configura la categoría de la tarea a construir.
     * @param {categoria} categoria - La categoría de la tarea a construir.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    setCategoria(categoria: categoria): this;

    /**
     * Configura las etiquetas de la tarea a construir.
     * @param {string[]} etiquetas - Las etiquetas de la tarea a construir.
     * @returns La instancia actual de ConstructorTarea para poder concatenar.
     */
    setEtiquetas(etiquetas: string[]): this;

    /**
     * Construye y retorna la tarea.
     * @returns {Tarea} La tarea construida.
     */
    construirTarea(): Tarea;
}

export { Builder };
export default Builder;