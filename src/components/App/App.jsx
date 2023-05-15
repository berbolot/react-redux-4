import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "../Posts/Posts";
import PostsDetails from "../Posts/PostsDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />}/>
        <Route path="/posts/:id" element={<PostsDetails />}/>
      </Routes>
    </Router>
  );
};

export default App;
