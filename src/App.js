import React from 'react';

import Header from './components/header';

// import Users from './pages/users'

import Routes from './routes'

const App = () => (
  <div className="App">
    <Header />
    <div className="row">
      <div className="col-3">
      </div>
      <div className="col-9">
        <div className="container" >
          <Routes />
        </div>
      </div>
    </div>

  </div>
);

export default App;
