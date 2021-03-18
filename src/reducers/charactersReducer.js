import { types } from "../types/types";

const intialState = {
    results: null,
    info: null
}

export const charactersReducer = ( state = intialState , action ) => {

        switch( action.type ){
            case types.GetInfo:
                return{
                    ...state,
                    ...action.payload
                }
            case types.characterSearch:
                return{
                    ...state,
                    results : action.payload
                }
            default:
                return state
        }

}
