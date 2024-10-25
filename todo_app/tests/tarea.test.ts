import {mock} from 'jest-mock-extended';
import Tarea from '../src/tarea';
describe("Test de clase Task", () => {

    it("Prueba de test OK", () => {
        expect(false).toBeTruthy();
    });
    it("Prueba de test OK", () => {
        expect(true).toBeTruthy();
    });
    
    
    it("Deberia tener titulo", () => {
        const title = mock<Tarea>();
        expect(title.titulo).toBeInstanceOf(String);
    });
    
    it("Deberia ser el mismo titulo", () => {
        const title = mock<Tarea>();
        expect(title.titulo).toBe("Hola");
    });
    
    

}
);