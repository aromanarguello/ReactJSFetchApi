import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styles } from './SearchComponent.styles';
import { fetchDoctors } from '../../actions/actions';
import { SearchForm } from '../index';

class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            searchSpecialty: '',
            submitted: false
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmitSpecialty = this.handleSubmitSpecialty.bind(this)
    }

    handleSearch(e) {
        e.preventDefault()
        this.setState({
            search: e.target.value,
        })
    }

    handleSearchSpecialty(e) {
        e.preventDefault()
        // this.setState({
        //     search: this.state.search,
        //     searchSpecialty: e.target.value,
        //     submitted: true
        // })
        console.log('x',this.state.searchSpecialty)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.fetchDoctors(this.state.search)
        this.setState({
            search: '',
            submitted: true
        })
        console.log(this.state.submitted)
    }

    handleSubmitSpecialty(e) {
        e.preventDefault()
        console.log('e', e.target.value)
        this.props.fetchDoctors(this.state.search, this.handleSearchSpecialty)
    }

    renderSpecialty() {
        if(this.state.submitted) {
            return (    
                <SearchForm 
                styles={styles} 
                prop='specialty...'
                search={this.handleSearchSpecialty}
                submit={this.handleSubmitSpecialty} />
            )
        }
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
                    {this.renderSpecialty()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('mapState:', state)
    return {
        location: state.reducer.provider,
    }
}

export default connect( mapStateToProps, { fetchDoctors } )(SearchComponent);