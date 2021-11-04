import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/App.css';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';
import Navbar from 'components/Navbar';
import DarkLightContextProvider from 'context/DarkLightContext';
import WorksDetail from 'pages/WorksDetail';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/works'>
          <Works />
        </Route>
        <Route path='/works/:worksSlug'>
          <WorksDetail />
        </Route>
      </Switch>
    </Router>
  );
};  

ReactDOM.render(<DarkLightContextProvider><App /></DarkLightContextProvider>, document.getElementById('root'))