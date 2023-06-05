import React, { useCallback, useEffect } from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import Container from "../components/Container";
import blog from "../images/blog-1.png";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../features/blogs/blogSlice";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const getABlog = useCallback(() => {
    dispatch(getBlog(getBlogId));
  }, [dispatch, getBlogId]);

  useEffect(() => {
    getABlog();
  }, [getABlog]);
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-5" /> Voltar para Blog
              </Link>
              <h3 className="title">{blogState?.title}a</h3>
              <img src={blogState?.image[0].url ? blogState?.image[0].url : blog} className="img-fluid w-100 my-4" alt="Blog" />
              <p
                dangerouslySetInnerHTML={{
                  __html: blogState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
