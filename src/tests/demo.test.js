
describe('Pruebas en <DemoComponent/>', () => {

    test('Esta prueba no tiene que fallar', () => {

        // 1. Inicializacion
        const message1 = 'Hola mundo';

        // 2. Estimulo
        const message2 = message1.trim();

        // 3. Observar comportamiento... esperado.
        expect(message1).toBe(message2);

    });

})
