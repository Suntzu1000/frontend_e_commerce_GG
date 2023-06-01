import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import watch2 from "../images/watch-1.avif";
import wish from "../images/wish.svg";
import compare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import cart from "../images/add-cart.svg";

const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            }`}
          >
            <Link
              to={`${
                location.pathname === "/"
                  ? "/product/:id"
                  : location.pathname === "/product/:id"
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
                <img
                  src={watch2}
                  className="img-fluid d-block mx-auto"
                  alt="Produtos"
                  width={160}
                />
                <img
                  src={watch2}
                  className="img-fluid d-block mx-auto"
                  alt="Produtos"
                  width={160}
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-card">{item?.title}</h5>
                <ReactStars
                  count={5}
                  value={item?.totalrating}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">R${item?.price}</p>
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
        );
      })}
    </>
  );
};

export default ProductCard;
