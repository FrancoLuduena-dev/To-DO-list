import { mock } from "jest-mock-extended";
import Task from "../src/tarea";
import { category, priority } from "../src/enums";

describe("Test de clase Task", () => {
  // Task creation test

  test("should create a task with correct attributes", () => {
    const date = new Date();
    const task = new Task(
      "Testear la app",
      "hay que testear que la app funcione",
      date,
      priority.low,
      category.college
    );

    expect(task.get_title()).toBe("Testear la app");
    expect(task.get_description()).toBe("hay que testear que la app funcione");
    expect(task.get_creation_date()).toEqual(date);
    expect(task.get_priority()).toBe(priority.low);
    expect(task.get_category()).toBe(category.college);
  });
});
