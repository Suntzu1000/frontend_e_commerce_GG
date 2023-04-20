import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Blog Único"} />
      <BreadCrumb title="Blog Único" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10" >
                  {" "}
                  <HiOutlineArrowLeft className="fs-5" /> Voltar para Blog
                </Link>
                <h3 className="title">Um belo dia blablabla</h3>
                <img
                  src="images/blog-1.png"
                  className="img-fluid w-100 my-4"
                  alt="Blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur cupiditate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
