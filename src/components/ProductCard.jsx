import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import wish from "../images/wish.svg";
import compare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import cart from "../images/add-cart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent ">
              <img src={wish} alt="Produtos" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="Produtos" />
            <img src={watch2} className="img-fluid" alt="Produtos" />
          </div>
          <div className="product-details">
            <h6 className="brand">Produtos</h6>
            <h5 className="product-card">
              Fone de Ouvido Infantil multi colorido para crianças!
            </h5>
            <ReactStars
              count={5}
              value={3}
              size={24}
              edit={false}
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
              <button className="border-0 bg-transparent ">
                <img src={compare} alt="Adicionar em Carrinho" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src={view} alt="Visualizar" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src={cart} alt="Adicionar em Carrinho" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "product/:id"
              : ":id"
          }`}
          className="product-card position-relative "
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent ">
              <img src={wish} alt="Produtos" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="Produtos" />
            <img src={watch2} className="img-fluid" alt="Produtos" />
          </div>
          <div className="product-details">
            <h6 className="brand">Produtos</h6>
            <h5 className="product-card">Rélógio Inteligente</h5>
            <ReactStars
              count={5}
              value={3}
              size={24}
              edit={false}
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
              <button className="border-0 bg-transparent ">
                <img src={compare} alt="Adicionar em Carrinho" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src={view} alt="Visualizar" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src={cart} alt="Adicionar em Carrinho" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
