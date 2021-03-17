import { types } from "../types/types";

const intialState = {
    
}

export const charactersReducer = ( state = intialState , action ) => {

        switch( action.type ){
            case types.GetInfo:
                return{
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }

}
