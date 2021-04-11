const initialState = {
    userName: 'Javier',
    favorites:[]
}

const userReducer = ( state = initialState, action ) => {

        switch( action.type ){
            case 'hola':
                return {
                    ...state,
                    data: action.payload
                }
            default:
                return state 
        }
}

export default userReducer
