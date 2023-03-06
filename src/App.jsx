import { useState } from 'react'
import './App.css'

import Appheader from './component/header/Header';
import Maincontent from './component/maincontent/Main';
import Appfooter from './component/Footer'

function App() {

  return (
    <div>
<Appheader />
<Maincontent />
<Appfooter /> 
    </div>
  )
}

export default App