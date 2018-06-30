import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    Typography, 
    withStyles, 
    Modal,
    Button
 } from '@material-ui/core';
import { styles } from '../InfoCard.styles'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const modalStyles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class InfoCardModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    {console.log(this.props)}
    return (
      <div>
        <button
          onClick={this.handleOpen}
          className='infoCardContentBioBtn'
          style={styles.btnStyles}>
          Bio
        </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Biography:
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              {this.props.props.props.profile.bio}
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

InfoCardModal.propTypes = {
  classes: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired
};

const SimpleModalWrapped = withStyles(modalStyles)(InfoCardModal);

export default SimpleModalWrapped;