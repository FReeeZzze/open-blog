import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import { updatePostById } from 'thunks/postsThunk';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'grid',
    gap: 10,
    padding: 10,
  },
  content: {
    display: 'grid',
    gap: 10,
  },
  actions: {
    display: 'flex',
    gap: 5,
  },
}));

const PostEdit = ({ _id, title, text, imageUrl, onEdit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    _id,
    title,
    text,
    imageUrl,
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const updateData = () => {
    dispatch(updatePostById(data));
    onEdit();
  };

  return (
    <Card className={classes.root}>
      <TextField
        name="title"
        label="Заголовок"
        variant="outlined"
        value={data.title}
        onChange={onChange}
      />
      <TextField
        label="Ссылка на изображение"
        name="imageUrl"
        variant="outlined"
        value={data.imageUrl}
        onChange={onChange}
      />
      <CardContent className={classes.content}>
        <TextField
          label="Введите текст"
          name="text"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={data.text}
          onChange={onChange}
        />
        <div className={classes.actions}>
          <Button
            endIcon={<CheckCircleOutlineIcon />}
            variant="outlined"
            onClick={updateData}
          >
            Обновить
          </Button>
          <Button endIcon={<CancelIcon />} variant="outlined" onClick={onEdit}>
            Отменить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

PostEdit.propTypes = {
  _id: PropTypes.any,
  title: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  onEdit: PropTypes.func,
};

export default PostEdit;
