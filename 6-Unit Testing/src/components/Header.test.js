import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Renders correctly', () => {

    test('renders header', async () => {

        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const data = await screen.queryByTestId('header');
        expect(data).toBeTruthy;
    })
});


describe('Filter input value', () => {

    test('updates on change', async () => {

        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const data = await screen.queryByPlaceholderText('Search country here...');
        fireEvent.change(data, { target: { value: 'test' } })
        expect(data.value).toBe('test');
    });
});