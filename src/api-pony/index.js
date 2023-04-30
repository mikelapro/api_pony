import { checkApp, getRequest, postRequest, putRequest, deleteRequest, getByIdRequest } from './usecases/index.js';
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
    postRequest();
} );

putButton.addEventListener( 'click', () => {
    putRequest();
} );

deleteButton.addEventListener( 'click', () => {
    deleteRequest( ponyInput.value );
} );

getByIdButton.addEventListener( 'click', () => {
    getByIdRequest( ponyInput.value );
} );
//#endregion

checkApp();
