import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";
import cross from "../images/cross.svg";
import watch from "../images/watch.jpg";

const CompareProd = () => {
  return (
    <>
      <Meta title={"Comparar"} />
      <BreadCrumb title="Comparar" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="Fechar"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image ">
                <img src={watch} alt="Relógio" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Super Relógio Inteligente</h5>
                <h6 className="price mb-3 mt-13">R$ 100,00</h6>
                <div>
                  <div className="product-detail ">
                    <h5>Marca:</h5>
                    <p>Apple</p>
                  </div>

                  <div className="product-detail ">
                    <h5>Tipo:</h5>
                    <p>Relógio</p>
                  </div>

                  <div className="product-detail ">
                    <h5>Disponibilidade:</h5>
                    <p>Em estoque</p>
                  </div>

                  <div className="product-detail ">
                    <h5>Cor:</h5>
                    <Color />
                  </div>

                  <div className="product-detail">
                    <h5>Tamanho:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="Fechar"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image ">
                <img src={watch} alt="Relógio" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Super Relógio Inteligente</h5>
                <h6 className="price mb-3 mt-13">R$ 100,00</h6>
                <div>
                  <div className="product-detail ">
                    <h5>Marca:</h5>
                    <p>Apple</p>
                  </div>

                  <div className="product-detail ">
                    <h5>Tipo:</h5>
                    <p>Relógio</p>
                  </div>

                  <div className="product-detail ">
                    <h5>Disponibilidade:</h5>
                    <p>Em estoque</p>
                  </div>

                  <div className="product-detail ">
                    <h5>Cor:</h5>
                    <Color />
                  </div>

                  <div className="product-detail">
                    <h5>Tamanho:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProd;
