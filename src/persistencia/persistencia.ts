import path from "path";
import {CustomFileClass} from 'stdio'


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
      
        return  await JSON.parse(json_array.join(''))
        
        
      }


    static async guardarBaseDeDatos(data:string) {
  
    file.open(path.resolve("./src/database/db.json"), "w");
  
    file.writeToFile(data);
    
  
    file.close();
  
  
  }


}


export { Persistencia };
export default Persistencia;