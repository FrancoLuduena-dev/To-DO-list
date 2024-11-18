import { categoria, prioridad } from "./enums";
import EtiquetaInexistenteError from "./exception/etiqueta-inexistente-error";

/**
 * Clase que representa una tarea para la aplicación de Lista de Tareas.
 */
class Tarea {
    /**
     * @type {string} El título de la tarea.
     */
    private titulo: string;

    /**
     * @type {string} La descripción de la tarea.
     */
    private descripcion: string;

    /**
     * @type {Date | null} La fecha de vencimiento de la tarea.
     */
    private fechaVencimiento: Date | null;

    /**
     * @type {Date} La fecha de creación de la tarea.
     */
    private fechaCreacion: Date = new Date();

    /**
     * @type {Date | null} La fecha que la tarea fue marcada como finalizada.
     */
    private fechaFinalizacion: Date | null = null;

    /**
     * @type {prioridad | null} La prioridad de la tarea ("baja = 0, "media" = 1 y "alta" = 2").
     */
    private prioridad: prioridad | null;

    /**
     * @type {boolean} Indica si la tarea está completada ("true" si está completada la tarea y "false" si no lo está).
     */
    private completado: boolean = false;

    /**
     * @type {number} El porcentaje de avance de la tarea.
     */
    private porcentajeAvance: number = 0;

    /**
     * @type {categoria | null} La categoría de la tarea ( "Trabajo" = 0, "Personal" = 1, "Familia" = 2 y "Estudio" = 3).
     */
    private categoria: categoria | null;

    /**
     * @type {string[]} Las etiquetas de la tarea.
     */
    private etiquetas: string[] = [];

