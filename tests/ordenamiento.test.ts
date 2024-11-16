import { mock } from "jest-mock-extended";
import Tarea from "../src/tarea";
import { prioridad } from "../src/enums";
import {Ordenamiento} from '../src/ordenamiento'


describe('test clase ordenamiento', ()=> {
    let ordenamiento: Ordenamiento;

    beforeEach(() => {
        ordenamiento = new Ordenamiento();
    });

    test('deberia ordenar por fecha vencimiento < a >', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        const tarea4 = mock<Tarea>();

        tarea1.getFechaVencimiento.mockReturnValue(new Date('2024-12-01'));
        tarea2.getFechaVencimiento.mockReturnValue(new Date('2024-11-01'));
        tarea3.getFechaVencimiento.mockReturnValue(new Date('2024-10-01'));
        tarea4.getFechaVencimiento.mockReturnValue(new Date('2025-10-01'));


        const tareas = [tarea1, tarea2, tarea3, tarea4];
        const tareas_ordenadas_true = ordenamiento.ordenarPorFecha(tareas, true)
        
        expect(tareas_ordenadas_true).toEqual([tarea3,tarea2,tarea1,tarea4])
        

    })


    test('deberia ordenar por fecha vencimiento > a <', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        const tarea4 = mock<Tarea>();

        tarea1.getFechaVencimiento.mockReturnValue(new Date('2024-12-01'));
        tarea2.getFechaVencimiento.mockReturnValue(new Date('2024-11-01'));
        tarea3.getFechaVencimiento.mockReturnValue(new Date('2024-10-01'));
        tarea4.getFechaVencimiento.mockReturnValue(new Date('2025-10-01'));


        const tareas = [tarea1, tarea2, tarea3, tarea4];
        
        const tareas_ordenadas_false = ordenamiento.ordenarPorFecha(tareas, false)


        expect(tareas_ordenadas_false).toEqual([tarea4,tarea1,tarea2,tarea3])


    })

    test('deberia ordenar por titulo', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        const tarea4 = mock<Tarea>();

        tarea1.getTitulo.mockReturnValue('Pasear al perro');
        tarea2.getTitulo.mockReturnValue('Ir al medico');
        tarea3.getTitulo.mockReturnValue('Ordenar la casa');
        tarea4.getTitulo.mockReturnValue('Estudiar');


        const tareas = [tarea1, tarea2, tarea3, tarea4];
        
        const tareas_ordenadas_false = ordenamiento.ordenarPorTitulo(tareas)
        //const tareas_ordenadas_false = tareas.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));


        expect(tareas_ordenadas_false).toEqual([tarea4,tarea2,tarea3,tarea1])


    })



    test('deberia ordenar por prioridad < a >', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        

        tarea1.getPrioridad.mockReturnValue(prioridad.alta);
        tarea2.getPrioridad.mockReturnValue(prioridad.baja);
        tarea3.getPrioridad.mockReturnValue(prioridad.media);
        


        const tareas = [tarea1, tarea2, tarea3];
        
        const tareas_ordenadas_true = ordenamiento.ordenarPorPrioridad(tareas, true)
        //const tareas_ordenadas_false = tareas.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));


        expect(tareas_ordenadas_true).toEqual([tarea2,tarea3,tarea1])


    })


    test('deberia ordenar por prioridad > a <', ()=> {

        const tarea1 = mock<Tarea>();
        const tarea2 = mock<Tarea>();
        const tarea3 = mock<Tarea>();
        

        tarea1.getPrioridad.mockReturnValue(prioridad.alta);
        tarea2.getPrioridad.mockReturnValue(prioridad.baja);
        tarea3.getPrioridad.mockReturnValue(prioridad.media);
        


        const tareas = [tarea1, tarea2, tarea3];
        
        const tareas_ordenadas_true = ordenamiento.ordenarPorPrioridad(tareas, false)
        //const tareas_ordenadas_false = tareas.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));


        expect(tareas_ordenadas_true).toEqual([tarea1,tarea3,tarea2])


    })

    test('debería ordenar las tareas por etiquetas en orden ascendente', () => {
        const tarea1 = mock<Tarea>();
        tarea1.getEtiquetas.mockReturnValue(['etiquetaB']);
        
        const tarea2 = mock<Tarea>();
        tarea2.getEtiquetas.mockReturnValue(['etiquetaA']);
        
        const listaDesordenada = [tarea1, tarea2];

        const resultado = ordenamiento.ordenarPorEtiquetas(listaDesordenada, true);

        expect(resultado).toEqual([tarea2, tarea1]); // etiquetaA < etiquetaB
    });

    test('debería ordenar las tareas por etiquetas en orden descendente', () => {
        const tarea1 = mock<Tarea>();
        tarea1.getEtiquetas.mockReturnValue(['etiquetaB']);
        
        const tarea2 = mock<Tarea>();
        tarea2.getEtiquetas.mockReturnValue(['etiquetaA']);
        
        const listaDesordenada = [tarea1, tarea2];

        const resultado = ordenamiento.ordenarPorEtiquetas(listaDesordenada, false);

        expect(resultado).toEqual([tarea1, tarea2]); // etiquetaB > etiquetaA
    });










})