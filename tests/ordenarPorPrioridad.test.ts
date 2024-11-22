import { prioridad } from "../src/enums";
import ordenarPorPrioridad from "../src/ordenamiento/ordenarPorPrioridad";
import Tarea from "../src/tarea";
import { mock } from "jest-mock-extended";

describe('ordenar tareas por su etiqueta', () => {
    let ordenar: ordenarPorPrioridad;

    beforeEach(() => {
        ordenar = new ordenarPorPrioridad();
    });

    test('deberia ordenar por prioridad de manera ascendente', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        const tarea4 = mock<Tarea>();
        const tarea5 = mock<Tarea>();
        const tarea6 = mock<Tarea>();
        

        tarea1.getPrioridad.mockReturnValue(2);
        tarea2.getPrioridad.mockReturnValue(0);
        tarea3.getPrioridad.mockReturnValue(1);
        tarea4.getPrioridad.mockReturnValue(0);
        tarea5.getPrioridad.mockReturnValue(0);
        tarea6.getPrioridad.mockReturnValue(2);

        


        const tareas = [tarea1, tarea2, tarea3, tarea4, tarea5, tarea6];
        
        const tareas_ordenadas_true = ordenar.ordenar(tareas, true)
        //const tareas_ordenadas_false = tareas.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));


        expect(tareas_ordenadas_true).toEqual([tarea2,tarea4,tarea5, tarea3, tarea1, tarea6])


    })


    test('deberia ordenar por prioridad de manera descendente', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        

        tarea1.getPrioridad.mockReturnValue(prioridad.alta);
        tarea2.getPrioridad.mockReturnValue(prioridad.baja);
        tarea3.getPrioridad.mockReturnValue(prioridad.media);
        


        const tareas = [tarea1, tarea2, tarea3];
        
        const tareas_ordenadas_true = ordenar.ordenar(tareas, false)
        //const tareas_ordenadas_false = tareas.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));


        expect(tareas_ordenadas_true).toEqual([tarea1,tarea3,tarea2])


    })
})