import { ponysUrl } from '../index.js';

/**
 * Obtiene todos los objetos de la url.
 */
export const getRequest = async () => {
    console.log( 'Button GET' );

    const url = `${ponysUrl}`;
    
    const response = await fetch( url, { 
        method: 'GET' // Verbo.
    } ); 
    const data = await response.json();

    //console.log( data );

    // console.log(data[0].name);

    for( let i = 0; i < data.length -1; i++ ){
        console.log( data[i].name + ' (' + data[i].id + ')' );
    }
}


// function fetchDeMike(url, verbo = 'GET', body, header){
    
// }

// fetchDeMike(`http://localhost:3001/ponys`, 'GET')
// fetchDeMike(`http://localhost:3001/ponys`, 'POST', '{nombre: "Esteban"}', '')