import ordenarPorEtiquetas from "../src/ordenamiento/ordenarPorEtiquetas";
import Tarea from "../src/tarea";
import { mock } from "jest-mock-extended";

describe('ordenar tareas por su etiqueta', () => {
    let ordenar: ordenarPorEtiquetas;

    beforeEach(() => {
        ordenar = new ordenarPorEtiquetas();
    });

    test('debería ordenar las tareas por etiquetas en orden ascendente', () => {
        const tarea1 = mock<Tarea>();
        tarea1.getEtiquetas.mockReturnValue(['etiquetaB']);
        
        const tarea2 = mock<Tarea>();
        tarea2.getEtiquetas.mockReturnValue(['etiquetaA']);
        
        const listaDesordenada = [tarea1, tarea2];

        const resultado = ordenar.ordenar(listaDesordenada, true);

        expect(resultado).toEqual([tarea2, tarea1]); // etiquetaA < etiquetaB
    });

    test('debería ordenar las tareas por etiquetas en orden descendente', () => {
        const tarea1 = mock<Tarea>();
        tarea1.getEtiquetas.mockReturnValue(['etiquetaB']);
        
        const tarea2 = mock<Tarea>();
        tarea2.getEtiquetas.mockReturnValue(['etiquetaA']);
        
        const listaDesordenada = [tarea1, tarea2];

        const resultado = ordenar.ordenar(listaDesordenada, false);

        expect(resultado).toEqual([tarea1, tarea2]); // etiquetaB > etiquetaA
    });

})
