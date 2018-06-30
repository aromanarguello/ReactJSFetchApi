import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styles } from './SearchComponent.styles';
import { fetchDoctors, fetchLocation } from '../../actions/actions';
import { SearchForm } from '../index';

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
        console.log(this.state)
        e.preventDefault()
        this.props.fetchDoctors(this.state.search)
    }

    render() {
        return (
            <div id='searchBar'>
                <SearchForm 
                    submit={this.handleSubmit} 
                    search={this.handleSearch} />
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