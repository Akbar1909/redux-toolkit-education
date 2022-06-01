import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsList } from "../Features/Posts/Posts.middleware";
const Posts = () => {
  const dispatch = useDispatch();
  const [container, setContainer] = useState(null);
  const postsState = useSelector((state) => state.postsState);

  const { entities, status, reason } = postsState;

  useEffect(() => {
    dispatch(fetchPostsList());
  }, []);



 


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


  if(status === 'pending') return _renderLoading()

  return (
    <section style={{display:"flex",}}>
    <div ref={setContainer} className="container flex-align-center">
      {status === "error"
        ? _renderError()
        : status === "pending"
        ? _renderLoading()
        : _renderSuccess()}
    </div>

    <div style={{width:"100px", height:`${container?.clientHeight}px`, background:"red"}}>
 
    </div>

    </section>
  );
};

export default Posts;
