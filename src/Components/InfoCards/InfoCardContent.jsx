import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Paper } from '@material-ui/core';
import { fetchDoctors } from '../../actions/actions';
import { styles } from './InfoCard.styles';
import { 
    InfoCardButtons, 
    InfoCardName, 
    InfoCardSpecialty,
    InfoCardImage,
    InfoCardModalBio
} from '../index';


class InfoCardContent extends Component{

    componentWillMount() {
        this.props.fetchDoctors()
    }

    toggleModal(props) {

    }

    render() {
        if(!this.props.provider) {
            return (
                <div>loading...</div>
            )
        } else {
            return (
                <div className='infoCards'>
                    {this.props.provider.map((x, i) => (
                        <Paper 
                            key={i} 
                            className='infoCardContentContainer'
                            elevation={6}>
                            <li
                                style={styles.listContentStyles}
                                id='infoCardContent'
                                className='infoCardContentListItem'>
                                <InfoCardImage props={x} />
                                <InfoCardName props={x} />
                                <InfoCardSpecialty props={x} />
                                <InfoCardButtons props={x} />
                            </li>
                        </Paper>
                    ))}
                </div>
            )
        }
    }
};

function mapStateToProps(state) {
    return {
        provider: state.reducer.provider
    }
}

export default connect(mapStateToProps, { fetchDoctors })(InfoCardContent);
