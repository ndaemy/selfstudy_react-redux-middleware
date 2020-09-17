import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = () => {
  const { post, users, loadingPost, loadingUsers } = useSelector(
    ({ sample, loading }) => ({
      post: sample.post,
      users: sample.users,
      loadingPost: loading['sample/GET_POST'],
      loadingUsers: loading['sample/GET_USERS'],
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        await dispatch(getPost(1));
        await dispatch(getUsers(1));
      } catch (e) {
        console.log(e);
      }
    };
    fn();
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
