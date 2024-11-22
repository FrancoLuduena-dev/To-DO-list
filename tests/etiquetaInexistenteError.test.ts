import TareaInexistenteError from "../src/exception/tarea-inexistente-error";
import { mock } from 'jest-mock-extended';
import EtiquetaInexistenteError from '../src/exception/etiqueta-inexistente-error';

describe('TareaInexistenteError', () => {
    test('deberia crear una instancia de TareaInexistenteError con el nombre y mensaje correcto', () => {
        const errorMessage = 'La tarea no existe';
        const error = new TareaInexistenteError(errorMessage);

        expect(error).toBeInstanceOf(TareaInexistenteError);
        expect(error.message).toBe(errorMessage);
        expect(error.name).toBe('TareaInexistenteError');
    });
});

describe('EtiquetaInexistenteError', () => {
    test('deberia crear una isntancia de EtiquetaInexistenteError con el nombre y mensaje correcto', () => {
        const errorMessage = 'La etiqueta no existe';
        const error = new EtiquetaInexistenteError(errorMessage);

        expect(error).toBeInstanceOf(EtiquetaInexistenteError);
        expect(error.message).toBe(errorMessage);
        expect(error.name).toBe('EtiquetaInexistenteError');
    });

    test('deberia tener el mensaje de error correcto', () => {
        const errorMessage = 'Error: Etiqueta no encontrada';
        const error = new EtiquetaInexistenteError(errorMessage);

        expect(error.message).toBe(errorMessage);
    });
});