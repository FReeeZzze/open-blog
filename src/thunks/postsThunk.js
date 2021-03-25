import Posts from 'api/posts';
import { actions } from '../postsReducer';

export const fetchPosts = () => (dispatch) => {
  Posts.findAll().then((posts) => {
    dispatch(actions.setPosts(posts));
  });
};

export const findPostById = (id) => (dispatch) => {
  Posts.findById(id).then((post) => {
    dispatch(actions.setPost(post));
  });
};

export const createPost = ({ title, text, imageUrl }) => (dispatch) => {
  Posts.create(title, text, imageUrl).then((post) => {
    dispatch(actions.setPost(post));
  });
};

export const delPostById = (id) => (dispatch) => {
  Posts.deleteById(id).then((status) => {
    console.log('del status: ', status);
    dispatch(actions.delPost(id));
  });
};

export const updatePostById = (post) => (dispatch) => {
  const { _id, title, text, imageUrl } = post;
  Posts.updateById(_id, title, text, imageUrl).then((post) => {
    dispatch(actions.updatePost(post));
  });
};

export const clearPosts = () => (dispatch) => dispatch(actions.clearPosts());
