import ordenarPorFecha from "../src/ordenamiento/ordenarPorFecha";
import Tarea from "../src/tarea";
import { mock } from "jest-mock-extended";

describe('ordenar tareas por su etiqueta', () => {
    let ordenar: ordenarPorFecha;

    beforeEach(() => {
        ordenar = new ordenarPorFecha();
    });

    test('deberia ordenar por fecha vencimiento en orden ascendente', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        const tarea4 = mock<Tarea>();

        tarea1.getFechaVencimiento.mockReturnValue(new Date('2024-12-25'));
        tarea2.getFechaVencimiento.mockReturnValue(new Date('2024-11-11'));
        tarea3.getFechaVencimiento.mockReturnValue(new Date('2024-10-21'));
        tarea4.getFechaVencimiento.mockReturnValue(new Date('2025-10-26'));


        const tareas = [tarea1, tarea2, tarea3, tarea4];
        const tareas_ordenadas_true = ordenar.ordenar(tareas, true)
        
        expect(tareas_ordenadas_true).toEqual([tarea3,tarea2,tarea1, tarea4])
        

    })

    test('deberia ordenar por fecha vencimiento en orden descendiente', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        const tarea4 = mock<Tarea>();

        tarea1.getFechaVencimiento.mockReturnValue(new Date('2024-12-01'));
        tarea2.getFechaVencimiento.mockReturnValue(new Date('2024-11-01'));
        tarea3.getFechaVencimiento.mockReturnValue(new Date('2024-10-01'));
        tarea4.getFechaVencimiento.mockReturnValue(new Date('2025-10-01'));


        const tareas = [tarea1, tarea2, tarea3, tarea4];
        
        const tareas_ordenadas_false = ordenar.ordenar(tareas, false)


        expect(tareas_ordenadas_false).toEqual([tarea4,tarea1,tarea2,tarea3])


    })
})