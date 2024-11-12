import { categoria, prioridad } from "./enums";
import EtiquetaInexistenteError from "./exception/etiqueta-inexistente-error";

export default class Tarea {
    private titulo: string;
    private descripcion: string;
    private fechaVencimiento: Date | null;
    private fechaCreacion: Date = new Date();
    private fechaFinalizacion: Date | null = null;
    private prioridad: prioridad | null;
    private completado: boolean = false;
    private porcentajeAvance: number = 0;
    private categoria: categoria | null;
    private etiquetas: string[] = [];

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

    // Getters
    public getTitulo(): string {
        return this.titulo;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public getFechaVencimiento(): Date |  null{
        return this.fechaVencimiento;
    }

    public getFechaCreacion(): Date {
        return this.fechaCreacion;
    }

    public getFechaFinalizacion(): Date | null {
        return this.fechaFinalizacion;
    }

    public getPrioridad(): prioridad |  null{
        return this.prioridad;
    }

    public getCompletado(): boolean {
        return this.completado;
    }

    public getPorcentajeAvance(): number {
        return this.porcentajeAvance;
    }

    public getCategoria(): categoria |  null {
        return this.categoria;
    }

    public getEtiquetas(): string[] {
        return this.etiquetas;
    }

    // Setters
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public setFechaVencimiento(fechaVencimiento: Date | null): void {
        this.fechaVencimiento = fechaVencimiento;
    }


    public setPrioridad(prioridad: prioridad): void {
        this.prioridad = prioridad;
    }

    public setCompletado(completado: boolean): void {
        this.completado = completado;
        if (this.completado === true){
            this.fechaFinalizacion = new Date();
            this.porcentajeAvance = 100;
        }
    }

    public setPorcentajeAvance(porcentajeAvance: number): void {
        this.porcentajeAvance = porcentajeAvance;
        if (this.porcentajeAvance === 100){
            this.completado = true;
            this.fechaFinalizacion = new Date();
        }
    }

    public setCategoria(categoria: categoria): void {
        this.categoria = categoria;
    }

    public setEtiquetas(etiquetas: string[]): void {
        this.etiquetas = etiquetas;
    }

    public agregarEtiqueta(etiqueta: string): void {
        this.etiquetas.push(etiqueta);
    }

    public borrarEtiqueta(etiqueta: string): void {
        try {
            let inicio = this.etiquetas.indexOf(etiqueta);
            if (inicio === -1) {
                throw new EtiquetaInexistenteError(`la tarea no posee la etiqueta:  \"${etiqueta}\"`);
            }
            this.etiquetas.splice(inicio, 1);
        }
        catch (error) {
            if (error instanceof EtiquetaInexistenteError) {
                console.log(error.message);
            }
        }
    }
}
