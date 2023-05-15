import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoadingPost,
  setErrorPost,
  setPost,
} from "../../store/reducers/postDetSlice";

const PostsDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const { loading, post, error } = useSelector((state) => state.postReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingPost(true));
    fetch(`http://localhost:4000/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPost(data));
      })
      .catch((err) => dispatch(setErrorPost(err)))
      .finally(() => {
        dispatch(setLoadingPost(false));
        console.log(loading);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {loading || !post ? (
        "loading..."
      ) : (
        <div>
          <button onClick={() => navigate("/")}>Back</button>
          <h1>
            {" "}
            {post.id} <br /> {post.title} <br />
          </h1>
          <div> {post.body}</div>
        </div>
      )}
    </div>
  );
};

export default PostsDetails;
