import React from "react";
import { Link } from "react-router-dom";
import blog from "../images/blog-1.png"

const BlogCard = (props) => {
    const {id, title, description, date, image } = props
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src={image ? image : blog} className="img-fluid" alt="Blog" />
        </div>
        <div className="blog-content">
          <p className="date">{date}</p>
          <h5 className="title">{title}</h5>
          <p className="des" dangerouslySetInnerHTML={{ __html: description?.substr(0, 70) + "...", }}>
          </p>
          <Link to={"/blogs/" + id} className="button">
            Mais...
          </Link>
        </div>
      </div>
  );
};

export default BlogCard;
