import { useState } from "react"
// import { useSelector } from "react-redux"
// import { Col } from "../../components/layout/Col"
import { Row } from "../../components/layout/Row"

export const FavoritesPage = () => {
    
    // const { favorites } = useSelector( state => state.user )
    const [state, setState] = useState('')
    const handleChange = ({ target }) => {
            setState( target.value )  
    }

    console.log(state)

    return (
        <>
        <section className="container mt-5">
           <Row>
           <div className="select is-link">
                <select name="favorites" defaultValue="Episodes" onChange={ handleChange     }>
                    <option value="Episodes" >Episodes</option>
                    <option value="Chareacters">Characters</option>
                </select>
            </div>
           </Row>
        </section>
        </>
    )
}