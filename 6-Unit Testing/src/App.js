import React, { useEffect, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useQuery } from "@apollo/client";

import { LOAD_DATA } from './GraphQL/Queries';

import { useDispatch } from 'react-redux';
import { setData } from './store/countries-actions';

import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';

const App = () => {

  const dispatch = useDispatch();

  const { data } = useQuery(LOAD_DATA);

  useEffect(() => {
    if (data) {
      dispatch(setData(data.Country));
    }
  }, [dispatch, data]);

  return (

    <Fragment>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/countries' />
        </Route>
        <Route path='/countries' exact>
          <Countries data-testid='teste' />
        </Route>
        <Route path='/' exact>
          <Redirect to='/countries' />
        </Route>
        <Route path='/countries/:countryId'>
          <CountryDetail test={false} />
        </Route>
        <Route path='*/*'>
          <Countries />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default App;
