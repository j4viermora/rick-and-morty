import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { CardCharacters } from '../../components/cards/cardCharacters/CardCharacters';
import { Row } from '../../components/layout/Row';
import { Search } from '../../components/search/Search';
import { Title } from '../../components/titles';


import useGetInfo from '../../hooks/useGetInfo';
import { filterInfo } from '../../services/filterInfo';
import { types } from '../../types/types';



export const Home = () => {
    

    const dispath = useDispatch();
    const { path } = useRouteMatch();   
    useGetInfo( path.substring(1) , dispath, types.GetInfo )
    const { results } = useSelector( state => state.characters )    
    

    return (
        <div className="container mt-5">                  
            <Title>
                Search
            </Title>
            <Search    
            />
              <Row>  
                  {
                     results?.slice(0,18).map( item => (
                         
                         <CardCharacters
                            key={ item.id }
                            img={ item.image }
                            name={ item.name } 
                            status={ item.status }                       
                         />  
                     ) ) 
                  }
              </Row> 
        </div>
    )
};
