import { mock } from 'jest-mock-extended';
import ConstructorTarea from '../src/constructorTarea';
import { categoria, prioridad } from "../src/enums";
import Tarea from "../src/tarea";

describe('ConstructorTarea', () => {
    let constructorTarea: ConstructorTarea;
    let mockTarea: Tarea;

    beforeEach(() => {
        mockTarea = mock<Tarea>();
        constructorTarea = new ConstructorTarea();
        // Fuerza a que el atributo tarea sea el mock<tarea> aunque es un atributo privado
        (constructorTarea as any).tarea = mockTarea;
    });

    test('setTitulo settea el título en la tarea', () => {
        constructorTarea.setTitulo('Título de Prueba');
        expect(mockTarea.setTitulo).toHaveBeenCalledWith('Título de Prueba');
    });

    test('setDescripcion settea la descripción', () => {
        constructorTarea.setDescripcion('Descripción de Prueba');
        expect(mockTarea.setDescripcion).toHaveBeenCalledWith('Descripción de Prueba');
    });

    test('setFechaVencimiento settea la fecha de vencimiento', () => {
        const date = new Date('2022-11-05');
        constructorTarea.setFechaVencimiento(date);
        expect(mockTarea.setFechaVencimiento).toHaveBeenCalledWith(date);
    });

    test('setPrioridad settea la prioridad', () => {
        constructorTarea.setPrioridad(prioridad.alta);
        expect(mockTarea.setPrioridad).toHaveBeenCalledWith(prioridad.alta);
    });

    test('setCompletado settea el estado de completado', () => {
        constructorTarea.setCompletado(true);
        expect(mockTarea.setCompletado).toHaveBeenCalledWith(true);
    });

    test('setPorcentajeAvance settea el porcentaje de avance', () => {
        constructorTarea.setPorcentajeAvance(50);
        expect(mockTarea.setPorcentajeAvance).toHaveBeenCalledWith(50);
    });

    test('setCategoria settea la categoría', () => {
        constructorTarea.setCategoria(categoria.Trabajo);
        expect(mockTarea.setCategoria).toHaveBeenCalledWith(categoria.Trabajo);
    });

    test('setEtiquetas settea las etiquetas', () => {
        const etiquetas = ['etiqueta1', 'etiqueta2'];
        constructorTarea.setEtiquetas(etiquetas);
        expect(mockTarea.setEtiquetas).toHaveBeenCalledWith(etiquetas);
    });

    test('construirTarea devuelve la tarea construida', () => {
        const tareaConstruida = constructorTarea.construirTarea();
        expect(tareaConstruida).toBe(mockTarea);
    });

    test('reset reinicia la tarea', () => {
        constructorTarea.reset();
        expect((constructorTarea as any).tarea).not.toBe(mockTarea);
    });
});
