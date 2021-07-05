import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';


import { Link } from 'react-router-dom';
import { WarningHome } from '../../components/advertense';
import { CardCharacters } from '../../components/cards/cardCharacters/CardCharacters';
import { InfoEpisodes } from '../../components/info_episodes';
import { Col } from '../../components/layout/Col';
import { Row } from '../../components/layout/Row';
import { Search } from '../../components/search/Search';
import LoadingSkeleton from '../../components/Skeleton';
import { Title } from '../../components/titles';
import useGetInfo from '../../hooks/useGetInfo';
import { types } from '../../types/types';



export const Home = () => {
    const dispath = useDispatch();
    const { path } = useRouteMatch();   
    const pathPage = path.substring(1);
    useGetInfo( pathPage , dispath, types.GetInfo );    
    const { results , info } = useSelector( state => state.characters )     

    return (
      <div className="container mt-5">
        <Row>
          <Col>
            <Title>Search</Title>
            <Search />
          </Col>
        </Row>
        <Row>
          <Col>
            <WarningHome>
              This is a simple searcher, if you want to do an advenced search{" "}
              <Link to="search">go to the search page</Link>
            </WarningHome>
          </Col>
          <Col>
            <InfoEpisodes {...info} path={path.substring(1)} />
          </Col>
        </Row>
        <Row>
          { 

              (results)
              ? results.map(({ id, image, name, status, specie, location, episode }) => (
                <CardCharacters
                   size={"is-half"}
                   key={ id }
                   img={ image }
                   name={ name }
                   status={ status }
                   id={ id }
                   specie={ specie  }
                   location={ location }
                   episode={ episode }
                   path={ pathPage}
                   />
                ))
               : [...Array(22)].map( (_, index) => <LoadingSkeleton key={index} /> ) 
          }
        </Row>
      </div>
    );
};
