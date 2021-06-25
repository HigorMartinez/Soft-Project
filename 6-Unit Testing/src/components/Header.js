import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = (props) => {
  
  return (
    <header testid="header" className={classes.header}>
      <Link to='/countries' >
        <h1>Countries Panel</h1>
      </Link>
      {!props.notShow && <div className={classes.search}>
        <input
          id='search'
          type='search'
          placeholder={'Search country here...'}
          value={props.enteredSearch}
          onChange={props.searchChangeHandler}
        />
      </div>}
    </header>
  );
};

export default Header;