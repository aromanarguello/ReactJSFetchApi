import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styles } from './SearchComponent.styles';
import { fetchDoctors } from '../../actions/actions';
import { SearchForm } from '../index';

class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmitSpecialty = this.handleSubmitSpecialty.bind(this)
    }

    handleSearch(e) {
        e.preventDefault()
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.fetchDoctors(this.state.search)
    }

    handleSubmitSpecialty(e) {
        e.preventDefault()
        this.props.fetchDoctors(this.state.search, e.target.value)
    }

    render() {
        return (
            <div id='searchBar'>
                <SearchForm 
                    styles={styles}
                    submit={this.handleSubmit} 
                    search={this.handleSearch}
                    prop='state...'
                    maxLength='2' />
                <SearchForm 
                    styles={styles} 
                    search={this.handleSearch}
                    prop='specialty...'
                    submit={this.handleSubmitSpecialty} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('mapState:', state)
    return {
        location: state.reducer.provider,
        specialty: state.reducer.provider
    }
}

export default connect( mapStateToProps, { fetchDoctors } )(SearchComponent);