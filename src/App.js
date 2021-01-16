import React from 'react';
import {view as Filter} from './filter';
import {view as Todos} from './todos';

function App() {
  return (
    <div className="App">
      <Todos />
      <Filter />
    </div>
  );
}

export default App;
