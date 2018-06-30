import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { styles } from './SearchComponent.styles';
import { fetchDoctors, fetchLocation } from '../../actions/actions';

class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSearch(e) {
        e.preventDefault()
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.location.map( practice => {
            return practice.practices.map( x => {
                if (x.visit_address.zip === this.state.search) {
                    this.props.fetchLocation( x.visit_address.lat, x.visit_address.lon)
                }
            })

        })
    }


    render() {
        return (
            <div id='searchBar'>
            <form onSubmit={this.handleSubmit} id='searchBarForm'>
                <input 
                    style={styles.searchBar}
                    onChange={this.handleSearch}
                    placeholder='Zipcode'
                    type='number'></input>
                    <button className='searchBarBtn' style={styles.searchBarBtn}>Enter</button>
            </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        location: state.reducer.provider
    }
}

export default connect( mapStateToProps, { fetchDoctors, fetchLocation } )(SearchComponent);