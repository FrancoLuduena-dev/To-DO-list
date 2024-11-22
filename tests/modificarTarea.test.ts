import { categoria, prioridad } from "../src/enums";
import Tarea from "../src/tarea";
import ModificadorTarea from "../src/modificadorTarea";

describe('ModificadorTarea', () => {
    let tareaMock: Tarea;
    let modificadorTarea: ModificadorTarea;

    beforeEach(() => {
        tareaMock = new Tarea("", "");
        modificadorTarea = new ModificadorTarea(tareaMock);
    });

    test('debería configurar el título de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'setTitulo');
        modificadorTarea.setTitulo('Nuevo Título');
        expect(mock).toHaveBeenCalledWith('Nuevo Título');
    });

    test('debería configurar la descripción de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'setDescripcion');
        modificadorTarea.setDescripcion('Nueva Descripción');
        expect(mock).toHaveBeenCalledWith('Nueva Descripción');
    });

    test('debería configurar la fecha de creación de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'setFechaCreacion');
        const fechaCreacion = new Date();
        modificadorTarea.setFechaCreacion(fechaCreacion);
        expect(mock).toHaveBeenCalledWith(fechaCreacion);
    });

    test('debería configurar la fecha de vencimiento de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'setFechaVencimiento');
        const fechaVencimiento = new Date();
        modificadorTarea.setFechaVencimiento(fechaVencimiento);
        expect(mock).toHaveBeenCalledWith(fechaVencimiento);
    });

    test('debería configurar la fecha de finalización de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'setFechaFinalizacion');
        const fechaFinalizacion = new Date();
        modificadorTarea.setFechaFinalizacion(fechaFinalizacion);
        expect(mock).toHaveBeenCalledWith(fechaFinalizacion);
    });

    test('debería configurar la prioridad de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'setPrioridad');
        modificadorTarea.setPrioridad(prioridad.alta);
        expect(mock).toHaveBeenCalledWith(prioridad.alta);
    });

    test('debería configurar el estado de completado de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'setCompletado');
        modificadorTarea.setCompletado(true);
        expect(mock).toHaveBeenCalledWith(true);
    });

    test('debería configurar el porcentaje de avance de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'setPorcentajeAvance');
        modificadorTarea.setPorcentajeAvance(50);
        expect(mock).toHaveBeenCalledWith(50);
    });

    test('debería configurar la categoría de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'setCategoria');
        modificadorTarea.setCategoria(categoria.Trabajo);
        expect(mock).toHaveBeenCalledWith(categoria.Trabajo);
    });

    test('debería configurar las etiquetas de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'setEtiquetas');
        const etiquetas = ['etiqueta1', 'etiqueta2'];
        modificadorTarea.setEtiquetas(etiquetas);
        expect(mock).toHaveBeenCalledWith(etiquetas);
    });

    test('debería agregar una etiqueta a la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'agregarEtiqueta');
        modificadorTarea.agregarEtiqueta('nuevaEtiqueta');
        expect(mock).toHaveBeenCalledWith('nuevaEtiqueta');
    });

    test('debería borrar una etiqueta de la tarea', () => {
        const mock = jest.spyOn(tareaMock, 'borrarEtiqueta');
        modificadorTarea.borrarEtiqueta('etiquetaExistente');
        expect(mock).toHaveBeenCalledWith('etiquetaExistente');
    });

    test('debería lanzar un error si el objeto ingresado no es una tarea', () => {
        expect(() => modificadorTarea.setTarea({} as Tarea)).toThrow('El objeto ingresado no es una tarea');
    });
});