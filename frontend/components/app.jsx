import React from 'react';
import CoordContainer from './coordinate_container';
import PaddockContainer from './paddock_container';

const App = () => (
  <div className="app">
    <h1>Super Awesome Paddock Generator</h1>
    <CoordContainer />
    <PaddockContainer />
  </div>
);

export default App;
