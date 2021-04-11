import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'


import { Navbar } from '../components/navbar/Navbar';
import { Episodes } from '../pages/episodes/Episodes';
import { Home } from '../pages/home/Home';
import { SearchPerson } from '../pages/searchPerson/SearchPerson';
import { Footer } from '../components/footer/index';
import { FavoritesPage } from '../pages/favorites/Favorites';

export const AppRouters = () => {
    
    return (
        <>
           <Router>
              <Navbar/>
                <div>
                     <Switch>
                        
                        <Route  exact path="/character" component={ Home }/>
                        <Route  exact path="/episode" component={ Episodes }/>
                        <Route  exact path="/search" component={ SearchPerson } />  
                        <Route  exact path="/favorites" component={ FavoritesPage } />  
                                     
                        <Redirect to="/character" />            
                    </Switch>
                </div>
                <Footer/>
              
           </Router>
        </>
    )
}
