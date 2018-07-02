import React from 'react';
import { Typography } from '@material-ui/core';
const InfoCardSpecialty = props => {
    if (props.props.specialties.length > 3) {
        return (
            <Typography className='infoCardContentSpecialty'>
            <div style={props.styles}>
                    {props.props.specialties[0].name}
                    <br/>
                    {props.props.specialties[1].name}
                    <br/>
            </div>
                </Typography>
        )
    } else {
        return (
            <div className='infoCardContentSpecialty'>
                <Typography >
                    <b>
                        Specialty:
                    </b>
                    <br />
                </Typography>
                    {props.props.specialties.map((specialty, i) => (
                    <ul style={props.styles} key={i}>
                        <Typography>
                            <li
                                className='infoCardContentListSpecialty'>{specialty.name}
                            </li>
                                <br/>
                        </Typography>
                    </ul>
                    ))}
            </div>
        );
    }
};

export default InfoCardSpecialty;