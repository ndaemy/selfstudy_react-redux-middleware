import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = () => {
  const { post, users, loadingPost, loadingUsers } = useSelector(
    ({ sample }) => ({
      post: sample.post,
      users: sample.users,
      loadingPost: sample.loading.GET_POST,
      loadingUsers: sample.loading.GET_USERS,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers(1));
  }, [dispatch]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default SampleContainer;
