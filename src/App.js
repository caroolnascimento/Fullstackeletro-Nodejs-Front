import React from 'react';
import { HashRouter } from 'react-router-dom';

import { lazy, Suspense } from "react";
//import ComponentMenu from "./components/ComponentMenu";
//import ComponentFooter from "./components/ComponentFooter";
//import ComponentRouters from './components/ComponentRouters';

const ComponentMenu = lazy(()=> import('./components/ComponentMenu'));
const ComponentFooter = lazy(()=> import('./components/ComponentFooter'));
const ComponentRouters = lazy(()=> import('./components/ComponentRouters'));


function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Suspense fallback={<p>CARREGANDO...</p>}>
        <ComponentMenu />
        </Suspense>
        <Suspense fallback={<p>CARREGANDO...</p>}>
        <ComponentRouters />
        </Suspense>
        <Suspense fallback={<p>CARREGANDO...</p>}>
        <ComponentFooter />
        </Suspense>
      </div>
    </HashRouter>
  )
}

export default App;
