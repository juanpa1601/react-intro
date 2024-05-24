import { getUser } from "../../pruebas/funciones";
import { getUsuarioActivo } from "../../pruebas/funciones";

describe('Probando la funcion getUser en funciones.js', () => {
    test('La función me debe devolver un objeto literal', () => {
        //Inicializar
        const testUser = {
            uid: 'ABC123',
            username: 'Jon_Doe123'
        }
        //Estimulo
        const user = getUser();
        //Los objetos literales no pueden ser comparados con toBe
        expect( testUser ).toEqual( user )
    })
})

describe('Probando la funcion getUserActivo en funciones.js', () =>{
    test('La función debe devolver un objeto literal con el paramentro que se le pase',() => {
        //Inicializar
        const userActive = {
            uid: 'ABC567',
            username: 'Juan Pablo'
        }
        const name = 'Juan Pablo';
        //Estimulo
        const userAux = getUsuarioActivo(name);

        //expect(userActive).toEqual(userAux)
        expect(userAux).toEqual(
            {
                uid: 'ABC567',
                username: name
            }
        )
        //
    })  
})