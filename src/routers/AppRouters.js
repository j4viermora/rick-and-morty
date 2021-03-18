import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import { Footer } from '../components/footer';

import { Navbar } from '../components/navbar/Navbar';
import { Episodes } from '../pages/episodes/Episodes';
import { Home } from '../pages/home/Home';
import { SearchPerson } from '../pages/searchPerson/SearchPerson';

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
                                     
                        <Redirect to="/character" />            
                    </Switch>
                </div>
                <Footer />
           </Router>
        </>
    )
}
