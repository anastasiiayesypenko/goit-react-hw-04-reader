import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../components/Loader/Loader';

const AsyncReader = Loadable({
  loader: () =>
    import('../components/Reader/Reader' /* webpackChunkName: 'reader-page' */),
  loading: Loader,
});
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/reader" component={AsyncReader} />

        <Redirect to="/reader" />
      </Switch>{' '}
    </>
  );
};

export default App;
