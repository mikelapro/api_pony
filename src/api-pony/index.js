import { checkApp, getRequest, postRequest, putRequest, deleteRequest, getByIdRequest } from './usecases/index.js';
export const ponysUrl = 'http://localhost:3001/ponys';

//#region Referencias del HTML.
const getButton = document.querySelector( '#get' );
const postButton = document.querySelector( '#post' );
const putButton = document.querySelector( '#put' );
const deleteButton = document.querySelector( '#delete' );
const getByIdButton = document.querySelector( '#get-by-id' );
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
    deleteRequest();
} );

getByIdButton.addEventListener( 'click', () => {
    getByIdRequest();
} );
//#endregion

checkApp();

//https://ponyapi.net/