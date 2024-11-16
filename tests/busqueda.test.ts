import { Busqueda } from "../src/busqueda"
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
    let busqueda: Busqueda;
// AGREGO 3 TAREAS
    beforeEach(() => {
        tareas = [
            mockTarea("Comprar comida", 2, new Date(2024, 11, 7)),
            mockTarea("Estudiar Programacion", 1, new Date(2024, 11, 21)),
            mockTarea("Entrenar", 3, new Date(2024, 11, 7)),
            mockTarea("Leer un libro", 1, new Date(2024, 9, 5)),
        ];
        busqueda = new Busqueda(tareas);
    });

// EMPIEZO LOS TEST

    test("busquedaPorTitulo deberia encontrar el titulo", () => {
        const resultado = busqueda.busquedaPorTitulo("comida");
        expect(resultado.map(t => t.getTitulo())).toEqual(["Comprar comida"]);
    });
    test("busquedaPorTitulo deberia ignorar las MAYÚSCULAS y minusculas", () => {
        const resultado = busqueda.busquedaPorTitulo("ESTUDIAR");
        expect(resultado.map(t => t.getTitulo())).toEqual(["Estudiar Programacion"]);
    });
    test("buscarPorFechaDeVencimiento debería devolver solo las tareas con la fecha exacta", () => {
        const fechaObjetivo = new Date(2024, 11, 7);  
        const resultado = busqueda.buscarPorFechaDeVencimiento(fechaObjetivo);
        expect(resultado.map(t => t.getTitulo())).toEqual(["Comprar comida", "Entrenar"]);
    });
    test("busquedaPorFechaVencimiento deberia devolver vacio si no hay coincidencia", () => {
        const resultado = busqueda.buscarPorFechaDeVencimiento(new Date(2023, 11, 7));
        expect(resultado).toEqual([]);
    });

    test('debería devolver tareas que contienen la etiqueta buscada', () => {
        const tarea1 = mock<Tarea>();
        tarea1.getEtiquetas.mockReturnValue(['etiquetaA', 'etiquetaB']);
        
        const tarea2 = mock<Tarea>();
        tarea2.getEtiquetas.mockReturnValue(['etiquetaC']);
        
        const tarea3 = mock<Tarea>();
        tarea3.getEtiquetas.mockReturnValue(['etiquetaa']);
        
        

        const resultado = busqueda.busquedaPorEtiqueta([tarea1, tarea2, tarea3],'etiquetaA');

        expect(resultado).toEqual([tarea1,tarea3]); // Debería devolver tarea1 y tarea3, sin ser case sensitive.
    });


});