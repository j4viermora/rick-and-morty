import { useEffect } from "react"
import { startGetInfo } from "../actions/infoApi"

const useGetInfo = ( endpoint, dispatch, action ) => {

    useEffect( () => {
        
        dispatch( startGetInfo( endpoint, action ) )
   
    }, [ endpoint, dispatch, action ] )

}

export default useGetInfo