import { useSelector } from "react-redux"

export const FavoritesPage = () => {
    
    const { favorites } = useSelector( state => state.user )
    
    return (
        <>
            {
                favorites?.map( item => <h2>hola</h2> )
            }
        </>
    )
}