import React from 'react';
import { Typography } from '@material-ui/core';
import { InfoCardSpecialtyHeader as Header} from '../index';

const InfoCardSpecialty = props => {
    if (props.props.specialties.length > 2) {
        return (
            <div className='infoCardContentSpecialty'>
                <Header />
                <div id='specialtyConditional'>
                    <Typography>
                        {props.props.specialties[0].name}
                    </Typography>
                </div>
            </div>
        )
    } else {
        return (
            <div className='infoCardContentSpecialty'>
                <Header />
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