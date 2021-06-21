import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Countries.module.css';

const Countries = () => {

    const [enteredSearch, setEnteredSearch] = useState('');

    const searchChangeHandler = (event) => {
        setEnteredSearch(event.target.value);
    };

    const countries = useSelector((state) => state.countries.items);

    const filteredItems = countries.filter(item => (
        item.name.toLowerCase().includes(enteredSearch.toLowerCase())
    ));


    return (
        <div className={classes.countriespanel}>
            <div className={classes.header}>Countries Panel</div>

            <div className={classes.search}>
                <label htmlFor={'search'}>Search</label>
                <input
                    id='search'
                    type='search'
                    placeholder={'Search country here...'}
                    value={enteredSearch}
                    onChange={searchChangeHandler}
                />
            </div>
            <div className={classes.grid}>
                {filteredItems.map((item, index) => {
                    return (
                        <Link key={index} to={`/countries/${item.id}`}>
                            <div className={classes.card}>
                                <img alt={item.name} src={item.flag.svgFile} />
                                <h3>{item.name.length < 30 ? item.name : item.name.substring(0, 30) + '...'}</h3>
                                <p>Capital: {item.capital}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div >
    );
}

export default Countries;