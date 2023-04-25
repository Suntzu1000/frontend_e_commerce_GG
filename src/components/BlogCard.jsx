import React from "react";
import { Link } from "react-router-dom";
import blog from "../images/blog-1.png"

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src={blog} className="img-fluid" alt="Blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 fev 2023</p>
          <h5 className="title">Um belo dia...</h5>
          <p className="des">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            illo repellat facilis animi
          </p>
          <Link to="/blogs/:id" className="button">
            Mais...
          </Link>
        </div>
      </div>
  );
};

export default BlogCard;
