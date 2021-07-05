import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorites } from '../../../actions/ui'
import { Col } from '../../layout/Col'

export const CardCharacters = ( {
    img,
    name,
    status,
    date,
    size,
    path,

} ) => {

    const dispatch = useDispatch()

    const handleFavorite = () => {
        dispatch( addFavorites( { name, path } ) )
    }

    return (
        <Col fr={size} >
            <div className="card is-flex flex-direction-row ">
                <div className="card-image">
                    <figure className="image is-quare" >
                        <img src={img} alt={img} loading="lazy" />
                    </figure>
                </div>
                    <div className="card-content">
                    <div className="media-content">
                        <p className="title is-5">{ name }</p>
                    </div>
                    <div className="content">
                        { status }
                    <br/>
                    <time>{ date }</time>
                    </div>
                    <button
                    className="button has-text-white is-dark"
                    onClick={ handleFavorite }
                    >Favorites</button>
                </div>
            </div>
        </Col>
    )
}
