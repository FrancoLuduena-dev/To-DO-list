import { categoria, prioridad } from "./enums";

export interface Builder{
    reset(): void;
    setTitulo(titulo: string): void;
    setDescripcion(descripcion: string): void;
    setFechaVencimiento(fechaVencimiento: Date): void;
    setPrioridad(prioridad: prioridad): void;
    setCategoria(categoria: categoria): void;
    setEtiquetas(etiquetas: string[]): void;
    construirTarea(): void;
}
