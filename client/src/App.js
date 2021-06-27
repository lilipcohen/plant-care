import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />

          <Route exact path={['/', '/home']} component={Home} />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
