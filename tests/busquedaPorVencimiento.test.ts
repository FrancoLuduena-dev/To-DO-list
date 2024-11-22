import BusquedaPorVencimiento from "../src/busqueda/busquedaPorVencimiento"
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
    let busqueda: BusquedaPorVencimiento;
// AGREGO 3 TAREAS
    beforeEach(() => {
        tareas = [
            mockTarea("Comprar comida", 2, new Date(2024, 11, 7)),
            mockTarea("Estudiar Programacion", 1, new Date(2024, 11, 21)),
            mockTarea("Entrenar", 3, new Date(2024, 11, 7)),
            mockTarea("Leer un libro", 1, new Date(2024, 9, 5)),
        ];
        busqueda = new BusquedaPorVencimiento();
    });

// EMPIEZO LOS TEST
    test("buscarPorFechaDeVencimiento debería devolver solo las tareas con la fecha exacta", () => {
        const fechaObjetivo = new Date(2024, 11, 7);  
        const resultado = busqueda.buscar(tareas, fechaObjetivo);
        expect(resultado.map(t => t.getTitulo())).toEqual(["Comprar comida", "Entrenar"]);
    });
    test("busquedaPorFechaVencimiento deberia devolver vacio si no hay coincidencia", () => {
        const resultado = busqueda.buscar(tareas, new Date(2023, 11, 7));
        expect(resultado).toEqual([]);
    });


});