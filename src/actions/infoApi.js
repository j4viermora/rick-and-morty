import simpleFetch from "../services/fetch";
import { filterInfo } from "../services/filterInfo";

export const startGetInfo = ( endpoint, action  ) =>{
    return async( dispath ) => {

        const resp = await simpleFetch( endpoint );
        const data = await resp.json();

        dispath( getInfo( data, action) )

    }
}

export function getInfo( data, types ){
        return {
            type: types,
            payload: data
        }
}

export const startSearch = ( { search } ) => {
    return ( dispath, getState ) =>  {


        filterInfo()
        console.log(search)
    }

}