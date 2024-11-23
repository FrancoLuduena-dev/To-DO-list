import { CalculadoraEstadistica } from '../src/calculadoraEstadistica'; // Ajusta la ruta según tu estructura de archivos
import { ToDoLista } from '../src/toDoList'; // Ajusta la ruta según tu estructura de archivos
import { Tarea } from '../src/tarea'; // Ajusta la ruta según tu estructura de archivos
import { mock } from 'jest-mock-extended';

describe('CalculadoraEstadistica', () => {
    let calculadora: CalculadoraEstadistica;
    

    beforeEach(() => {
        calculadora = new CalculadoraEstadistica();

    });

    test('debería calcular la tasa de finalización correctamente', () => {
        const listaTareas = mock<ToDoLista>();
        
        const tarea1 = mock<Tarea>();
        tarea1.getCompletado.mockReturnValue(true);
        const tarea2 = mock<Tarea>();
        tarea2.getCompletado.mockReturnValue(false);
        const tarea3 = mock<Tarea>();
        tarea3.getCompletado.mockReturnValue(true);

        listaTareas.getListaTareas.mockReturnValue([tarea1, tarea2, tarea3]);

        
        const tasa = Math.floor(calculadora.calcularTasa(listaTareas));
        expect(tasa).toBe(66); // 2 de 3 tareas completadas
    });

    test('debería manejar el caso de no tener tareas', () => {
        const listaTareas = mock<ToDoLista>();
        
        listaTareas.getListaTareas.mockReturnValue([]);
        const tasa = calculadora.calcularTasa(listaTareas);
        expect(tasa).toBe(0); // No hay tareas, tasa debe ser 0
    });

    test('debería calcular el tiempo dedicado a las tareas completadas', () => {
        const listaTareas = mock<ToDoLista>();
        
        const tarea1 = mock<Tarea>();
        tarea1.getCompletado.mockReturnValue(true);
        tarea1.getFechaCreacion.mockReturnValue(new Date('2023-01-01'));
        tarea1.getFechaFinalizacion.mockReturnValue(new Date('2023-01-05'));
    
        const tarea2 = mock<Tarea>();
        tarea2.getCompletado.mockReturnValue(false);
        tarea2.getFechaCreacion.mockReturnValue(new Date('2023-01-02'));
    
        const tarea3 = mock<Tarea>();
        tarea3.getCompletado.mockReturnValue(true);
        tarea3.getFechaCreacion.mockReturnValue(new Date('2023-01-03'));
        tarea3.getFechaFinalizacion.mockReturnValue(new Date('2023-01-04'));
    
        // Configurar el mock para que devuelva las tareas
        listaTareas.getListaTareas.mockReturnValue([tarea1, tarea2, tarea3]);
    
        const tiempoDedicado = calculadora.calcularTiempoDedicado(listaTareas);

        expect(tiempoDedicado.get(tarea1)).toBe(4); // Days for tarea1
        expect(tiempoDedicado.get(tarea3)).toBe(1); // Days for tarea3
        
    });

    test('debería calcular el tiempo dedicado a tareas no completadas', () => {
        const listaTareas = mock<ToDoLista>();
        
        const tarea1 = mock<Tarea>();
        tarea1.getCompletado.mockReturnValue(false);
        tarea1.getFechaCreacion.mockReturnValue(new Date('2023-01-01'));

        listaTareas.agregarALista(tarea1);
        listaTareas.getListaTareas.mockReturnValue([tarea1]); // el mock devuelve las tareas

        const tiempoDedicado = calculadora.calcularTiempoDedicado(listaTareas);
        const currentDate = new Date();
        const diferencia = Math.floor((currentDate.getTime() - tarea1.getFechaCreacion().getTime()) / (1000 * 60 * 60 * 24));

        expect(tiempoDedicado.get(tarea1)).toBe(diferencia); // Días desde la creación hasta hoy
    });
});
