import simpleFetch from "../services/fetch";
import { filterInfo } from "../services/filterInfo";
import { types } from "../types/types";


export const startGetInfo = ( endpoint, action  ) =>{
    return async( dispath ) => {

        try{
            const resp = await simpleFetch( endpoint );
            const data = await resp.json();
            
            if( data.results ){
                sessionStorage.setItem( endpoint , JSON.stringify(data) )
                dispath( getInfo( data, action) )
            }else{
                console.log(data.error)
            }


        }catch(err){
            console.log(err)
        }

    }
}

export function getInfo( data, types ){
        return {
            type: types,
            payload: data
        }
}

export const startSearch = ( { search }, local ) => {
    return ( dispath) =>  {
        const result = filterInfo( search , local );
        console.log(search)
        dispath(finishSearch( result ));
    }
}

export const startSearchInApi = ( queryString ) => {

    return async( dispath ) => {
        
        try{

            const toSearch = queryString.toLowerCase()
            const resp = await simpleFetch( `character/?name=${ encodeURI(toSearch) }` )
            const data = await resp.json()
            
            if( data.results ){
                dispath( setSearchFromApi( data.results ) )
            }else{
               alert(data.error)
            }
            
       }catch( e ){
            console.log(e)}
    }
}
const setSearchFromApi = ( data ) => {
    return{
        type : types.setSearchApi,
        payload: data
    }
};
const finishSearch = ( data ) => ({
    type : types.characterSearch,
    payload: data
});

