import { mock } from 'jest-mock-extended';
import ConstructorTarea from '../src/constructorTarea';
import Tarea from '../src/tarea';
import { prioridad } from '../src/enums';

describe('Test de clase ConstructorTarea', () => {
  let constructorTarea: ConstructorTarea;
  let mockTarea: Tarea;

  beforeEach(() => {
    mockTarea = mock<Tarea>();
    constructorTarea = new ConstructorTarea();
    // fuerza que el atributo tarea sea un mock
    (constructorTarea as any).tarea = mockTarea;
  });

  test('setTitulo debería configurar el título en la tarea', () => {
    constructorTarea.setTitulo('Título de Prueba');
    expect(mockTarea.setTitulo).toHaveBeenCalledWith('Título de Prueba');
  });

  test('setDescripcion debería configurar la descripción en la tarea', () => {
    constructorTarea.setDescripcion('Descripción de Prueba');
    expect(mockTarea.setDescripcion).toHaveBeenCalledWith('Descripción de Prueba');
  });

  test('setFechaVencimiento debería configurar la fecha de vencimiento en la tarea', () => {
    const date = new Date('2022-11-05');
    constructorTarea.setFechaVencimiento(date);
    expect(mockTarea.setFechaVencimiento).toHaveBeenCalledWith(date);
  });

  test('setFechaFinalizacion debería configurar la fecha de finalización en la tarea', () => {
    const date = new Date('2022-11-05');
    constructorTarea.setFechaFinalizacion(date);
    expect(mockTarea.setFechaFinalizacion).toHaveBeenCalledWith(date);
  });

  test('setPrioridad debería configurar la prioridad en la tarea', () => {
    constructorTarea.setPrioridad(prioridad.alta);
    expect(mockTarea.setPrioridad).toHaveBeenCalledWith(prioridad.alta);
  });

  test('setCompletado debería configurar el estado de completado en la tarea', () => {
    constructorTarea.setCompletado(true);
    expect(mockTarea.setCompletado).toHaveBeenCalledWith(true);
  });

  test('setEtiquetas debería configurar las etiquetas en la tarea', () => {
    const etiquetas = ['etiqueta1', 'etiqueta2'];
    constructorTarea.setEtiquetas(etiquetas);
    expect(mockTarea.setEtiquetas).toHaveBeenCalledWith(etiquetas);
  });

  test('construirTarea debería devolver la tarea y resetearla', () => {
    const expectedResult = mockTarea;
    (constructorTarea as any).tarea = expectedResult;
    const resultado = constructorTarea.construirTarea();
    expect(resultado).toBe(expectedResult);
    expect((constructorTarea as any).tarea).not.toBe(expectedResult); // Asegurarse de que fue reseteada
  });

  test('reset debería resetear la tarea', () => {
    constructorTarea.setTitulo('Título de Prueba');
    constructorTarea.reset();
    expect((constructorTarea as any).tarea).not.toBe(mockTarea); // Asegurarse de que fue reseteada
  });

  test('setFechaCreacion debería configurar la fecha de creación en la tarea', () => {
    const date = new Date('2022-11-05');
    constructorTarea.setFechaCreacion(date);
    expect(mockTarea.setFechaCreacion).toHaveBeenCalledWith(date);
  });

  test('setFechaFinalizacion debería configurar la fecha de finalización en la tarea', () => {
    const date = new Date('2022-11-05');
    constructorTarea.setFechaFinalizacion(date);
    expect(mockTarea.setFechaFinalizacion).toHaveBeenCalledWith(date);
  });

  test('setPrioridad debería configurar la prioridad en la tarea', () => {
    constructorTarea.setPrioridad(prioridad.alta);
    expect(mockTarea.setPrioridad).toHaveBeenCalledWith(prioridad.alta);
  });
});
