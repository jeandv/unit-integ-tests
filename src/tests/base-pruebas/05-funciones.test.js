import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'Jeandv'
        }

        const user = getUser();

        expect(testUser).toEqual(user);

    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const name = 'Jean';

        const userActive = getUsuarioActivo(name);

        expect(userActive).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });

});