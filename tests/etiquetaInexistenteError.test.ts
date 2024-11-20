import TareaInexistenteError from "../src/exception/tarea-inexistente-error";
import { mock } from 'jest-mock-extended';
import EtiquetaInexistenteError from '../src/exception/etiqueta-inexistente-error';

describe('TareaInexistenteError', () => {
    test('should create an instance of TareaInexistenteError with the correct message and name', () => {
        const errorMessage = 'La tarea no existe';
        const error = new TareaInexistenteError(errorMessage);

        expect(error).toBeInstanceOf(TareaInexistenteError);
        expect(error.message).toBe(errorMessage);
        expect(error.name).toBe('TareaInexistenteError');
    });
});

describe('EtiquetaInexistenteError', () => {
    test('should create an instance of EtiquetaInexistenteError with the correct message and name', () => {
        const errorMessage = 'La etiqueta no existe';
        const error = new EtiquetaInexistenteError(errorMessage);

        expect(error).toBeInstanceOf(EtiquetaInexistenteError);
        expect(error.message).toBe(errorMessage);
        expect(error.name).toBe('EtiquetaInexistenteError');
    });

    test('should have the correct error message', () => {
        const errorMessage = 'Error: Etiqueta no encontrada';
        const error = new EtiquetaInexistenteError(errorMessage);

        expect(error.message).toBe(errorMessage);
    });
});