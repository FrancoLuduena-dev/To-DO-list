import { mock } from 'jest-mock-extended';
import Director from '../src/director';
import Builder from '../src/builder';
import ToDoLista from '../src/toDoList';
import Tarea from '../src/tarea';

describe('Director', () => {
    let director: Director;
    let mockBuilder: ReturnType<typeof mock<Builder>>;
    let mockLista: ReturnType<typeof mock<ToDoLista>>;
    let mockTarea: Tarea;

    beforeEach(() => {
        mockBuilder = mock<Builder>();
        mockLista = mock<ToDoLista>();
        mockTarea = new Tarea('Test Tarea', 'Descripción de prueba', null,null, null);

        mockBuilder.construirTarea.mockReturnValue(mockTarea);

        director = new Director(mockBuilder, mockLista);
    });
    
    test('setBuilder settea el builder', () => {
            const director = new Director(mock<Builder>(), {} as any);
        const nuevoBuilder = mock<Builder>();
        director.setBuilder(nuevoBuilder);
        expect((director as any).builder).toBe(nuevoBuilder);
    });

    test('construirTarea construye una tarea y la agrega a la lista', () => {
        const tarea = director.construirTarea();
        expect(mockBuilder.construirTarea).toHaveBeenCalled();
        expect(mockLista.agregarAListas).toHaveBeenCalledWith(tarea);
        expect(mockBuilder.reset).toHaveBeenCalled();
        expect(tarea).toBe(mockTarea);
    });
});