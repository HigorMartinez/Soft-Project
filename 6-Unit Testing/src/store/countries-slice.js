import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    items: []
  },
  reducers: {
    loadCountries(state, action) {
      state.items = action.payload.items;
    },
    replaceCountry(state, action) {
      const id = action.payload.item.id;
      state.items[id] = action.payload.item;
    },
  },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice;