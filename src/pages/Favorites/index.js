import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { Col } from "../../components/layout/Col"
import { Row } from "../../components/layout/Row"

export const FavoritesPage = () => {

    const SELECT = {
        CHARACTERS:"0",
        EPISODERS: "1"
    }
    const [ state, setState ] = useState(SELECT.CHARACTERS)
    const handleChange = ({ target }) => {
            setState( target.value )  
    }
    const { characters, episodes } = useSelector(state => state.user.favorites)


    return (
        <>
        <section className="container mt-5">
           <Row>
           <div className="select is-link">
                <select name="favorites" defaultValue={ SELECT.CHARACTERS } onChange={ handleChange     }>
                    <option value={ SELECT.CHARACTERS }>Characters</option>
                    <option value={ SELECT.EPISODERS } >Episodes</option>
                </select>
            </div>
           </Row>
        <Row>
                {
                    (SELECT.CHARACTERS === state) && characters?.map( ({name, image, url }) => <CardFavorite 
                            key={name} 
                            name={ name } 
                            img={ image }
                            url={ url }
                        /> )
                }
                {
                    ( SELECT.EPISODERS === state ) && episodes?.map( ({ name, url }) => <CardFavorite
                        key={ name }
                        name={ name }
                        url={ url }
                    /> )
                }  
        </Row>
        </section>
        </>
    )
}

const CardFavorite = ( { name, img, url } ) => {
    return (
        <>
          <Col fr="is-one-quarter">  
                <div className="card">
                <div className="card-image">
                <figure className="image">
                    {
                        ( img ) && <img src={ img } alt={ name } />
                       
                    }
                </figure>
                </div >
                    <div className="card-content">
                        <h3 className="title is-4">
                            { name }
                        </h3>
                        {
                        ( img ) && <button className="button is-dark">
                            <Link className="has-text-white	" to={`character/${name}`}>
                                Ver más
                            </Link>
                        </button>
                        }
                    </div>
                </div>
           </Col>
        </>
    )
}