import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { GlobalStyle } from './style'
import { IconfontStyle } from '@/assets/iconfont'
import routes from '@/routes'

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <IconfontStyle />
        {renderRoutes(routes)}
      </Router>

    </div>
  );
}

export default App;
