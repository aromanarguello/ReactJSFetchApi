import React from 'react';
import { Typography } from '@material-ui/core';
const InfoCardSpecialty = props => {
    if (props.props.specialties.length > 3) {
        return (
            <Typography className='infoCardContentSpecialty'>
                <div>
                    <li>{props.props.specialties[0].name}</li>
                    <li>{props.props.specialties[1].name}</li>
                    <li>{props.props.specialties[2].name}</li>
                </div>
            </Typography>
        )
    } else {
        return (
            <Typography className='infoCardContentSpecialty'>
                <b>
                    Specialty:
                </b>
            <br />
                {props.props.specialties.map(specialty => (
                    <li>{specialty.name}</li>
                ))}
            </Typography>
        );
    }
};

export default InfoCardSpecialty;