import { types } from "../types/types"

const apisodesReducers = ( state = {
    info: null,
    results: null
} , action ) => {

        switch( action.type ){
            case types.GetEpisodes:
                return {
                    ...state,
                    info: action.payload.info,
                    results: action.payload.results
                }
            default:
                return state
        }

}

export default apisodesReducers
