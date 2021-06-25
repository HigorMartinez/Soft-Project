import React from "react";
import { render, screen } from '@testing-library/react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from
} from "@apollo/client";
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';

import countriesSlice from '../store/countries-slice';
import App from '../App';


const store = configureStore({
    reducer: { countries: countriesSlice.reducer },
});

const link = from([
    new HttpLink({ uri: 'http://testefront.dev.softplan.com.br/' })
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
});


describe('Renders correctly', () => {

    test('renders 250 items', async () => {

        render(
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>
            </ApolloProvider>
        );

        const data = await screen.findAllByRole('img');
        expect(data).toHaveLength(250);
    });
});

