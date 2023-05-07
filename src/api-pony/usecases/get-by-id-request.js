import { ponysUrl } from '../index.js';

/**
 * Obtiene el objeto correspondiente al id especificado en la url.
 * @param {number} ponyId 
 * @returns {pony}
 */
export const getByIdRequest = async ( ponyId ) => {
    console.log( 'Button GET BY ID' );

    const url = `${ponysUrl}/${ponyId}`;

    const response = await fetch( url, {
        method: 'GET' // Verbo.
    } );

    const data = await response.json();
    console.log( data );
    return data;
}
