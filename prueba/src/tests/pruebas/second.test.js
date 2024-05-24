describe('Pruebas en <ElComponente/>', () => {
    test('Se espera que el string recibido sea igual al pasarle el método .trim()', () => {
        //1.Arrange(Inicializar)
        const message1 = 'Hola JEST ';
        
        //2.Act(Estimulo)
        const message2 = message1.trim()
    
        //3.Asert(Observar el comportamiento esperado)
        expect(message1).toBe(message2)
    })
})