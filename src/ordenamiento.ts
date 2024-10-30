abstract class ordenamiento{

    // este flag booleano decide si el orden se hace de mayor a menor o menor a mayor
    // true == menor a mayor
    // flase == mayor a menor
    public static ordenarPorFecha(listaDesordenada: Array<tarea>, b: boolean): Array<tarea> {

    if (b === true) {
        // el metodo sort compara el primer valor con el segundo, aun no entendi muy bien el funcionamiento exactamente de este metodo nativo de javascript, pero ordena de menor a mayor y en el segundo caso de mayor a menor
        return listaDesordenada.sort((a, b) => {
            const fechaA = a.getFechaVencimiento();
            const fechaB = b.getFechaVencimiento();

            if (fechaA.getFullYear() !== fechaB.getFullYear()) {
                return fechaA.getFullYear() - fechaB.getFullYear();
            } else if (fechaA.getMonth() !== fechaB.getMonth()) {
                return fechaA.getMonth() - fechaB.getMonth();
            } else {
                return fechaA.getDate() - fechaB.getDate();
            }
        });
    } else {
        return listaDesordenada.sort((a, b) => {
            const fechaA = a.getFechaVencimiento();
            const fechaB = b.getFechaVencimiento();

            if (fechaA.getFullYear() !== fechaB.getFullYear()) {
                return fechaB.getFullYear() - fechaA.getFullYear();
            } else if (fechaA.getMonth() !== fechaB.getMonth()) {
                return fechaB.getMonth() - fechaA.getMonth();
            } else {
                return fechaB.getDate() - fechaA.getDate();
            }
        });
        }
    }

    public static ordenarPorTitulo(listaDesordenada: Array<tarea>, b: boolean): Array<tarea> {
        let i: number = 0;
        let flag: boolean = false;

        // burbujeo para ordenar, en el primer caso menor a mayor y segundo caso mayor a menor
        // 
        if (b === true) {
            while (i < listaDesordenada.length && !flag) {
                flag = true;
                for (let j = 0; j < listaDesordenada.length - 1; j++) {
                    if (listaDesordenada[j].getTitulo() > listaDesordenada[j + 1].getTitulo()) {
                        const tareaAux: tarea = listaDesordenada[j + 1];
                        listaDesordenada[j + 1] = listaDesordenada[j];
                        listaDesordenada[j] = tareaAux;
                        flag = false;
                    }
                }
                i++;
            }
            return listaDesordenada;
        } else {
            while (i < listaDesordenada.length && !flag) {
                flag = true;
                for (let j = 0; j < listaDesordenada.length - 1; j++) {
                    if (listaDesordenada[j].getTitulo() < listaDesordenada[j + 1].getTitulo()) {
                        const tareaAux: tarea = listaDesordenada[j + 1];
                        listaDesordenada[j + 1] = listaDesordenada[j];
                        listaDesordenada[j] = tareaAux;
                        flag = false;
                    }
                }
                i++;
            }
            return listaDesordenada;
        }

    }

    // falta implementar el orden por priodidad, hay que ver como se va a implementar en si el sistema de prioridad de cada tarea
    public static ordenarPorPrioridad(listaDesordenada: Array<tarea>, b: boolean): Array<tarea> {

        return listaDesordenada;
    }
}