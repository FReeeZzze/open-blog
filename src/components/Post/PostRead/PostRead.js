import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { delPostById } from 'thunks/postsThunk';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

const PostRead = ({
  _id,
  title,
  text,
  imageUrl,
  createdAt,
  updatedAt,
  onEdit,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const buttonRef = React.useRef();

  const handleClick = () => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(delPostById(_id));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton
            ref={buttonRef}
            aria-label="settings"
            aria-controls={anchorEl ? `settings - ${_id}` : 'undefined'}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={createdAt}
      />
      <Menu
        id={`settings - ${_id}`}
        anchorEl={() => buttonRef.current}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onEdit}>Редактировать</MenuItem>
        <MenuItem onClick={onDelete}>Удалить</MenuItem>
      </Menu>
      {imageUrl && (
        <CardMedia className={classes.media} image={imageUrl} title={title} />
      )}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {updatedAt !== createdAt && `Обновлен ${updatedAt}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

PostRead.propTypes = {
  _id: PropTypes.any,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  onEdit: PropTypes.func,
};

export default PostRead;
