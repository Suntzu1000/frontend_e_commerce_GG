import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="Produtos" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" className="img-fluid" alt="Produtos" />
          <img src="images/watch-1.avif" className="img-fluid" alt="Produtos" />
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
  );
};

export default ProductCard;
