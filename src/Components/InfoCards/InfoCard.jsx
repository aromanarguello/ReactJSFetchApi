import React from 'react';
import { InfoCardContent } from '../index';
import { styles } from './InfoCard.styles';

const InfoCards = () => {
        return (
            <div id='infoCardContainer' >
                <InfoCardContent style={styles.listContentStyles}/>
            </div>
        );
}

export default InfoCards;