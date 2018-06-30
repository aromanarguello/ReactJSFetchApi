import React, { Component } from 'react';
import { styles } from './SearchComponent.styles';
import { Typography } from '@material-ui/core';

export default class SearchComponent extends Component {
    render() {
        return (
            <div id='searchBar'>
                <input 
                    style={styles.searchBar}
                    placeholder='Zipcode'
                    type='number'></input>
                    <button className='searchBarBtn' style={styles.searchBarBtn}>Enter</button>
            </div>
        );
    }
}