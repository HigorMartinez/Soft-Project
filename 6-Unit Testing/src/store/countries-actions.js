import { countriesActions } from './countries-slice';

export const setData = (data) => {

  return (dispatch) => {
    const newData = [];

    for (const key in data) {
      const item = {
        id: key,
        ...data[key],
      };
      newData.push(item);
    }

    dispatch(
      countriesActions.loadCountries({
        items: newData,
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

