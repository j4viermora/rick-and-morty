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

    const pathPage = path.substring(1);

    useGetInfo( pathPage, dispatch, types.GetEpisodes );
  
    const {results, info} = useSelector( state => state.episoders ) 

  return (
      <div  className="mt-5 container">
        <p className="title">Episodes</p>
        <InfoEpisodes { ...info } path={ path.substring(1) } />
        <Row>
            {
               results?.slice(0,18).map( ({id, name, air_date}) => (
                    
                  <CardCharacters 
                    size={ "is-one-third" }
                    key={ id }
                    name = {name}
                    date ={ air_date }
                    path={ pathPage }
                  />      
               ) ) 
            }
        </Row> 
      </div>
    )
};
