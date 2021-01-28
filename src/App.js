import React from 'react';
import { HashRouter } from 'react-router-dom';

import ComponentMenu from "./components/ComponentMenu";
import ComponentFooter from "./components/ComponentFooter";
import ComponentRouters from './components/ComponentRouters';

function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
        <ComponentMenu />
        <ComponentRouters />
        <ComponentFooter />
      </div>
    </HashRouter>
  )
}

export default App;
