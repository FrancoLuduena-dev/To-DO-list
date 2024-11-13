import { mock } from "jest-mock-extended";
import Tarea from "../src/tarea";
import { categoria, prioridad } from "../src/enums";

describe("Test de clase Tarea", () => {
  // Task creation test

  test("should create a task with correct attributes", () => {
    const date = new Date();
    const task = new Tarea(
      "Testear la app",
      "hay que testear que la app funcione",
      date,
      prioridad.baja,
      categoria.Estudio
    );

    expect(task.getTitulo()).toBe("Testear la app");
    expect(task.getDescripcion()).toBe("hay que testear que la app funcione");
    expect(task.getFechaCreacion()).toEqual(date);
    expect(task.getPrioridad()).toBe(prioridad.baja);
    expect(task.getCategoria()).toBe(categoria.Estudio);
  });
});
