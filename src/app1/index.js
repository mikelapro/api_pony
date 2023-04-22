import { checkApp, getRequest, postRequest, putRequest, patchRequest, deleteRequest } from './usecases/index.js';

// Referencias del HTML.
//#region
const getButton = document.querySelector( '#get' );
const postButton = document.querySelector( '#post' );
const putButton = document.querySelector( '#put' );
const patchButton = document.querySelector( '#patch' );
const deleteButton = document.querySelector( '#delete' );
//#endregion 

// Eventos.
//#region 
getButton.addEventListener( 'click', () => {
    getRequest();
} );

postButton.addEventListener( 'click', () => {
    postRequest();
} );

putButton.addEventListener( 'click', () => {
    putRequest();
} );

patchButton.addEventListener( 'click', () => {
    patchRequest();
} );

deleteButton.addEventListener( 'click', () => {
    deleteRequest();
} );
//#endregion

checkApp();

//https://ponyapi.net/