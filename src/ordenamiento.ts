import tarea from "./tarea";

class ordenamiento {

    // este flag booleano decide si el orden se hace de mayor a menor o menor a mayor
    // true == menor a mayor
    // flase == mayor a menor
    public ordenarPorFecha(listaDesordenada: Array<tarea>, ascendiente: boolean): Array<tarea> {
        // ordena la fecha en base a el flag booleano, si es ascendiente o no
        return listaDesordenada.sort((a, b) => {
            const fechaA = a.getFechaVencimiento();
            const fechaB = b.getFechaVencimiento();

            if (ascendiente === true) {
                if (fechaA.getFullYear() !== fechaB.getFullYear()) {
                    return fechaA.getFullYear() - fechaB.getFullYear();
                } else if (fechaA.getMonth() !== fechaB.getMonth()) {
                    return fechaA.getMonth() - fechaB.getMonth();
                } else {
                    return fechaA.getDate() - fechaB.getDate();
                }
            } else {
                if (fechaA.getFullYear() !== fechaB.getFullYear()) {
                    return fechaB.getFullYear() - fechaA.getFullYear();
                } else if (fechaA.getMonth() !== fechaB.getMonth()) {
                    return fechaB.getMonth() - fechaA.getMonth();
                } else {
                    return fechaB.getDate() - fechaA.getDate();
                }
            }
        });
    } 
    
    //ordena alfabeticamente 
    public ordenarPorTitulo(listaDesordenada: Array<tarea>): Array<tarea> {
        listaDesordenada.sort((a, b) => {
            const tituloA = a.getTitulo();
            const tituloB = b.getTitulo();
            return tituloA.localeCompare(tituloB);
        });
        return listaDesordenada;
    }
        

    

    // ordena por prioridad con el metodo sort
    public ordenarPorPrioridad(listaDesordenada: Array<tarea>, ascendente: boolean): Array<tarea> {
        
        listaDesordenada.sort((a, b) => {
            const prioridadA = a.getPrioridad();
            const prioridadB = b.getPrioridad();

            if(ascendente === true){
                return prioridadA - prioridadB;
            } else {
                return prioridadB - prioridadA;
            }
        });
        return listaDesordenada;
    }
}