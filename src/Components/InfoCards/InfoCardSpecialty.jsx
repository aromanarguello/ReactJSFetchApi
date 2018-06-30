import React from 'react';
import { Typography } from '@material-ui/core';
const InfoCardSpecialty = props => {
    return (
        <Typography className='infoCardContentSpecialty'>
            Specialty:
            <br />
            {props.props.specialties.map(specialty => (
                specialty.name
            ))}
        </Typography>
    );
};

export default InfoCardSpecialty;