import React, { useRef } from 'react';
import classes from './CountryDetail.module.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { replaceData } from '../store/countries-actions';

function CountryDetail() {

    const dispatch = useDispatch();

    const nameInputRef = useRef();
    const capitalInputRef = useRef();
    const areaInputRef = useRef();
    const populationInputRef = useRef();
    const ltdInputRef = useRef();

    const params = useParams();

    const { countryId } = params;

    const item = useSelector((state) => state.countries.items[countryId]);

    const submitHandler = (event) => {
        event.preventDefault();
        const newItem = {
            id: countryId,
            flag: {
                svgFile: item.flag.File,
            },
            name: nameInputRef.current.value,
            capital: capitalInputRef.current.value,
            area: areaInputRef.current.value,
            population: populationInputRef.current.value,
            topLevelDomains: [
                {
                    name: ltdInputRef.current.value,
                }
            ],
        };
        dispatch(replaceData(newItem));
    };

    return (
        <div className={classes.card}>
            <h1>{item.name}</h1>
            <div className={classes.country}>
                <img alt={item.name} src={item.flag.svgFile} />
                <p>Capital: {item.capital}</p>
                <p>Area: {item.area} km²</p>
                <p>Population: {item.population}</p>
                <p>TLD: {item.topLevelDomains[0].name}</p>
            </div>
            <div className={classes.form}>
                <form onSubmit={submitHandler}>
                    <p>Edit Data</p>
                    <label htmlFor={'name'}>Name</label>
                    <input
                        id='name'
                        type='text'
                        ref={nameInputRef}
                    />
                    <label htmlFor={'capital'}>Capital</label>
                    <input
                        id='capital'
                        type='text'
                        ref={capitalInputRef}
                    />
                    <label htmlFor={'area'}>Area</label>
                    <input
                        id='area'
                        type='number'
                        ref={areaInputRef}
                    />
                    <label htmlFor={'population'}>Population</label>
                    <input
                        id='population'
                        type='number'
                        ref={populationInputRef}
                    />
                    <label htmlFor={'tld'}>TLD</label>
                    <input
                        id='tld'
                        type='text'
                        ref={ltdInputRef}
                    />
                    <button type={'submit'}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CountryDetail;