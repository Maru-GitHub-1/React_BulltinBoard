import React from 'react';
import { useSelector } from 'react-redux'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MessageView from './components/Main/MessageView'


function App() {
  const state = useSelector((state) => {
    return state;
  })

  console.log(state)

  return (
    <div className="App">
      <Header />
      <div className="app-flex">
        <Router>
          <SideMenu />
          <Route path="/:channelId" exact component={MessageView} />
        </Router>
      </div>
    </div>
  );
}

export default App;
