import React from 'react';
import { styles } from './InfoCard.styles';

const InfoCardImage = props => {
    return (
        <img
            className='infoCardContentImage'
            src={props.props.profile.image_url}
            style={styles.imageStyles} />
    );
};

export default InfoCardImage;