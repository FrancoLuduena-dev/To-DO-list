
import { categoria, prioridad } from "./enums";


export default class Tarea {
    private titulo: string;
    private descripcion:string;
    private fechaVencimiento:Date;
    private fechaCreacion:Date = new Date();
    private prioridad:prioridad;
    private completado: boolean = false;
    private porcentajeAvance: number = 0;
    private categoria: categoria;
    private etiqueta: string[] = [] 

    
    constructor(
        titulo: string, 
        descripcion: string, 
        fechaVencimiento: Date, 
        prioridad: prioridad, 
        categoria: categoria
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

    public getFechaVencimiento(): Date {
        return this.fechaVencimiento;
    }

    public getFechaCreacion(): Date {
        return this.fechaCreacion;
    }

    public getPrioridad(): prioridad {
        return this.prioridad;
    }

    public getCompletado(): boolean {
        return this.completado;
    }

    public getPorcentajeAvance(): number {
        return this.porcentajeAvance;
    }

    public getCategoria(): categoria {
        return this.categoria;
    }

    public getEtiqueta(): string[] {
        return this.etiqueta;
    }

    // Setters
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public setFechaVencimiento(fechaVencimiento: Date): void {
        this.fechaVencimiento = fechaVencimiento;
    }

    public setPrioridad(prioridad: prioridad): void {
        this.prioridad = prioridad;
    }

    public setCompletado(completado: boolean): void {
        this.completado = completado;
    }

    public setPorcentajeAvance(porcentajeAvance: number): void {
        this.porcentajeAvance = porcentajeAvance;
    }

    public setCategoria(categoria: categoria): void {
        this.categoria = categoria;
    }

    public setEtiqueta(etiqueta: string[]): void {
        this.etiqueta = etiqueta;
    }
    
}
