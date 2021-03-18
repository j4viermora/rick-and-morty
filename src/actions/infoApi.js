import simpleFetch from "../services/fetch";
import { filterInfo } from "../services/filterInfo";
import { types } from "../types/types";

export const startGetInfo = ( endpoint, action  ) =>{
    return async( dispath ) => {

        const resp = await simpleFetch( endpoint );
        const data = await resp.json();

        sessionStorage.setItem( endpoint , JSON.stringify(data) )
        dispath( getInfo( data, action) )

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

const finishSearch = ( data ) => ({
    type : types.characterSearch,
    payload: data
});