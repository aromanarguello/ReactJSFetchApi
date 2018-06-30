import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { InfoCard, InfoCardContent } from '../index';

class PaperContainer extends Component {
    
    render() {
        console.log('pro',this.props);
        return (
        <Paper id='paperContainer'>
            <Route exact path='/providers' render={ () => <InfoCard />} />
        </Paper>
        )
    }
}


export default PaperContainer;