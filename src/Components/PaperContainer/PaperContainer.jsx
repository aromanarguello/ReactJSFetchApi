import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { InfoCard } from '../index';

class PaperContainer extends Component {
    
    render() {
        console.log('pro',this.props);
        return (
            <Paper id='paperContainer'>
            <InfoCard />
        </Paper>
        )
    }
}


export default PaperContainer;