import React from 'react';
import { Typography } from '@material-ui/core';

const InfoCardName = props => {
    return (
        <div className='infoCardContentName'>
            <Typography>
                {props.props.profile.first_name + ' ' + props.props.profile.last_name}, {props.props.profile.title}
            </Typography>
        </div>
    );
};

export default InfoCardName;