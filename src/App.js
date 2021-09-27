import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {actions,comedy,originals,romance,more} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Originals" url={originals}/>
      <RowPost title="Actions" isSmall url={actions}/>
      <RowPost title="Romance" isSmall url={romance}/>
      <RowPost title="Comedy" isSmall url={comedy}/>
      <RowPost title="more" isSmall url={more}/>
      
    </div>
  );
}

export default App;
