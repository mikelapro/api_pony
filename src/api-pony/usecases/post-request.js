import { ponysUrl } from '../index.js';

/**
 * Inserta un nuevo objeto en la url especificada.
 */
export const postRequest = async ( pony ) => {
    console.log( 'Button POST' );

    const url = `${ponysUrl}`;

    const response = await fetch( url, {
        method: 'POST',
        // body: '{"id":564,"name":"Mike fligth","alias":"Princess developer","url":"https://mlp.fandom.com/wiki/Twilight_Sparkle","sex":"Female","residence":"...","occupation":"Developer","kind":["Developer","Earth","Human","Alicorn"],"image":["https://avatars.githubusercontent.com/u/79405108?v=4"]}', //JSON.stringify()
        body: JSON.stringify( pony ),
        headers: {
            'Content-Type': 'application/json'
        }
    } );

    const newPony = await response.json();
    console.log( newPony );
}
