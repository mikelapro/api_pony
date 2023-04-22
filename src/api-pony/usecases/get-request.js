export const getRequest = async () => {
    console.log( 'Button GET' );

    const url = `http://localhost:3001/ponys`;
    const res = await fetch( url );
    const data = await res.json();
}
