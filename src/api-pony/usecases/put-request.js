import { ponysUrl } from '../index.js';

/**
 * Actualiza el objeto que se envia en el body correspondiente al id especificado en la url.
 */
export const putRequest = async () => {
    console.log( 'Button PUT' );

    const url = `${ponysUrl}/564`;

    const response = await fetch( url, {
        method: 'PUT',
        body: '{"id":564,"name":"Mike magic","alias":"Princess developer","url":"https://mlp.fandom.com/wiki/Twilight_Sparkle","sex":"Female","residence":"...","occupation":"Developer","kind":["Developer","Earth","Human","Alicorn"],"image":["https://avatars.githubusercontent.com/u/79405108?v=4"]}', //JSON.stringify()
        headers: {
            'Content-Type': 'application/json'
        }
    } );

    const newPony = await response.json();
    console.log( newPony );

}

