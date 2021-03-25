import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { createPost } from 'thunks/postsThunk';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    display: 'grid',
    gridTemplate: 'auto / auto auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiButton-root': {
      margin: theme.spacing(1),
    },
  },
  text: {
    gridColumn: 2,
    gridRow: '1 / 3',
    alignSelf: 'center',
  },
}));

const AddForm = ({ onSend, onClose }) => {
  const [data, setData] = React.useState({
    title: '',
    text: '',
    imageUrl: '',
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSendData = () => {
    dispatch(createPost(data));
  };

  return (
    <div className={classes.root}>
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
      <TextField
        label="Введите текст"
        name="text"
        multiline
        classes={{ root: classes.text }}
        rows={4}
        variant="outlined"
        value={data.text}
        onChange={onChange}
      />
      <Button variant="outlined" onClick={() => onSend(onSendData)}>
        <DoneIcon color="primary" />
      </Button>
      <Button variant="outlined" onClick={onClose}>
        <CloseIcon color="secondary" />
      </Button>
    </div>
  );
};

AddForm.propTypes = {
  onSend: PropTypes.func,
  onClose: PropTypes.func,
};

export default AddForm;
