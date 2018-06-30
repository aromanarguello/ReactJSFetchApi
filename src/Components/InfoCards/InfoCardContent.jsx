import React from 'react';
import { styles } from './InfoCard.styles';
import { Typography, Paper } from '@material-ui/core';


const InfoCardContent = (props) => {
    const renderInfo = () => {
        if(!props.props) {
            return (
                <div>loading...</div>
            )
        } else {
            { console.log(props.props) }
            return (
                props.props.map((x, i) => (
                    <Paper key={i} className='infoCardContentContainer'>
                            <li 
                                style={styles.listContentStyles} 
                                id='infoCardContent' 
                                className='infoCardContentListItem'>
                            <img
                                className='infoCardContentImage' 
                                src={x.profile.image_url} 
                                style={styles.imageStyles}/>
                                <div className='infoCardContentName'>
                                    <Typography>
                                        {x.profile.first_name + ' ' + x.profile.last_name}, {x.profile.title}
                                    </Typography>
                                </div>
                                <Typography className='infoCardContentSpecialty'>
                                    Specialty:
                                    <br/>
                                        {x.specialties.map(specialty => (
                                            specialty.name
                                        ))}
                                </Typography>
                                <div className='infoCardContentBtnContainer'>
                                    <button 
                                        className='infoCardContentBioBtn'
                                        style={styles.btnStyles}>
                                            Bio
                                    </button>
                                    <button 
                                        className='infoCardContentBioBtn'
                                        style={styles.btnStyles}>
                                            Address
                                    </button>
                                    <button 
                                        className='infoCardContentBioBtn'
                                        style={styles.btnStyles}>
                                            Education
                                    </button>
                                    <button 
                                        className='infoCardContentBioBtn'
                                        style={styles.btnStyles}>
                                            Insurance
                                    </button>
                                </div>
                            </li>
                    </Paper>
                ))
            )
        }
    }  
    return (
        <div className='infoCards' >{renderInfo()}</div>
    );
};

export default InfoCardContent;