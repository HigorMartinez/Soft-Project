import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { LOAD_DATA } from './GraphQL/Queries';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';
import { useDispatch } from 'react-redux';
import { setData } from './store/countries-actions';

function App() {

  const dispatch = useDispatch();

  const { data } = useQuery(LOAD_DATA)

  useEffect(() => {
    if (data) {
      dispatch(setData(data.Country));
    }
  }, [dispatch, data]);

  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/countries' />
        </Route>
        <Route path='/countries' exact>
          <Countries/>
        </Route>
        <Route path='/countries/:countryId'>
          <CountryDetail/>
        </Route>
        <Route path='*'>
          <Countries/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
