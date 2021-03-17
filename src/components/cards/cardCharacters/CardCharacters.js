import React from 'react'
import { Col } from '../../layout/Col'
import './styles.css'

export const CardCharacters = ( {
    img,
    name,
    status
} ) => {
    return (
        <Col >
            <div id="card">
                <div className="card-image">
                    <figure>
                        <img style={{ width: "100vw" }} src={img} alt={img} />
                    </figure>
                </div>
                    <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{ name }</p>
                    </div>
                    <div className="content">
                        { status }
                    <br/>
                    <time>11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
        </Col>
    )
}
