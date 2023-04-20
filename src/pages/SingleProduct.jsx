import BreadCrumb from "../components/BreadCrump";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";



const SingleProduct = () => {
  const props = {width: 400, height: 250, zoomWidth: 500, img: "https://brmotorolanew.vtexassets.com/arquivos/ids/162264-800-auto?v=637963526595000000&width=800&height=auto&aspect=true"};
  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title={"Nome de Produto"} />
      <BreadCrumb title="Nome de Produto" />
      <div className="main-product-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl p-3 bg-white ">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div><ReactImageZoom {...props} /></div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Avaliações</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Avaliações do cliente</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value="3"
                        size={24}
                        edit="false"
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Baseado em 2 comentários</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline "
                        href="#"
                      >
                        Escrever comentário
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4 className="mb-2">Escreva sua Avaliação</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <ReactStars
                      count={5}
                      value="3"
                      size={24}
                      edit={true}
                      activeColor="#ffd700"
                    />
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comentários"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">
                        Enviar Avaliação
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="d-flex gap-10 align-items-center ">
                    <h6 className="mb-0">GG</h6>

                    <div className="review d-flex ">
                      <ReactStars
                        count={5}
                        value="3"
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />{" "}
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 homer-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Produtos Populares</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
