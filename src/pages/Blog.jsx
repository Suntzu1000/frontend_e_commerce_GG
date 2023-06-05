import React, { useCallback, useEffect } from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blogs/blogSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state?.blog?.blog);

  const getAllBlogs = useCallback(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);
  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrumb title="Blog " />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            {" "}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Encontrar por Categoria</h3>
              <div>
                <ul className="ps-0">
                  <li>Relógio</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row ">
              {blogState?.map((item, index) => {
                return (
                  <div className="col-6 mb-3 " key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0].url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
