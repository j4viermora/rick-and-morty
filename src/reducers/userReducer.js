import { types } from "../types/types"

const initialState = {
    favorites: {
        characters : [],
        episodes : []
    }
}

const userReducer = ( state = initialState, action ) => {
    
    const checkNotRepeat = ( element => element.name === action.payload.name )

        switch( action.type ){
            case types.ADDTOFAVORITES:

                const notRepeat = state.favorites.characters.some( checkNotRepeat );

                if( !notRepeat ){
                    return {
                        ...state,
                        favorites : {
                           episodes : [...state.favorites.episodes ] ,
                           characters : [ ...state.favorites.characters, action.payload ] 
                        }
                    }
                }
                 return {
                        ...state
                    }
                
            case types.ADDTOFAVORITESEPISODES:
                
               const notRepeatEpisode = state.favorites.episodes.some( checkNotRepeat ) ;
               if( !notRepeatEpisode ) {
                   return {
                    ...state,
                    favorites : { 
                       characters: [...state.favorites.characters],
                       episodes : [ ...state.favorites.episodes, action.payload ] 
                    }
                   }
               }
               return {
                   ...state
               }
            
            default:
                return state 
        }
}

export default userReducer
