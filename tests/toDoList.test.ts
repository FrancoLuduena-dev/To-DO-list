import { mock } from 'jest-mock-extended';
import ToDoLista from '../src/toDoList';
import Tarea from '../src/tarea';
import TareaInexistenteError from '../src/exception/tarea-inexistente-error';
import { categoria } from '../src/enums';

describe('ToDoLista', () => {
    let todoLista: ToDoLista;
    let mockTarea: Tarea;

    beforeEach(() => {
        mockTarea = new Tarea('Título de prueba', 'Descripción de prueba');
        todoLista = new ToDoLista();
    });

    test('debería agregar una nueva tarea a la lista', () => {
        todoLista.agregarAListas(mockTarea);
        expect(todoLista.getListaTareas()).toContain(mockTarea);
    });

    test('debería devolver la lista de tareas', () => {
        const tarea1 = new Tarea('Título 1', 'Descripción 1');
        const tarea2 = new Tarea('Título 2', 'Descripción 2');
        todoLista.agregarAListas(tarea1);
        todoLista.agregarAListas(tarea2);
        expect(todoLista.getListaTareas()).toEqual([tarea1, tarea2]);
    });

    test('debería borrar una tarea de la lista', () => {
        todoLista.agregarAListas(mockTarea);
        todoLista.borrarDeListas(mockTarea);
        expect(todoLista.getListaTareas()).not.toContain(mockTarea);
    });

    test('debería lanzar un error si la tarea no se encuentra en la lista', () => {
        const errorMessage = todoLista.borrarPorTitulo('Tarea de prueba');
        expect(errorMessage).toBe('la tarea con el título "Tarea de prueba" no se encuentra en la lista');
    });

    test('debería devolver una tarea específica de la lista por su título', () => {
        todoLista.agregarAListas(mockTarea);
        const tarea = todoLista.getTareaDeLista('Título de prueba');
        expect(tarea).toBe(mockTarea);
    });


    test('debería devolver la lista de tareas completadas', () => {
        const tarea1 = new Tarea('Título 1', 'Descripción 1');
        const tarea2 = new Tarea('Título 2', 'Descripción 2');
        tarea1.setCompletado(true);
        todoLista.agregarAListas(tarea1);
        todoLista.agregarAListas(tarea2);
        expect(todoLista.getTareasCompletadas()).toEqual([tarea1]);
    });

    test('debería devolver la lista de tareas pendientes', () => {
        const tarea1 = new Tarea('Título 1', 'Descripción 1');
        const tarea2 = new Tarea('Título 2', 'Descripción 2');
        tarea2.setCompletado(true);
        todoLista.agregarAListas(tarea1);
        todoLista.agregarAListas(tarea2);
        expect(todoLista.getTareasPendientes()).toEqual([tarea1]);
    });

    test('debería setear la lista de tareas', () => {
        const tarea1 = new Tarea('Título 1', 'Descripción 1');
        const tarea2 = new Tarea('Título 2', 'Descripción 2');
        todoLista.setListaTareas([tarea1, tarea2]);
        expect(todoLista.getListaTareas()).toEqual([tarea1, tarea2]);
    });

    
    test('debería setear la lista de tareas completadas', () => {
        const tarea1 = new Tarea('Título 1', 'Descripción 1');
        const tarea2 = new Tarea('Título 2', 'Descripción 2');
        tarea1.setCompletado(true);
        todoLista.setListaTareas([tarea1, tarea2]);
        todoLista.setListaTareasCompletadas();
        expect(todoLista.getTareasCompletadas()).toEqual([tarea1]);
    });

    test('debería setear la lista de tareas completadas 2', () => {
        const tarea1 = new Tarea('Título 1', 'Descripción 1');
        const tarea2 = new Tarea('Título 2', 'Descripción 2');
        tarea1.setCompletado(true);
        todoLista.agregarAListas(tarea1);
        todoLista.agregarAListas(tarea2);
        todoLista.setListaTareasCompletadas();
        expect(todoLista.getTareasCompletadas()).toEqual([tarea1]);
    });

    test('debería eliminar una tarea de la lista de tareas completadas', () => {
        const tarea = new Tarea('Título de prueba', 'Descripción de prueba');
        tarea.setCompletado(true);
        todoLista.agregarAListas(tarea);
        expect(todoLista.getTareasCompletadas()).toContain(tarea);
        todoLista.borrarDeListas(tarea);
        expect(todoLista.getTareasCompletadas()).not.toContain(tarea);
    });

});
