import React from 'react';

const SearchForm = props => {
    return (
        <form onSubmit={props.submit} id='searchBarForm'>
            <input
                style={props.styles.searchBar}
                onChange={props.search}
                placeholder={props.prop}
                type='text'
                maxLength={props.maxLength}></input>
            <button
                className='searchBarBtn' 
                style={props.styles.searchBarBtn}
                onClick={props.click}>
                Enter
            </button>
        </form>
    );
};

export default SearchForm;