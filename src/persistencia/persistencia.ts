import path from "path";
import { CustomFileClass } from 'stdio'
import Tarea from "../tarea";
import { prioridad, categoria } from "../enums";
import Director from "../director";
import ConstructorTarea from "../constructorTarea";
import ToDoLista from "../toDoList";

const file: CustomFileClass = new CustomFileClass();


class Persistencia {
  private constructorTarea: ConstructorTarea;
  private lista: ToDoLista;
  private director: Director;

  constructor(constructorTarea: ConstructorTarea, lista: ToDoLista, director: Director) {
    this.director = director;
    this.lista = lista;
    this.constructorTarea = constructorTarea;
  }

  async obtenerBaseDeDatos() {
    let json_array: string[] = []

    file.open(path.resolve("./src/database/db.json"), "r");

    let i = 1;
    for await (const line of file.readLine()) {

      json_array.push(line)


      i++;
    }

    const objetos = await JSON.parse(json_array.join(''));


    return await objetos.map(
      (objeto: {
        titulo: string,
        descripcion: string,
        fechaVencimiento: Date | null,
        fechaCreacion: Date,
        fechaFinalizacion: Date | null,
        prioridad: prioridad | null,
        completado: boolean,
        porcentajeAvance: number,
        categoria: categoria | null,
        etiquetas: string[]

      }) => {
        let fechaCreacion = objeto.fechaCreacion;
        let fechaFin = objeto.fechaFinalizacion == null ? null : objeto.fechaFinalizacion;
        let fechaVencimiento = objeto.fechaVencimiento == null ? null : objeto.fechaVencimiento;

        this.constructorTarea.setTitulo(objeto.titulo)
          .setDescripcion(objeto.descripcion)
          .setFechaVencimiento(fechaVencimiento)
          .setFechaCreacion(fechaCreacion)
          .setPrioridad(objeto.prioridad)
          .setCompletado(objeto.completado)
          .setPorcentajeAvance(objeto.porcentajeAvance)
          .setCategoria(objeto.categoria)
          .setEtiquetas(objeto.etiquetas)
          .setFechaFinalizacion(fechaFin)

        this.director.construirTarea()

      });

  }


  async guardarBaseDeDatos(data: string) {

    file.open(path.resolve("./src/database/db.json"), "w");

    file.writeToFile(data);

    file.close();

  }

}

export { Persistencia };
export default Persistencia;