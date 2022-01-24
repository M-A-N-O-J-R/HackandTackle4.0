import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Home from './components/home';
import Agri from './components/agri'
import Safety from './components/safety'
import Environment from './components/environment'
import Health from './components/health'
import Social from './components/social'
import Prize from './components/prize'
import Register from './components/registration'
import Ar from './components/ar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/contact'
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'  component={Home} />
          <Route path='/agri' component={Agri}/>
          <Route path='/safety' component={Safety}/>
          <Route path='/environment' component={Environment}/>
          <Route path='/health' component={Health}/>
          <Route path='/social' component={Social}/>
          <Route path='/team' component={Prize}/>
          <Route path='/Register' component={Register}/>
          <Route path='/Ar' component={Ar}/>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Contact/>
      </Router>
    </>
  );
}

export default React.memo(App);
