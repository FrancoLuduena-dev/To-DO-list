export default class EtiquetaInexistenteError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'EtiquetaInexistenteError';
    }
} 