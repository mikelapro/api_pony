import { ponysUrl } from '../index.js';

/**
 * Obtiene el objeto correspondiente al id especificado en la url.
 */
export const getByIdRequest = async () => {
    console.log( 'Button GET BY ID' );

    const url = `${ponysUrl}/564`;
    
    const response = await fetch( url, { 
        method: 'GET' // Verbo.
    } ); 
    
    const data = await response.json();
    console.log( data );
}