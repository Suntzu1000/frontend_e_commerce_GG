import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrump";

const SingleProduct = () => {
  return (
    <>
      <Meta title={"Nome de Produto"} />
      <BreadCrumb title="Nome de Produto" />
      <div className="main-product-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
