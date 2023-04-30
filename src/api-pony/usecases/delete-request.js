import { ponysUrl } from '../index.js';

/**
 * Elimina el objeto correspondiente al id especificado en la url.
 * @param {String|Number} ponyId
 */
export const deleteRequest = async ( ponyId ) => {
    console.log( 'Button DELETE' );

    const url = `${ponysUrl}/${ponyId}`;
    const res = await fetch( url, {
        method: 'DELETE'
    } );

    const deleteResult = await res.json();
    console.log( deleteResult );

    return true;
}
