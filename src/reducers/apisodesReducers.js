
const apisodesReducers = ( state = {}, action ) => {

        switch( action.type ){
            case 'dele':
                return {
                    ...state
                }
            default:
                return state
        }

}

export default apisodesReducers
