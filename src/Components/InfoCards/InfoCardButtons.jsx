import React from 'react';
import { 
    InfoCardModalBio, 
    InfoCardModalAddress, 
    InfoCardModalEducation,
    InfoCardModalInsurance
} from '../index';

const InfoCardButtons = props => {
    return (
            <div className='infoCardContentBtnContainer'>
                <InfoCardModalBio props={props} />
                <InfoCardModalAddress props={props} />
                <InfoCardModalEducation props={props} />
                <InfoCardModalInsurance props={props} />
            </div>
        )
}

export default InfoCardButtons;