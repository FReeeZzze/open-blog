import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  inner: {
    display: 'grid',
    gridGap: 10,
    width: '50%',
    alignSelf: 'center',
  },
}));

const PostsContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>{children}</div>
    </div>
  );
};

PostsContainer.propTypes = {
  children: PropTypes.node,
};

export default PostsContainer;
