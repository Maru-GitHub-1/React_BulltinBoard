import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Main from './components/Main/Main'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-flex">
        <SideMenu />
        <Main />
      </div>
    </div>
  );
}

export default App;
