import path from "path";
import { CustomFileClass } from 'stdio'
import Tarea from "../tarea";
import { prioridad, categoria } from "../enums";
import Director from "../director";
import ConstructorTarea from "../constructorTarea";
import ToDoLista from "../toDoList";

const file: CustomFileClass = new CustomFileClass();


/**
 * La clase Persistencia se encarga de manejar la obtención y almacenamiento
 * de tareas en una base de datos en formato JSON. Se integra con un constructor
 * de tareas, una lista de tareas y un director para la creación de tareas a partir
 * de los datos almacenados.
 */
class Persistencia {
  private constructorTarea: ConstructorTarea;
  private lista: ToDoLista;
  private director: Director;

  /**
   * Crea una instancia de Persistencia.
   * 
   * @param constructorTarea - El constructor de tareas que será utilizado para crear nuevas tareas.
   * @param lista - La lista de tareas a la que se agregarán las tareas obtenidas de la base de datos.
   * @param director - El director que manejará el proceso de construcción de las tareas.
   */
  constructor(constructorTarea: ConstructorTarea, lista: ToDoLista, director: Director) {
    this.director = director;
    this.lista = lista;
    this.constructorTarea = constructorTarea;
  }

  /**
   * Obtiene las tareas almacenadas en la base de datos y las agrega a la lista de tareas.
   * 
   * @returns {Promise<void>} Una promesa que se resuelve cuando se han obtenido todas las tareas.
   */
  async obtenerBaseDeDatos(): Promise<void> {
    let json_array: string[] = [];

    file.open(path.resolve("./src/database/db.json"), "r");

    let i = 1;
    for await (const line of file.readLine()) {
      json_array.push(line);
      i++;
    }

    const objetos = await JSON.parse(json_array.join(''));

    return await objetos.map(
      (objeto: {
        titulo: string;
        descripcion: string;
        fechaVencimiento: Date | null;
        fechaCreacion: Date;
        fechaFinalizacion: Date | null;
        prioridad: prioridad | null;
        completado: boolean;
        porcentajeAvance: number;
        categoria: categoria | null;
        etiquetas: string[];
      }) => {
        let fechaCreacion = objeto.fechaCreacion;
        let fechaFin = objeto.fechaFinalizacion == null ? null : objeto.fechaFinalizacion;
        let fechaVencimiento = objeto.fechaVencimiento == null ? null : objeto.fechaVencimiento;

        let tarea = this.director.construirTarea(() => {
          this.constructorTarea.setTitulo(objeto.titulo)
            .setDescripcion(objeto.descripcion)
            .setFechaVencimiento(fechaVencimiento)
            .setFechaCreacion(fechaCreacion)
            .setPrioridad(objeto.prioridad)
            .setCompletado(objeto.completado)
            .setPorcentajeAvance(objeto.porcentajeAvance)
            .setCategoria(objeto.categoria)
            .setEtiquetas(objeto.etiquetas)
            .setFechaFinalizacion(fechaFin);
        });
        this.lista.agregarALista(tarea);
      }
    );
  }

  /**
   * Guarda los datos proporcionados en la base de datos.
   * 
   * @param data - Los datos que se guardarán en la base de datos.
   * @returns {Promise<void>} Una promesa que se resuelve cuando los datos han sido guardados.
   */
  async guardarBaseDeDatos(data: string): Promise<void> {
    file.open(path.resolve("./src/database/db.json"), "w");

    file.writeToFile(data);

    file.close();
  }
}

export { Persistencia };
export default Persistencia;
