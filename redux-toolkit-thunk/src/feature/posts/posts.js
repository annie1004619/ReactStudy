import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./postsSlice";

const Posts = () => {
  const postObject = useSelector((state) => state.posts.list);
  const status = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({ limit: 5 }));
  }, [dispatch]);

  useEffect(() => {
    console.log(status);
  }, [status]);
  return (
    <div>
      <h1>POSTS</h1>
      {status.isLoading && <div>Loading...</div>}
      {postObject &&
        postObject.map(({ id, title }) => (
          <div key={id}>
            {id} {title}
          </div>
        ))}
    </div>
  );
};

export default Posts;
