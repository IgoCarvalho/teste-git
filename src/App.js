import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Card from './components/card';

// import Users from './pages/users'

import Routes from './routes'

const App = () => (
  <div className="App">
    <Header />
    <div className="row">
      <div className="col-3">
      <Card />
      </div>
      <div className="col-9">
        <div className="container" >
          <Routes />
        </div>
      </div>
    </div>
    <Footer />

  </div>
);

export default App;
