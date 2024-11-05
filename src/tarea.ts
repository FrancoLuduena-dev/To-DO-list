
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
    private etiquetas: string[] = [] 

    
    constructor(
    ) {
        this.titulo = "";
        this.descripcion = "";
        this.fechaVencimiento = new Date();
        this.prioridad = 1;
        this.categoria = 0;
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

    public setEtiquetas(etiquetas: string[]): void {
        this.etiquetas = etiquetas;
    }

    public agregarEtiqueta(etiqueta: string): void{
        this.etiquetas.push(etiqueta);
    }
    
}
