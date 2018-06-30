import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDoctors } from '../../actions/actions';
import { InfoCardContent } from '../index';
import { styles } from './InfoCard.styles';

class InfoCards extends Component {
    componentWillMount() {
        this.props.fetchDoctors()
    }
    

    render() {
        return (
            <div id='infoCardContainer' >
                <InfoCardContent 
                    style={styles.listContentStyles}
                    props={this.props.provider}
                 />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        provider: state.reducer.provider
    }
}

export default connect(mapStateToProps, { fetchDoctors })(InfoCards);