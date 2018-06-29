import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import { fetchDoctors } from '../../actions/actions';
import { InfoCardContent } from '../index';

class InfoCards extends Component {
    componentWillMount() {
        this.props.fetchDoctors()
    }
    

    render() {
        return (
            <Paper>
                <InfoCardContent props={this.props.provider} />
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        provider: state.reducer.provider
    }
}

export default connect(mapStateToProps, { fetchDoctors })(InfoCards);