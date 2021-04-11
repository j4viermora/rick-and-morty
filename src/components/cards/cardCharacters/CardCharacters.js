import React from 'react'
import { Col } from '../../layout/Col'

export const CardCharacters = ( {
    img,
    name,
    status,
    date,
    size,
    
} ) => {
    return (
        <Col fr={size} >
            <div className="card">
                <div className="card-image">
                    <figure className="image" >
                        <img src={img} alt={img} />
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
                </div>
            </div>
        </Col>
    )
}
