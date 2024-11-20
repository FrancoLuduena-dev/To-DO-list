import { mock } from 'jest-mock-extended';
import TareaInexistenteError from "../src/exception/tarea-inexistente-error";

describe('TareaInexistenteError', () => {
    test('debería crear una instancia de TareaInexistenteError con el mensaje y nombre correctos', () => {
        const mensajeError = 'La tarea no existe';
        const error = new TareaInexistenteError(mensajeError);

        expect(error).toBeInstanceOf(TareaInexistenteError);
        expect(error.message).toBe(mensajeError);
        expect(error.name).toBe('TareaInexistenteError');
    });

    test('debería tener el mensaje de error correcto', () => {
        const mensajeError = 'Error: Tarea no encontrada';
        const error = new TareaInexistenteError(mensajeError);

        expect(error.message).toBe(mensajeError);
    });
});