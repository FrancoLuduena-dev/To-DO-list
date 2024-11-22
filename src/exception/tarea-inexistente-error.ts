/**
 * Clase que representa un error cuando una tarea no existe.
 */
class TareaInexistenteError extends Error {

    /**
     * Crea una instancia de TareaInexistenteError.
     * @param message - El mensaje de error.
     */
    constructor(message: string) {
        super(message);
        this.name = 'TareaInexistenteError';
    }
}

export { TareaInexistenteError };
export default TareaInexistenteError;