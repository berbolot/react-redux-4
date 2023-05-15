import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostsDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:4000/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
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
          <button onClick={() => navigate( "/")}>Back</button>
       <h1> {post.id} <br />  {post.title} <br /></h1>
       <div> {post.body}</div>
        </div>
      )}
    </div>
  );
};

export default PostsDetails;
