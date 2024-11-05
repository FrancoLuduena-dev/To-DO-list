import { Builder } from "./Builder";
import { categoria, prioridad } from "./enums";

export default class Director{
    private builder : Builder;

    constructor(builder: Builder){
        this.builder = builder;
        //aca se pone el tipo de builder, por ahora solo estoy craendo uno, el ConstructorTarea
    }

    public setBuilder(builder: Builder){
        this.builder = builder;
    }

    public construirTareaBasica(titulo: string, descripcion: string){
            this.builder.setTitulo(titulo);
            this.builder.setDescripcion(descripcion);
    }

    public construirTareaCompleta(titulo: string, descripcion: string, fechaVencimiento: Date, prioridad: prioridad, categoria: categoria, etiquetas: string[]){
        this.builder.setTitulo(titulo);
        this.builder.setDescripcion(descripcion);
        this.builder.setFechaVencimiento(fechaVencimiento);
        this.builder.setPrioridad(prioridad);
        this.builder.setCategoria(categoria);
        this.builder.setEtiquetas(etiquetas);
    }
}