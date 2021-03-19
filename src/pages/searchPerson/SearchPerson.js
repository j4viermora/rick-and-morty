import React from 'react'
import { useSelector } from 'react-redux'
import { CardCharacters } from '../../components/cards/cardCharacters/CardCharacters'
import { Col } from '../../components/layout/Col'
import { Row } from '../../components/layout/Row'
import { SearchCharacter } from '../../components/searchCharacters'




export const SearchPerson = () => {


    const { searchPage } = useSelector( state => state.characters )   
    
    return (
        <div className="mt-5 container" style={{ height: "100vh"}}>
         
         <Row>
               <Col>
                <h2 className="title">Search </h2>
                    <hr/>
                    <div className="mb-5">
                    <SearchCharacter/>
                    </div>
                    <div className="notification is-primary is-light">
                        <p>In this page you can search all character´s</p>
                    </div>
                </Col>
                <Col>
                    <h2 className="title">Results:</h2>
                    <hr/>
                    {
                        searchPage?.map( result => (

                            <CardCharacters 
                            key={ result.id }
                            img={ result.image }
                            name={result.name}
                            status={ result.status }
                            // size={ 'is-half' }
                            />

                        ) )
                    }
                </Col>
         </Row>
        </div>
    )
}
