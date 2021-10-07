import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  // const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    axios.get("/api/posts").then((res) => {
      console.log(res);
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="list row">
      <div className="col-md-6">
        <h1>posts List</h1>

        <div className="list-group">
          {posts &&
            posts.map((post, index) => (
              <div key={index}>
                <h4>Post</h4>
                <div>
                  <label>
                    <strong>Title:</strong>
                  </label>{" "}
                  {post.title}
                </div>
                <div>
                  <label>
                    <strong>Content:</strong>
                  </label>{" "}
                  {post.content}
                </div>
                <div>
                  <label>
                    <strong>Status:</strong>
                  </label>{" "}
                  {/* {currentPost.published ? "Published" : "Pending"} */}
                </div>

                {/* <Link
                to={"/posts/" + currentPost.id}
                className="badge badge-warning"
              >
                Edit
              </Link> */}
              </div>
            ))}
        </div>

        <button className="m-3 btn btn-sm btn-danger">Remove All</button>
      </div>
      <div className="col-md-6"></div>
    </div>
  );
}
