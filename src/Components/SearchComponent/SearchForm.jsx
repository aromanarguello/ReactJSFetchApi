import React from 'react';
import { styles } from './SearchComponent.styles';

const SearchForm = props => {
    return (
        <form onSubmit={props.submit} id='searchBarForm'>
            <input
                style={styles.searchBar}
                onChange={props.search}
                placeholder='State Abbr.'
                type='text'
                maxLength='2'></input>
            <button className='searchBarBtn' style={styles.searchBarBtn}>Enter</button>
        </form>
    );
};

export default SearchForm;