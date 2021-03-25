const types = {
  SET_POSTS: 'posts/SET_POSTS',
  SET_POST: 'posts/SET_POST',
  DEL_POST: 'posts/DEL_POST',
  CLEAR_POSTS: 'posts/CLEAR_POSTS',
  UPDATE_POST: 'posts/UPDATE_POST',
};

const init = [];

export default function postsReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_POSTS:
      return payload;
    case types.SET_POST:
      return [...state, payload];
    case types.DEL_POST:
      return state.filter((post) => !post._id.includes(payload));
    case types.UPDATE_POST:
      return state.map((post) => {
        if (post._id === payload._id) {
          return {
            ...post,
            ...payload,
          };
        }
        return post;
      });
    case types.CLEAR_POSTS:
      return [];
    default:
      return state;
  }
}

export const actions = {
  setPost: (post) => ({
    type: types.SET_POST,
    payload: post,
  }),
  setPosts: (posts) => ({
    type: types.SET_POSTS,
    payload: posts,
  }),
  delPost: (id) => ({
    type: types.DEL_POST,
    payload: id,
  }),
  clearPosts: () => ({
    type: types.CLEAR_POSTS,
  }),
  updatePost: (data) => ({
    type: types.UPDATE_POST,
    payload: data,
  }),
};
