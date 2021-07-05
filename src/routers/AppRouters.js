import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'


import { Navbar } from '../components/navbar/Navbar';
import { Episodes } from '../pages/Episodes';
import { Home } from '../pages/Home';
import { SearchCharacter } from '../pages/SearchCharacter/';
import { Footer } from '../components/footer/index';
import { FavoritesPage } from '../pages/Favorites';
import { SingleCharacter } from '../pages/Single';

export const AppRouters = () => {
    
    return (
        <>
           <Router>
              <Navbar/>
                <div>
                     <Switch>
                        
                        <Route  exact path="/character" component={ Home }/>
                        <Route  exact path="/episode" component={ Episodes }/>
                        <Route  exact path="/search" component={ SearchCharacter } />  
                        <Route  exact path="/favorites" component={ FavoritesPage } />  
                        <Route  exact path="/character/:name" component={ SingleCharacter } />  
                                     
                        <Redirect to="/character" />            
                    </Switch>
                </div>
                <Footer/>       
           </Router>
        </>
    )
}
