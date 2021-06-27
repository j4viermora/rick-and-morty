import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';


import { Link } from 'react-router-dom';
import { WarningHome } from '../../components/advertense/';
import { CardCharacters } from '../../components/cards/cardCharacters/CardCharacters';
import { InfoEpisodes } from '../../components/info_episodes';
import { Col } from '../../components/layout/Col';
import { Row } from '../../components/layout/Row';
import { Search } from '../../components/search/Search';
import { Title } from '../../components/titles';
import useGetInfo from '../../hooks/useGetInfo';
import { types } from '../../types/types';



export const Home = () => {
    

    const dispath = useDispatch();
    const { path } = useRouteMatch();   
    useGetInfo( path.substring(1) , dispath, types.GetInfo );   
   
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
            (!results)
            ? <h2>loading...</h2>
            : results.map((item) => (
              <CardCharacters
                size={"is-one-quarter"}
                key={item.id}
                img={item.image}
                name={item.name}
                status={item.status}
                id={ item.id }
              />
            ))
          }


          {/* {results?.map((item) => (
            <CardCharacters
              size={"is-one-quarter"}
              key={item.id}
              img={item.image}
              name={item.name}
              status={item.status}
              id={ item.id }
            />
          ))} */}
        </Row>
      </div>
    );
};
