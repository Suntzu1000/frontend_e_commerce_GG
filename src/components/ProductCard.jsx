import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="Produtos" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="Produtos" />
            <img
              src="images/watch-1.avif"
              className="img-fluid"
              alt="Produtos"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Produtos</h6>
            <h5 className="product-card">
              Fone de Ouvido Infantil multi colorido para crianças!
            </h5>
            <ReactStars
              count={5}
              value="3"
              size={24}
              edit="false"
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Você ama música, mas odeia o barulho do mundo? Você quer se sentir
              imerso em suas canções favoritas, sem distrações ou
              interferências? Então você precisa conhecer os novos fones de
              ouvido da Apple.
            </p>
            <p className="price">R$1.000,00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="Adicionar em Carrinho" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="Visualizar" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="Adicionar em Carrinho" />
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="Produtos" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="Produtos" />
            <img
              src="images/watch-1.avif"
              className="img-fluid"
              alt="Produtos"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Produtos</h6>
            <h5 className="product-card">Rélógio Inteligente</h5>
            <ReactStars
              count={5}
              value="3"
              size={24}
              edit="false"
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Você quer ter mais controle sobre sua saúde, seu tempo e sua vida?
              Você quer estar sempre conectado com as pessoas e as informações
              que você precisa? Então você precisa conhecer os novos relógios
              inteligentes da Apple.
            </p>
            <p className="price">R$1.000,00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="Adicionar em Carrinho" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="Visualizar" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="Adicionar em Carrinho" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
