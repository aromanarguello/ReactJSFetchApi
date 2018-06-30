import React from 'react';
import { Typography } from '@material-ui/core';

const InfoCardName = props => {
    return (
        <div className='infoCardContentName'>
            <Typography>
                <b>{props.props.profile.first_name + ' ' + props.props.profile.last_name}, {props.props.profile.title}</b>
            </Typography>
        </div>
    );
};

export default InfoCardName;