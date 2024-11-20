import BusquedaPorTitulo from "../src/busqueda/busquedaPorTitulo"
import Tarea from "../src/tarea";
import { mock } from "jest-mock-extended";

// MOCK DE LA TAREA
const mockTarea = (titulo: string, prioridad: number, fechaVencimiento: Date) => ({
    getTitulo: () => titulo,
    getPrioridad: () => prioridad,
    getFechaVencimiento: () => fechaVencimiento,
} as Tarea); 


describe("Busqueda",() => {
    let tareas: Tarea[];
    let busqueda: BusquedaPorTitulo;
// AGREGO 3 TAREAS
    beforeEach(() => {
        tareas = [
            mockTarea("Comprar comida", 2, new Date(2024, 11, 7)),
            mockTarea("Estudiar Programacion", 1, new Date(2024, 11, 21)),
            mockTarea("Entrenar", 3, new Date(2024, 11, 7)),
            mockTarea("Leer un libro", 1, new Date(2024, 9, 5)),
        ];
        busqueda = new BusquedaPorTitulo();
    });

// EMPIEZO LOS TEST

    test("busquedaPorTitulo deberia encontrar el titulo", () => {
        const resultado = busqueda.buscar(tareas, "comida");
        expect(resultado.map(t => t.getTitulo())).toEqual(["Comprar comida"]);
    });
    test("busquedaPorTitulo deberia ignorar las MAYÚSCULAS y minusculas", () => {
        const resultado = busqueda.buscar(tareas, "ESTUDIAR");
        expect(resultado.map(t => t.getTitulo())).toEqual(["Estudiar Programacion"]);
    });

});