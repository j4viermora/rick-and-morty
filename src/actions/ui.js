import { types } from "../types/types";

export const addFavorites = ( name ) => {
    
    return (dispatch, getState) => {

      console.log(name)
      const { characters }= getState()

      const data = characters.results.filter( favorito => favorito.name === name )

      dispatch( {
          type: types.ADDTOFAVORITES,
          payload: data
      } )

    }
}