import ordenarPorTitulo from "../src/ordenamiento/ordenarPorTitulo";
import Tarea from "../src/tarea";
import { mock } from "jest-mock-extended";

describe('ordenar tareas por titulo', () => {
    let ordenar: ordenarPorTitulo;

    beforeEach(() => {
        ordenar = new ordenarPorTitulo();
    });

    test('deberia ordenar por titulo de la a-z', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        const tarea4 = mock<Tarea>();

        tarea1.getTitulo.mockReturnValue('Pasear al perro');
        tarea2.getTitulo.mockReturnValue('Ir al medico');
        tarea3.getTitulo.mockReturnValue('Ordenar la casa');
        tarea4.getTitulo.mockReturnValue('Estudiar');


        const tareas = [tarea1, tarea2, tarea3, tarea4];
        
        const tareas_ordenadas_false = ordenar.ordenar(tareas, true);
        //const tareas_ordenadas_false = tareas.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));


        expect(tareas_ordenadas_false).toEqual([tarea4,tarea2,tarea3,tarea1])


    })

    test('deberia ordenar por titulo de la z-a', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        const tarea4 = mock<Tarea>();

        tarea1.getTitulo.mockReturnValue('Pasear al perro');
        tarea2.getTitulo.mockReturnValue('Ir al medico');
        tarea3.getTitulo.mockReturnValue('Ordenar la casa');
        tarea4.getTitulo.mockReturnValue('Estudiar');


        const tareas = [tarea1, tarea2, tarea3, tarea4];
        
        const tareas_ordenadas_false = ordenar.ordenar(tareas, false);
        //const tareas_ordenadas_false = tareas.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));


        expect(tareas_ordenadas_false).toEqual([tarea1, tarea3, tarea2,tarea4])


    })
})