import { types } from "../types/types";

export const addFavorites = ( toAdd ) => {

  
  return (dispatch, getState) => {

      const { name, path } = toAdd;

      switch (path) {
        case 'character':
          const { characters }= getState();
          const [ character ] = characters.results.filter( favorito => favorito.name.includes(name) ) 
          dispatch( {
            type: types.ADDTOFAVORITES,
            payload: character
          } )    
          break;
        case 'episode':
          const { episoders } = getState();
          const [ episode ]= episoders.results.filter( favorito => favorito.name.includes( name ) )   
          dispatch( {
            type: types.ADDTOFAVORITESEPISODES,
            payload: episode
          } )
          break;
        default:
          break;
      }
    }
}