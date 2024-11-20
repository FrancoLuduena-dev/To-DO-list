import Tarea from "./tarea";

interface Busqueda{
    buscar(tarea: Tarea[], parametro: any): Tarea[];
}

export { Busqueda };
export default Busqueda;