export default class tareaInexistenteError extends Error {
    constructor(message: string) {
      super(message);
    }

    public getMessage(): string{
        return this.message;
    };

  }