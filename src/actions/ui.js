import { types } from "../types/types";

export const addFavorites = ( name ) => {
    
    return (dispatch, getState) => {

      const { characters }= getState()
      const [ data ]= characters.results.filter( favorito => favorito.name.includes(name) )

      console.log(data)

      dispatch( {
        type: types.ADDTOFAVORITES,
        payload: data
      } )
    }
}