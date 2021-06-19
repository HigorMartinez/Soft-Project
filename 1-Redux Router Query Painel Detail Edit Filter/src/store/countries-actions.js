import { countriesActions } from './countries-slice';

export const setData = (data) => {

  return (dispatch) => {
    dispatch(
      countriesActions.loadCountries({
        items: data,
      })
    );
  }
};

export const replaceData = (newItem) => {

  return (dispatch) => {
    dispatch(
      countriesActions.replaceCountry({
        item: newItem,
      })
    );
  }
};

