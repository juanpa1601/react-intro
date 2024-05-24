import { getSaludo } from "../../pruebas/template-string";

describe('Probando template-string.js', () => {
    test('La función debe devolver un Hola Juan',() => {
        const nombre = "Juan";
        const saludo = getSaludo(nombre)

        expect(saludo).toBe(`Hola ${nombre}`)
    })
})