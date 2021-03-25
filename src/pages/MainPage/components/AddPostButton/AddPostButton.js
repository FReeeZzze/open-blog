import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: 'auto',
  },
}));

const AddPostButton = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Fab
      onClick={onClick}
      color="primary"
      aria-label="add"
      classes={{ root: classes.root }}
    >
      <AddIcon />
    </Fab>
  );
};

AddPostButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddPostButton;
