import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Favoritos"} />
      <BreadCrumb title="Favoritos" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="Fechar"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="Relógio"
                  />
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
                  src="images/cross.svg"
                  alt="Fechar"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="Relógio"
                  />
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
                  src="images/cross.svg"
                  alt="Fechar"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="Relógio"
                  />
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
                  src="images/cross.svg"
                  alt="Fechar"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="Relógio"
                  />
                </div>
                <div className=" px-2 py-3">
                  <h5 className="title">Relógio Inteligente</h5>
                  <h6 className="price">R$ 100,00</h6>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
