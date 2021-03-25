import { Redirect, Route, Switch } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import React from 'react';

const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default useRoutes;
