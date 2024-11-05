import { Builder } from "./Builder";
import { categoria, prioridad } from "./enums";
import Tarea from "./tarea"

export default class ConstructorTarea implements Builder {
    private tarea: Tarea;
    
    constructor(){
        this.tarea = new Tarea();
    }

    public reset(): void {
        this.tarea = new Tarea();
    }
    
    public setTitulo(titulo: string){
        this.tarea.setTitulo(titulo);
    }
    
    public setDescripcion(descripcion: string): void {
        this.tarea.setDescripcion(descripcion);
    }

    public setFechaVencimiento(fechaVencimiento: Date): void{
        this.tarea.setFechaVencimiento(fechaVencimiento)
    }

    public setPrioridad(prioridad: prioridad){
        this.tarea.setPrioridad(prioridad);
    }

    public setCategoria(categoria: categoria){
        this.tarea.setCategoria(categoria);
    }

    public setEtiqueta(etiqueta: string[]){
        this.tarea.setEtiqueta(etiqueta);
    }

    public construirTarea(): Tarea{
        const resultado = this.tarea;
        this.reset();
        return resultado;
    }
}