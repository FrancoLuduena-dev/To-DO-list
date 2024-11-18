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
     * @param titulo - El título de la tarea a construir.
     */
    setTitulo(titulo: string): void;

    /**
     * Configura la descripción de la tarea a construir.
     * @param descripcion - La descripción de la tarea a construir.
     */
    setDescripcion(descripcion: string): void;

    /**
     * Configura la fecha de vencimiento de la tarea a construir.
     * @param fechaVencimiento - La fecha de vencimiento de la tarea a construir.
     */
    setFechaVencimiento(fechaVencimiento: Date): void;

    /**
     * Configura la prioridad de la tarea a construir.
     * @param prioridad - La prioridad de la tarea a construir.
     */
    setPrioridad(prioridad: prioridad): void;

    /**
     * Configura la categoría de la tarea a construir.
     * @param categoria - La categoría de la tarea a construir.
     */
    setCategoria(categoria: categoria): void;

    /**
     * Configura las etiquetas de la tarea a construir.
     * @param etiquetas - Las etiquetas de la tarea a construir.
     */
    setEtiquetas(etiquetas: string[]): void;

    /**
     * Construye y retorna la tarea.
     * @returns La tarea construida.
     */
    construirTarea(): Tarea;
}

export { Builder };
export default Builder;