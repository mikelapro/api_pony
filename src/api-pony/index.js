import { checkApp, getRequest, postRequest, putRequest, deleteRequest, getByIdRequest } from './usecases/index.js';
import { Pony } from './models/pony.js';
export const ponysUrl = 'http://localhost:3001/ponys';
//https://ponyapi.net/

//#region Referencias del HTML.
const getButton = document.querySelector( '#get' );
const postButton = document.querySelector( '#post' );
const putButton = document.querySelector( '#put' );
const deleteButton = document.querySelector( '#delete' );
const getByIdButton = document.querySelector( '#get-by-id' );
const ponyInput = document.querySelector( '#pony-id' );
//#endregion 

//#region Eventos.
getButton.addEventListener( 'click', () => {
    getRequest();
} );

postButton.addEventListener( 'click', () => {
    // NOTE: En una app real, los datos del nuevo pony se le pedirian al usuario.
    // como en este ejemplo estamos probando APIs, lo vamos a crear nosotros 
    // directamente.
    postRequest( getPonyEjemplo1() );
} );

putButton.addEventListener( 'click', async () => {
    // 1. Obtener el pony a modificar por id.
    const pony = await getByIdRequest( ponyInput.value );

    // 2. Modificar el nombre agregandole un '1'.
    pony.name = pony.name + '1';

    // 3. Llamar al caso de uso put request enviandole el pony modificado.
    putRequest( pony );
} );

deleteButton.addEventListener( 'click', () => {
    deleteRequest( ponyInput.value );
} );

getByIdButton.addEventListener( 'click', async () => {
    const pony = await getByIdRequest( ponyInput.value );
} );
//#endregion

checkApp();

/**
 * Crea un pony de ejemplo para el caso de uso post-request.
 * @returns pony.
 */
const getPonyEjemplo1 = () => {
    const pony = new Pony(
        565,
        'Esteban',
        'Armandoestebanquito',
        null,
        'Male',
        null,
        'Programador',
        ['Human', 'Heart'],
        null
    );
    return pony;
}
