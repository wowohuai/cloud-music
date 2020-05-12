import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { IconfontStyle } from '@/assets/iconfont'
import routes from '@/routes'
import store from '@/store'

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <GlobalStyle />
          <IconfontStyle />
          {renderRoutes(routes)}
        </Provider>
      </Router>

    </div>
  );
}

export default App;
