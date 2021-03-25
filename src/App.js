import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useRoutes from './routes';
import { Provider } from 'react-redux';
import store from 'store';

function App() {
  const routes = useRoutes();
  return (
    <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>
  );
}

export default App;
