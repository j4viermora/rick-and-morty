import React from 'react'
import { useSelector } from 'react-redux'
import { CardCharacters } from '../../components/cards/cardCharacters/CardCharacters'
import { Col } from '../../components/layout/Col'
import { Row } from '../../components/layout/Row'
import { SearchApiCharacter } from '../../components/searchCharacters'




export const SearchCharacter = () => {


    const { searchPage } = useSelector( state => state.characters )   
    
    return (
        <div className="mt-5 container" >
         
         <Row>
               <Col>
                <h2 className="title">Search </h2>
                    <hr/>
                    <div className="mb-5">
                    <SearchApiCharacter/>
                    </div>
                    <div className="notification is-primary is-light">
                        <p>In this page you can search all character´s</p>
                    </div>
                    <Row>
                     {
                                searchPage?.slice( 10,20 ).map( result => (

                                    <CardCharacters 
                                    key={ result.id }
                                    img={ result.image }
                                    name={result.name}
                                    status={ result.status }
                                    size={ "is-full" }
                                    />

                                ) )
                            }
                    </Row>
                </Col>
                <Col>
                    <h2 className="title">Results:</h2>
                    <hr/>
                    <Row>
                            
                            {
                                searchPage?.slice( 0,10 ).map( result => (

                                    <CardCharacters 
                                    key={ result.id }
                                    img={ result.image }
                                    name={result.name}
                                    status={ result.status }
                                    size={ "is-full" }
                                    />

                                ) )
                            }
                    </Row>
                </Col>
         </Row>
        </div>
    )
}
