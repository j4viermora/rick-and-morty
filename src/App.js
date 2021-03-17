import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store'
import { AppRouters } from './routers/AppRouters';

import './App.css';
import './bulma.css';

function App() {
  return (
    <>
       <Provider store={ store } >
            <AppRouters/>
       </Provider>
    </>
  );
}

export default App;
