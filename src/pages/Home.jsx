import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="rol-6">
              <div className="main-banner-content position-relative p-3 ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="Produtos Eletrônicos"
                />
                <div className="main-banner-content position-absolute">
                  <h4>O Melhor valor está aqui!</h4>
                  <h5>IPAD S3</h5>
                  <p>De R$ 999 ou R$41,62/mês</p>
                  <Link className="button" >Comprar</Link>
                </div>
              </div>
            </div>
            <div className="rol-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner-content position-relative p-3 ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="Produtos Eletrônicos"
                />
                <div className="small-banner-content position-absolute">
                  <h4>O Melhor valor está aqui!</h4>
                  <h5>IPAD S3</h5>
                  <p>De R$ 999 ou R$41,62/mês</p>
                  <Link className="button" >Comprar</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
