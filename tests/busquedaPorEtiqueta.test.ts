import BusquedaPorEtiqueta from "../src/busqueda/busquedaPorEtiqueta"
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
    let busqueda: BusquedaPorEtiqueta;
// AGREGO 3 TAREAS
    beforeEach(() => {
        tareas = [
            mockTarea("Comprar comida", 2, new Date(2024, 11, 7)),
            mockTarea("Estudiar Programacion", 1, new Date(2024, 11, 21)),
            mockTarea("Entrenar", 3, new Date(2024, 11, 7)),
            mockTarea("Leer un libro", 1, new Date(2024, 9, 5)),
        ];
        busqueda = new BusquedaPorEtiqueta();
    });

// EMPIEZO LOS TEST
    test('debería devolver tareas que contienen la etiqueta buscada', () => {
        const tarea1 = mock<Tarea>();
        tarea1.getEtiquetas.mockReturnValue(['etiquetaA', 'etiquetaB']);
        
        const tarea2 = mock<Tarea>();
        tarea2.getEtiquetas.mockReturnValue(['etiquetaC']);
        
        const tarea3 = mock<Tarea>();
        tarea3.getEtiquetas.mockReturnValue(['etiquetaa']);

        const resultado = busqueda.buscar([tarea1, tarea2, tarea3],'etiquetaA');

        expect(resultado).toEqual([tarea1,tarea3]); // Debería devolver tarea1 y tarea3, sin ser case sensitive.
    });


});