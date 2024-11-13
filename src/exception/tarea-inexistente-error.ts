export default class TareaInexistenteError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'TareaInexistenteError';
    }

}