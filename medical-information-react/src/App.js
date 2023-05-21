import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import BlogPage from './BlogPage';
import DoctorPage from './DoctorPage';
import HospitalPage from './HospitalPage';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={BlogPage} />
          <Route path="/doctor" component={DoctorPage} />
          <Route path="/hospital" component={HospitalPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
