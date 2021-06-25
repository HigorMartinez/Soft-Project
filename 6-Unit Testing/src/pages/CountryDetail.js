import React, { useRef } from 'react';
import classes from './CountryDetail.module.css';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { replaceData } from '../store/countries-actions';
import Header from '../components/Header';


const CountryDetail = (props) => {

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

        if (!props.test) {
            const newItem = {
                id: item.id,
                flag: {
                    svgFile: item.flag.svgFile,
                },
                name: nameInputRef.current.value || item.name,
                capital: capitalInputRef.current.value || item.capital,
                area: areaInputRef.current.value || item.area,
                population: populationInputRef.current.value || item.population,
                topLevelDomains: [
                    {
                        name: ltdInputRef.current.value || item.topLevelDomains[0].name,
                    }
                ],
            };
            dispatch(replaceData(newItem));
        } else {
            const newItem = {
                id: props.test.id,
                flag: {
                    svgFile: props.test.flag,
                },
                name: nameInputRef.current.value || props.test.name,
                capital: capitalInputRef.current.value || props.test.capital,
                area: areaInputRef.current.value || props.test.area,
                population: populationInputRef.current.value || props.test.population,
                topLevelDomains: [
                    {
                        name: ltdInputRef.current.value || props.test.topLevelDomains,
                    }
                ],
            };
            dispatch(replaceData(newItem));
        }
    };

    return (
        <div className={classes.countrypanel}>
            <Header notShow={true} />
            <div testid='card' className={classes.countrydetail}>
                <h1>{props.test.name || item.name}</h1>
                <div className={classes.card}>
                    <img alt={props.test.name || item.name} src={props.test.flag || item.flag.svgFile} />
                    <p>Capital: {props.test.capital || item.capital}</p>
                    <p maxLength="5" >Area: {props.test.area || item.area} km²</p>
                    <p>Population: {props.test.population || item.population}</p>
                    <p>TLD: {props.test.topLevelDomains || item.topLevelDomains[0].name}</p>
                </div>
                <form className={classes.form} onSubmit={submitHandler}>
                    <h2>Edit Info</h2>
                    <input
                        id='name'
                        type='text'
                        ref={nameInputRef}
                        placeholder={'Country...'}
                        maxLength={30}
                    />
                    <input
                        id='capital'
                        type='text'
                        ref={capitalInputRef}
                        placeholder={'Capital...'}
                        maxLength={17}
                    />
                    <input
                        id='area'
                        type='number'
                        ref={areaInputRef}
                        placeholder={'Area...'}
                        max="99999999"
                    />
                    <input
                        id='population'
                        type='number'
                        ref={populationInputRef}
                        placeholder={'Population...'}
                        max="999999999999999"
                    />
                    <input
                        id='tld'
                        type='text'
                        ref={ltdInputRef}
                        placeholder={'TLD...'}
                        maxLength={3}
                    />
                    <div testid="button" className={classes.actions}>
                        <button id="button" className='btn' type={'submit'}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CountryDetail;