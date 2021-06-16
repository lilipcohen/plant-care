import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />

          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path="/bandprofile/" component={BandProfile} />
          <Route path="/profile/:id" component={BandProfile} />
          <Footer />
          {/* <LeafMap /> */}
        </div>
      </Router>
      <h1>Lyn's Plants!</h1>
    </div>
  );
}

export default App;
