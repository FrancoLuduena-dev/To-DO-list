import Tarea from "../src/tarea";
import { categoria, prioridad } from "../src/enums";
import EtiquetaInexistenteError from "../src/exception/etiqueta-inexistente-error";

describe("Test de clase Tarea", () => {
  let tarea: Tarea;

  beforeEach(() => {
    tarea = new Tarea("prueba 1", "prueba de descripcion");
  });

  test("debería crear una tarea con los atributos correctos", () => {
    const date = new Date();
    tarea.setFechaCreacion(date);
    tarea.setPrioridad(null);
    tarea.setCategoria(null);

    expect(tarea.getTitulo()).toBe("prueba 1");
    expect(tarea.getDescripcion()).toBe("prueba de descripcion");
    expect(tarea.getFechaCreacion()).toEqual(date);
    expect(tarea.getPrioridad()).toBe(null);
    expect(tarea.getCategoria()).toBe(null);
  });

  test("setTitulo debería settear y devolver el título de la tarea", () => {
    tarea.setTitulo("nuevo titulo");
    expect(tarea.getTitulo()).toBe("nuevo titulo");
  });

  test("setDescripcion debería settear y devolver la descripción de la tarea", () => {
    tarea.setDescripcion("nueva descripcion");
    expect(tarea.getDescripcion()).toBe("nueva descripcion");
  });

  test("setFechaCreacion debería settear y devolver la fecha de creación de la tarea", () => {
    const date = new Date();
    tarea.setFechaCreacion(date);
    expect(tarea.getFechaCreacion()).toEqual(date);
  });

  test("setFechaVencimiento debería settear y devolver la fecha de vencimiento de la tarea", () => {
    const date = new Date();
    tarea.setFechaVencimiento(date);
    expect(tarea.getFechaVencimiento()).toEqual(date);

    tarea.setFechaVencimiento(null);
    expect(tarea.getFechaVencimiento()).toBeNull();
  });

  test("setFechaFinalizacion debería settear y devolver la fecha de finalización de la tarea", () => {
    const date = new Date();
    tarea.setFechaFinalizacion(date);
    expect(tarea.getFechaFinalizacion()).toEqual(date);

    tarea.setFechaFinalizacion(null);
    expect(tarea.getFechaFinalizacion()).toBeNull();
  });

  test("setPrioridad debería settear y devolver la prioridad de la tarea", () => {
    tarea.setPrioridad(prioridad.alta);
    expect(tarea.getPrioridad()).toBe(prioridad.alta);

    tarea.setPrioridad(null);
    expect(tarea.getPrioridad()).toBeNull();
  });

  test("setCompletado debería settear y devolver el estado de completado de la tarea", () => {
    tarea.setCompletado(true);
    expect(tarea.getCompletado()).toBe(true);
    expect(tarea.getPorcentajeAvance()).toBe(100);
    expect(tarea.getFechaFinalizacion()).not.toBeNull();
  });

  test("setPorcentajeAvance debería settear y devolver el porcentaje de avance de la tarea", () => {
    tarea.setPorcentajeAvance(50);
    expect(tarea.getPorcentajeAvance()).toBe(50);

    tarea.setPorcentajeAvance(100);
    expect(tarea.getPorcentajeAvance()).toBe(100);
    expect(tarea.getCompletado()).toBe(true);
    expect(tarea.getFechaFinalizacion()).not.toBeNull();
  });

  test("setCategoria debería settear y devolver la categoría de la tarea", () => {
    tarea.setCategoria(categoria.Trabajo);
    expect(tarea.getCategoria()).toBe(categoria.Trabajo);

    tarea.setCategoria(null);
    expect(tarea.getCategoria()).toBeNull();
  });

  test("setEtiquetas debería settear y devolver las etiquetas de la tarea", () => {
    const etiquetas = ["etiqueta1", "etiqueta2"];
    tarea.setEtiquetas(etiquetas);
    expect(tarea.getEtiquetas()).toEqual(etiquetas);
  });

  test("agregarEtiqueta debería agregar una etiqueta a la tarea", () => {
    tarea.agregarEtiqueta("etiqueta1");
    expect(tarea.getEtiquetas()).toContain("etiqueta1");

    tarea.agregarEtiqueta("etiqueta2");
    expect(tarea.getEtiquetas()).toEqual(["etiqueta1", "etiqueta2"]);
  });

  test("borrarEtiqueta debería borrar una etiqueta de la tarea", () => {
    tarea.setEtiquetas(["etiqueta1", "etiqueta2"]);
    tarea.borrarEtiqueta("etiqueta1");
    expect(tarea.getEtiquetas()).toEqual(["etiqueta2"]);
  });

  test("borrarEtiqueta debería lanzar un error si la etiqueta no existe", () => {
    tarea.setEtiquetas(["etiqueta1"]);
    const errorMessage = tarea.borrarEtiqueta("etiqueta2");
    expect(errorMessage).toBe(`la tarea no posee la etiqueta:  "etiqueta2"`);
  });
});