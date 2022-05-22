import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsList } from "../Features/Posts/Posts.slice";
const Posts = () => {
  const dispatch = useDispatch();

  const postsState = useSelector((state) => state.postsState);

  const { entities, status, reason } = postsState;

  useEffect(() => {
    dispatch(fetchPostsList());
  }, []);

  console.log(postsState);

  function _renderLoading() {
    return <h2>Olib kelyapmiz..., Sabr qiling..🥱</h2>;
  }

  function _renderError() {
    return <h2>O'xshamadida endi '🙄</h2>;
  }

  function _renderSuccess() {
    return entities.map((post, i) => (
      <div className="post box">
        <p>
          <span>{i + 1}.</span>
          <span>{post.title}</span>
        </p>
        <p>{post.body}</p>
      </div>
    ));
  }

  return (
    <div className="container flex-align-center">
      {status === "error"
        ? _renderError()
        : status === "pending"
        ? _renderLoading()
        : _renderSuccess()}
    </div>
  );
};

export default Posts;
