import React from 'react';
import { Typography } from '@material-ui/core';
const InfoCardSpecialty = props => {
    return (
        <Typography className='infoCardContentSpecialty'>
            Specialty:
            <br />
            {props.props.specialties.map(specialty => (
                <li>{specialty.name}</li>
            ))}
        </Typography>
    );
};

export default InfoCardSpecialty;