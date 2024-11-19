/**
 * Clase que representa un error cuando una etiqueta no existe.
 */
class EtiquetaInexistenteError extends Error {

    /**
     * Crea una instancia de EtiquetaInexistenteError.
     * @param message - El mensaje de error.
     */
    constructor(message: string) {
        super(message);
        this.name = 'EtiquetaInexistenteError';
    }
}

export { EtiquetaInexistenteError };
export default EtiquetaInexistenteError;