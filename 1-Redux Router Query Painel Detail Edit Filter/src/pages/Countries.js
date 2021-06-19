import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Countries.module.css';

const Countries = (props) => {

    const [enteredSearch, setEnteredSearch] = useState('');

    const searchChangeHandler = (event) => {
        setEnteredSearch(event.target.value);
    };

    console.log(enteredSearch);

    const countries = useSelector((state) => state.countries.items);

    const filteredItems = countries.filter(item => (
        item.name.toLowerCase().includes(enteredSearch.toLowerCase())
    ));

    return (
        <div className={classes.card}>
            <div className={classes.header}>Countries Painel</div>

            <div className={classes.search}>
                <label htmlFor={'search'}>Search</label>
                <input
                    id='search'
                    type='search'
                    placeholder={'Enter country name...'}
                    value={enteredSearch}
                    onChange={searchChangeHandler}
                />
            </div>
            <div className={classes.grid}>
                {filteredItems.map((item, index) => {
                    return (
                        <div key={index} className={classes.country}>
                            <Link  to={`/countries/${index}`}>
                                <img alt={item.name} src={item.flag.svgFile} />
                                <p>{item.name}</p>
                                <p>{item.capital}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Countries;