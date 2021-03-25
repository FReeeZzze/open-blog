import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

const Posts = {
  findAll: () => {
    return instance
      .get('/posts')
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.message));
  },
  findById: (id) => {
    return instance
      .get(`/posts/${id}`)
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.message));
  },
  create: (title, text, imageUrl) => {
    return instance
      .post(
        '/posts',
        JSON.stringify({
          title: title,
          text: text,
          imageUrl: imageUrl,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.message));
  },
  updateById: (_id, title, text, imageUrl) => {
    return instance
      .patch(
        `/posts/${_id}`,
        JSON.stringify({
          title: title,
          text: text,
          imageUrl: imageUrl,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.message));
  },
  deleteById: (id) => {
    return instance
      .delete(`/posts/${id}`)
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.message));
  },
};

export default Posts;
