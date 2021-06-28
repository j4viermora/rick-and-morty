import { types } from "../types/types"

const initialState = {
    favorites: []
}

const userReducer = ( state = initialState, action ) => {

        switch( action.type ){
            case types.ADDTOFAVORITES:

                const checkNotRepeat = ( element => element.name === action.payload.name )

                const notRepeat = state.favorites.some( checkNotRepeat );

                if( !notRepeat ){
                    return {
                        ...state,
                        favorites:[ ...state.favorites, action.payload]
                    }
                }else{
                    return {
                        ...state
                    }
                }

            default:
                return state 
        }
}

export default userReducer
