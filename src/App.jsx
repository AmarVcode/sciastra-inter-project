import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Appheader from './component/header/Header';
import Maincontent from './component/maincontent/Main';
import Appfooter from './component/Footer'

function App() {

  return (
    <Router>
      <Switch>
<Appheader />
<Route exact path="/" component={<Maincontent />} />
<Appfooter /> 
</Switch>
    </Router>
  )
}

export default App