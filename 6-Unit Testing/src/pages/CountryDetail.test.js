import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';

import countriesSlice from '../store/countries-slice';
import CountryDetail from './CountryDetail';


const store = configureStore({
    reducer: { countries: countriesSlice.reducer },
});

const mockItem = {
    id: 0,
    flag: "https://restcountries.eu/data/afg.svg",
    name: "Afghanistan",
    capital: "Kabul",
    area: 652230,
    population: 27657145,
    topLevelDomains: ".af",
};


describe('Renders correctly', () => {


    test('renders card', async () => {

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <CountryDetail test={mockItem} />
                </Provider>
            </BrowserRouter>
        );
        const data = await screen.queryByTestId('card');
        expect(data).toBeTruthy;
    })

    test('renders form', async () => {

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <CountryDetail test={mockItem} />
                </Provider>
            </BrowserRouter>
        );

        const data = await screen.findByRole('button');
        expect(data).toBeTruthy;
    });

    test('renders button', async () => {

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <CountryDetail test={mockItem} />
                </Provider>
            </BrowserRouter>
        );

        const data = await screen.queryByTestId('button');
        expect(data).toBeTruthy;
    });
});


describe('Form works correctly', () => {

    test('input updates on change', async () => {

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <CountryDetail test={mockItem} />
                </Provider>
            </BrowserRouter>
        );

        const countryInput = await screen.queryByPlaceholderText('Country...');
        fireEvent.change(countryInput, { target: { value: 'test' } })
        expect(countryInput.value).toBe('test');

        const capitalInput = await screen.queryByPlaceholderText('Capital...');
        fireEvent.change(capitalInput, { target: { value: 'test' } })
        expect(capitalInput.value).toBe('test');

        const areaInput = await screen.queryByPlaceholderText('Area...');
        fireEvent.change(areaInput, { target: { value: 1 } })
        expect(areaInput.value).toBe('1');

        const populationInput = await screen.queryByPlaceholderText('Population...');
        fireEvent.change(populationInput, { target: { value: 1 } })
        expect(populationInput.value).toBe('1');

        const tldInput = await screen.queryByPlaceholderText('TLD...');
        fireEvent.change(tldInput, { target: { value: 'test' } })
        expect(tldInput.value).toBe('test');
    });
  
    test('button submit', async () => {

        const { submitHandler } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <CountryDetail test={mockItem} />
                </Provider>
            </BrowserRouter>
        );

        const button = await screen.queryByRole('button')

        await fireEvent.click(button)
        expect(submitHandler).toHaveBeenCalled
    });
});