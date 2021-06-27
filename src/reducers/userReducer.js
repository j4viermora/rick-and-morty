import { types } from "../types/types"

const initialState = {
    favorites:[]
}

const userReducer = ( state = initialState, action ) => {

        switch( action.type ){
            case types.ADDTOFAVORITES:
                return {
                    ...state,
                    favorites:[ ...state.favorites, action.payload]
                }
            default:
                return state 
        }
}

export default userReducer
