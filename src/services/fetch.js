const baseUrl = 'https://rickandmortyapi.com/api/';

const simpleFetch = ( endpoint ) => {

        const url = `${baseUrl}/${endpoint}`;
        
        return fetch( url )
    
}



export default simpleFetch