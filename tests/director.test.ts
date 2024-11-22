import { mock, MockProxy } from 'jest-mock-extended';
import { Director } from '../src/director';
import { ConstructorTarea } from '../src/constructorTarea';
import { ToDoLista } from '../src/toDoList';
import { Tarea } from '../src/tarea';

describe('Director', () => {
    let mockBuilder: MockProxy<ConstructorTarea>;
    let mockLista: MockProxy<ToDoLista>;
    let director: Director;
    let mockTarea: Tarea;

    beforeEach(() => {
        mockBuilder = mock<ConstructorTarea>();
        mockLista = mock<ToDoLista>();
        mockTarea = new Tarea('Test Tarea', 'Descripción de prueba');

        mockBuilder.construirTarea.mockReturnValue(mockTarea);
        mockBuilder.setTitulo.mockReturnThis();
        mockBuilder.setDescripcion.mockReturnThis();
        mockBuilder.setFechaVencimiento.mockReturnThis();
        mockBuilder.setPrioridad.mockReturnThis();
        mockBuilder.setCompletado.mockReturnThis();
        mockBuilder.setPorcentajeAvance.mockReturnThis();
        mockBuilder.setCategoria.mockReturnThis();
        mockBuilder.setEtiquetas.mockReturnThis();

        director = new Director(mockBuilder);
    });

    test('setBuilder settea el builder', () => {
        const director = new Director(mock<ConstructorTarea>());
        const nuevoBuilder = mock<ConstructorTarea>();
        director.setBuilder(nuevoBuilder);
        expect((director as any).builder).toBe(nuevoBuilder);
    });

    test('construirTarea construye una tarea', () => {
        const configurar = () => {
            mockBuilder.setTitulo('Test Tarea')
                .setDescripcion('Descripción de prueba')
                .setFechaVencimiento(new Date('2021-11-22'))
                .setPrioridad(1)
                .setCompletado(false)
                .setPorcentajeAvance(25)
                .setCategoria(0)
                .setEtiquetas(['importante', 'urgente']);
        };

        const tarea = director.construirTarea(configurar);
        mockLista.agregarAListas(tarea);
        expect(mockBuilder.construirTarea).toHaveBeenCalled();
        expect(mockLista.agregarAListas).toHaveBeenCalledWith(tarea);
        expect(mockBuilder.reset).toHaveBeenCalled();
        expect(tarea).toBe(mockTarea);
    });
});