import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MessageView from './components/Main/MessageView'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-flex">
        <Router>
          <SideMenu />
        </Router>
        <Router>
          <Route path="/:channelId" exact component={MessageView} />
          <Route path="*" exact component={MessageView} />
        </Router>
      </div>
    </div>
  );
}

export default App;