    /**
     * Constructor de la clase Tarea.
     * @param {string} titulo - El título de la tarea.
     * @param {string} descripcion - La descripción de la tarea.
     * @param {Date | null} fechaVencimiento - La fecha de vencimiento de la tarea.
     * @param {prioridad | null} prioridad - La prioridad de la tarea ("baja = 0, "media" = 1 y "alta" = 2").
     * @param {categoria | null} categoria - La categoría de la tarea ( "Trabajo" = 0, "Personal" = 1, "Familia" = 2 y "Estudio" = 3).
     */
    constructor(
        titulo: string, 
        descripcion: string, 
        fechaVencimiento: Date | null, 
        prioridad: prioridad | null, 
        categoria: categoria | null,
    ) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaVencimiento = fechaVencimiento;
        this.prioridad = prioridad;
        this.categoria = categoria;
    }

    /**
     * Devuelve el título de la tarea.
     * @returns {string} El título de la tarea.
     */
    public getTitulo(): string {
        return this.titulo;
    }

    /**
     * Devuelve la descripción de la tarea.
     * @returns {string} La descripción de la tarea.
     */
    public getDescripcion(): string {
        return this.descripcion;
    }

    /**
     * Devuelve la fecha de vencimiento de la tarea.
     * @returns {Date | null} La fecha de vencimiento de la tarea.
     */
    public getFechaVencimiento(): Date | null {
        return this.fechaVencimiento;
    }

    /**
     * Devuelve la fecha de creación de la tarea.
     * @returns {Date} La fecha de creación de la tarea.
     */
    public getFechaCreacion(): Date {
        return this.fechaCreacion;
    }

    /**
     * Devuelve la fecha de finalización de la tarea.
     * @returns {Date | null} La fecha que la tarea fue marcada como finalizada.
     */
    public getFechaFinalizacion(): Date | null {
        return this.fechaFinalizacion;
    }

    /**
     * Devuelve la prioridad de la tarea.
     * @returns {prioridad | null} La prioridad de la tarea ("baja = 0, "media" = 1 y "alta" = 2").
     */
    public getPrioridad(): prioridad | null {
        return this.prioridad;
    }

    /**
     * Indica si la tarea está completada.
     * @returns {boolean} "true" si está completada la tarea y "false" si no lo está.
     */
    public getCompletado(): boolean {
        return this.completado;
    }

    /**
     * Devuelve el porcentaje de avance de la tarea.
     * @returns {number} El porcentaje de avance de la tarea.
     */
    public getPorcentajeAvance(): number {
        return this.porcentajeAvance;
    }

    /**
     * Devuelve la categoría de la tarea.
     * @returns {categoria | null} La categoría de la tarea ( "Trabajo" = 0, "Personal" = 1, "Familia" = 2 y "Estudio" = 3).
     */
    public getCategoria(): categoria | null {
        return this.categoria;
    }

    /**
     * Devuelve las etiquetas personalizadas de la tarea.
     * @returns {string[]} Las etiquetas personalizadas de la tarea.
     */
    public getEtiquetas(): string[] {
        return this.etiquetas;
    }

    /**
     * Configura el título de la tarea.
     * @param {string} titulo - El nuevo título de la tarea.
     */
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    /**
     * Configura la descripción de la tarea.
     * @param {string} descripcion - La nueva descripción de la tarea.
     */
    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    /**
     * Configura la fecha de vencimiento de la tarea.
     * @param {Date | null} fechaVencimiento - La nueva fecha de vencimiento de la tarea.
     */
    public setFechaVencimiento(fechaVencimiento: Date | null): void {
        this.fechaVencimiento = fechaVencimiento;
    }

    /**
     * Configura la prioridad de la tarea.
     * @param {prioridad} prioridad - La nueva prioridad de la tarea ("baja = 0, "media" = 1 y "alta" = 2").
     */
    public setPrioridad(prioridad: prioridad): void {
        this.prioridad = prioridad;
    }

    /**
     * Configura si la tarea está completada.
     * @param {boolean} completado - "true" si está completada la tarea y "false" si no lo está.
     */
    public setCompletado(completado: boolean): void {
        this.completado = completado;
        if (this.completado && this.porcentajeAvance !== 100) {
            this.fechaFinalizacion = new Date();
            this.setPorcentajeAvance(100);
        }
    }

    /**
     * Configura el porcentaje de avance de la tarea.
     * @param {number} porcentajeAvance - El nuevo porcentaje de avance de la tarea.
     */
    public setPorcentajeAvance(porcentajeAvance: number): void {
        this.porcentajeAvance = porcentajeAvance;
        if (this.porcentajeAvance === 100 && !this.completado) {
            this.setCompletado(true);
            this.fechaFinalizacion = new Date();
        }
    }

    /**
     * Configura la categoría de la tarea.
     * @param {categoria} categoria - La nueva categoría de la tarea ( "Trabajo" = 0, "Personal" = 1, "Familia" = 2 y "Estudio" = 3).
     */
    public setCategoria(categoria: categoria): void {
        this.categoria = categoria;
    }

    /**
     * Configura las etiquetas de la tarea.
     * @param {string[]} etiquetas - Las nuevas etiquetas de la tarea.
     */
    public setEtiquetas(etiquetas: string[]): void {
        this.etiquetas = etiquetas;
    }

    /**
     * Agrega una etiqueta a la tarea.
     * @param {string} etiqueta - La etiqueta a agregar.
     */
    public agregarEtiqueta(etiqueta: string): void {
        this.etiquetas.push(etiqueta);
    }

    /**
     * Borra una etiqueta de la tarea.
     * @param {string | void} etiqueta - La etiqueta a borrar.
     * @returns Un mensaje de error si la etiqueta no existe, de lo contrario no retorna nada.
     */
    public borrarEtiqueta(etiqueta: string): string | void {
        try {
            let inicio = this.etiquetas.indexOf(etiqueta);
            if (inicio === -1) {
                throw new EtiquetaInexistenteError(`la tarea no posee la etiqueta:  \"${etiqueta}\"`);
            }
            this.etiquetas.splice(inicio, 1);
        }
        catch (error) {
            if (error instanceof EtiquetaInexistenteError) {
                return error.message;
            }
        }
    }
}

export { Tarea };
export default Tarea;