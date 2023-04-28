import { ponysUrl } from '../index.js';

/**
 * Elimina el objeto correspondiente al id especificado en la url.
 * @param {String|Number} id
 */
export const deleteRequest = async () => {
    console.log( 'Button DELETE' );

    const url = `${ponysUrl}/564`;
    const res = await fetch( url, {
        method: 'DELETE'
    } );

    const deleteResult = await res.json();
    console.log( deleteResult );

    return true;
}
