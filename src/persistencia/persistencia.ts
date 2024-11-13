import path from "path";
import {CustomFileClass} from 'stdio'
import Tarea from "../tarea";
import { prioridad, categoria } from "../enums";


const file: CustomFileClass = new CustomFileClass();


abstract class Persistencia {



    static async obtenerBaseDeDatos() {
        let json_array: string[] = []
        
        file.open(path.resolve("./src/database/db.json"), "r");
      
        let i = 1;
        for await(const line of file.readLine()) {
          
           json_array.push(line)
            
          
          i++;
        }
        
        const objetos = await JSON.parse(json_array.join(''));


        return objetos.map((objeto: { titulo: string; descripcion: string; fechaVencimiento: Date | null; prioridad: prioridad | null; categoria: categoria | null; }) => new Tarea(objeto.titulo, objeto.descripcion,objeto.fechaVencimiento,objeto.prioridad,objeto.categoria))
        
        
      }


    static async guardarBaseDeDatos(data:string) {
  
    file.open(path.resolve("./src/database/db.json"), "w");
  
    file.writeToFile(data);
    
  
    file.close();
  
  
  }


}


export { Persistencia };
export default Persistencia;