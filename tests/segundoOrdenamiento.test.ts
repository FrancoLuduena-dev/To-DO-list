import { Ordenamiento } from "../src/ordenadores";
import Tarea from "../src/tarea";


const mockTarea = (titulo: string, prioridad: number, fechaVencimiento: Date) => ({
    getTitulo: () => titulo,
    getPrioridad: () => prioridad,
    getFechaVencimiento: () => fechaVencimiento
} as Tarea);


describe("Ordenamiento", () => {
    let tareas: Tarea[];
    let ordenamiento: Ordenamiento;


    beforeEach(() => {
        tareas = [
            mockTarea("Tarea A", 2, new Date(2023, 12, 4)),
            mockTarea("Tarea B", 1, new Date(2024, 10, 15)),
            mockTarea("Tarea C", 3, new Date(2024, 9, 5)),
        ];
        ordenamiento = new Ordenamiento(tareas)
    });


    test("OrdenarPorPrioridad deberia ordenar tareas por prioridad ascendente", () => {
        const resultado = ordenamiento.ordenarPorPrioridad();
        expect(resultado.map(t => t.getPrioridad())).toEqual([1, 2, 3]);
    });

    test("ordenarPorFechaVencimiento debería ordenar tareas por fecha de vencimiento ascendente", () => {
        const resultado = ordenamiento.ordenarPorFechaVencimiento();
        expect(resultado.map(t => t.getFechaVencimiento().getTime())).toEqual([
            new Date(2023, 12, 4).getTime(),
            new Date(2024, 9, 5).getTime(),
            new Date(2024, 10, 15).getTime()
        ]);
    });

    test("ordenarPorTitulo debería ordenar tareas alfabéticamente por título", () => {
        const resultado = ordenamiento.ordenarPorTitulo();
        expect(resultado.map(t => t.getTitulo())).toEqual(["Tarea A", "Tarea B", "Tarea C"]);
    });

});