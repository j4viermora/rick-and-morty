import React from 'react'
import { Col } from '../../components/layout/Col'
import { Row } from '../../components/layout/Row'
import { Search } from '../../components/search/Search'

export const SearchPerson = () => {
    return (
        <div className="mt-5 container" style={{ height: "100vh"}}>
         
         <Row>
                {/* left column */}

               <Col>
               <h2 className="title">Search </h2>
                <div className="mb-5">
                <Search/>
                </div>
                <div className="notification is-primary is-light">
                    <p>In this page you can search all character´s</p>
                </div>
               </Col>

                {/* right column */}

               <Col>             
               </Col>
         </Row>
        </div>
    )
}
