import { mock } from 'jest-mock-extended';
import ToDoLista from '../src/toDoList';
import Tarea from "../src/tarea";
import TareaInexistenteError from '../src/exception/tarea-inexistente-error';

describe('ToDoLista', () => {
    let todoLista: ToDoLista;

    beforeEach(() => {
        todoLista = new ToDoLista();
    });

    test('debería agregar una tarea a la lista', () => {
        const tarea1 = mock<Tarea>();
        todoLista.agregarAListas(tarea1);
        expect(todoLista.getListaTareas()).toContain(tarea1);
    });

    test('debería borrar una tarea de la lista', () => {
        const tarea1 = mock<Tarea>();
        todoLista.agregarAListas(tarea1);
        todoLista.borrarDeListas(tarea1);
        expect(todoLista.getListaTareas()).not.toContain(tarea1);
    });

    test('debería lanzar un error si la tarea a borrar no se encuentra en la lista', () => {
        const tarea1 = mock<Tarea>();
        tarea1.getTitulo.mockReturnValue('Tarea de prueba');
        const result = todoLista.borrarDeListas(tarea1);
        expect(result).toBe('La tarea "Tarea de prueba" no se encuentra en la lista');
    });

    test('debería borrar una tarea por título', () => {
        const tarea1 = mock<Tarea>();
        tarea1.getTitulo.mockReturnValue('Tarea de prueba');
        todoLista.agregarAListas(tarea1);
        todoLista.borrarPorTitulo('Tarea de prueba');
        expect(todoLista.getListaTareas()).not.toContain(tarea1);
    });

    test('debería lanzar un error si la tarea a borrar por título no se encuentra en la lista', () => {
        const result = todoLista.borrarPorTitulo('Tarea de prueba');
        expect(result).toBe('la tarea con el título "Tarea de prueba" no se encuentra en la lista');
    });

    test('debería devolver una tarea de la lista por título', () => {
        const tarea1 = mock<Tarea>();
        todoLista.agregarAListas(tarea1);
        tarea1.getTitulo.mockReturnValue('Tarea de prueba');
        const tareaEncontrada = todoLista.getTareaDeLista('Tarea de prueba');
        expect(tareaEncontrada).toBe(tarea1);
    });

    test('debería devolver undefined si la tarea no se encuentra por título', () => {
        const tareaEncontrada = todoLista.getTareaDeLista('Tarea de prueba');
        expect(tareaEncontrada).toBeUndefined();
    });

    test('debería devolver la lista de tareas', () => {
        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        const tarea4 = mock<Tarea>();
        todoLista.agregarAListas(tarea1);
        todoLista.agregarAListas(tarea2);
        todoLista.agregarAListas(tarea3);
        todoLista.agregarAListas(tarea4);

        expect(todoLista.getListaTareas()).toEqual([tarea1, tarea2, tarea3, tarea4]);
    });

    test('debería agregar una nueva tarea a la lista', () => {
        const tarea1 = mock<Tarea>();
        todoLista.agregarAListas(tarea1);
        expect(todoLista.getListaTareas()).toEqual([tarea1]);
    });
});
