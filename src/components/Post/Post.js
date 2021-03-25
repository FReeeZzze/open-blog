import React from 'react';
import PostRead from './PostRead';
import PostEdit from './PostEdit';

const Post = (props) => {
  const [isEdit, setEdit] = React.useState(false);
  return (
    <>
      {isEdit && <PostEdit {...props} onEdit={() => setEdit(false)} />}
      {!isEdit && <PostRead {...props} onEdit={() => setEdit(true)} />}
    </>
  );
};

export default Post;
