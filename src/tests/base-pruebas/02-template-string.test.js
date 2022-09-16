import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe retornar "Hola Jean"', () => {

        const name = 'Jean';

        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);

    });

});