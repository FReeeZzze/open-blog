import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from 'thunks/postsThunk';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBar from './components/HeaderBar';
import AddPostButton from './components/AddPostButton';
import PostsContainer from './components/PostsContainer';
import AddForm from './components/AddForm';
import Post from 'components/Post';

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridGap: 20,
  },
}));

const MainPage = () => {
  const [isActive, setActive] = React.useState(false);
  const [searchValue, setSearch] = React.useState('');
  const classes = useStyles();
  const posts = useSelector((posts) => posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleClick = () => setActive(true);

  const sendClick = (sendCallBack) => {
    sendCallBack();
    setActive(false);
  };

  const closeClick = () => setActive(false);

  const filteredPosts = React.useMemo(
    () =>
      posts.filter(
        (post) =>
          post.text.includes(searchValue) ||
          post.title.includes(searchValue) ||
          post.createdAt.includes(searchValue) ||
          post.updatedAt.includes(searchValue)
      ),
    [posts, searchValue]
  );

  return (
    <main className={classes.root}>
      <HeaderBar
        onSearch={(e) => setSearch(e.target.value)}
        searchValue={searchValue}
      />
      {isActive && <AddForm onSend={sendClick} onClose={closeClick} />}
      {!isActive && <AddPostButton onClick={handleClick} />}
      <PostsContainer>
        {filteredPosts
          .map((post) => <Post key={`key:${post._id}`} {...post} />)
          .reverse()}
      </PostsContainer>
    </main>
  );
};

export default MainPage;
