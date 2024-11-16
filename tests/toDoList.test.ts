import { ToDoLista } from '../src/toDoList'; // Ajusta la ruta según tu estructura de archivos
import { Tarea } from '../src/tarea'; // Ajusta la ruta según tu estructura de archivos
import { mock } from 'jest-mock-extended';


describe('ToDoLista', () => {
    let todoLista: ToDoLista;
    

    beforeEach(() => {
        todoLista = new ToDoLista();

    });

    test('debería agregar una tarea a la lista', () => {
        
        const tarea1 = mock<Tarea>();
        todoLista.agregarALista(tarea1);
        expect(todoLista.getListaTareas()).toContain(tarea1);
    });

    test('debería borrar una tarea de la lista', () => {
        const tarea1 = mock<Tarea>();
        todoLista.agregarALista(tarea1);
        todoLista.borrarDeLista(tarea1);
        expect(todoLista.getListaTareas()).not.toContain(tarea1);
    });



    test('debería borrar una tarea por título', () => {
        const tarea1 = mock<Tarea>();
        tarea1.getTitulo.mockReturnValue('Tarea de prueba')
        todoLista.agregarALista(tarea1);
        todoLista.borrarPorTitulo('Tarea de prueba');
        expect(todoLista.getListaTareas()).not.toContain(tarea1);
    });


    test('debería devolver una tarea de la lista por título', () => {
        const tarea1 = mock<Tarea>();
        todoLista.agregarALista(tarea1);
        tarea1.getTitulo.mockReturnValue('Tarea de prueba')
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
        todoLista.setListaTareas([tarea1, tarea2, tarea3, tarea4]);

        expect(todoLista.getListaTareas()).toEqual([tarea1, tarea2, tarea3, tarea4]);
    });

    test('debería establecer una nueva lista de tareas', () => {
        const tarea1 = mock<Tarea>();
        todoLista.agregarALista(tarea1);
        expect(todoLista.getListaTareas()).toEqual([tarea1]);
    });
});
