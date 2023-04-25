import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import Container from "../components/Container";
import cross from "../images/cross.svg";
import watch from "../images/watch.jpg";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Favoritos"} />
      <BreadCrumb title="Favoritos" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="Fechar"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img src={watch} className="img-fluid w-100" alt="Relógio" />
              </div>
              <div className=" px-2 py-3">
                <h5 className="title">Relógio Inteligente</h5>
                <h6 className="price">R$ 100,00</h6>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="Fechar"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img src={watch} className="img-fluid w-100" alt="Relógio" />
              </div>
              <div className=" px-2 py-3">
                <h5 className="title">Relógio Inteligente</h5>
                <h6 className="price">R$ 100,00</h6>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="Fechar"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img src={watch} className="img-fluid w-100" alt="Relógio" />
              </div>
              <div className=" px-2 py-3">
                <h5 className="title">Relógio Inteligente</h5>
                <h6 className="price">R$ 100,00</h6>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="Fechar"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img src={watch} className="img-fluid w-100" alt="Relógio" />
              </div>
              <div className=" px-2 py-3">
                <h5 className="title">Relógio Inteligente</h5>
                <h6 className="price">R$ 100,00</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
