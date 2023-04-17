import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.png" className="img-fluid" alt="Blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 fev 2023</p>
          <h5 className="title">Um belo dia...</h5>
          <p className="des">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            illo repellat facilis animi
          </p>
          <Link to="/" className="button">
            Mais...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
