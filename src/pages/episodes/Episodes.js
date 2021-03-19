import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';


import useGetInfo from '../../hooks/useGetInfo';
import { types } from '../../types/types';
import { Row } from '../../components/layout/Row';
import { CardCharacters } from '../../components/cards/cardCharacters/CardCharacters';
import { InfoEpisodes } from '../../components/info_episodes';

export const Episodes = () => {
   
    const dispatch = useDispatch();
    const { path }  = useRouteMatch();

    useGetInfo( path.substring(1), dispatch, types.GetEpisodes );
  
    const {results, info} = useSelector( state => state.apisoders ) 
    console.log(info)

  return (
      <div  className="mt-5 container">
        <p className="title">Episodes</p>
        <InfoEpisodes { ...info } path={ path.substring(1) } />
        <Row>
            {
               results?.slice(0,18).map( item => (
                    
                  <CardCharacters 
                    size={ "is-one-third" }
                    key={ item.id }
                    name = {item.name}
                    date ={ item.air_date }
                  />
                  
               ) ) 
            }
        </Row> 
      </div>
    )
};
