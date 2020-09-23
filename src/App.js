import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MainView from './components/Main/MainView'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-flex">
        <SideMenu />
        <MainView />
      </div>
    </div>
  );
}

export default App;
