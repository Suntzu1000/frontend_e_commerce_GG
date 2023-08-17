import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = (props) => {
  const { title, brand, totalrating, price, sold, quantity, id, images } = props;
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card bg-white border border-gray-300 rounded shadow-md p-4">
        <div className="flex justify-between">
          <div>
            <img src={images} className="img-fluid" alt="Relógio" />
          </div>
          <div className="special-product-content ml-4">
            <h5 className="brand text-lg font-bold">{brand}</h5>
            <h6 className="title text-base">{title}</h6>
            <ReactStars
              count={5}
              size={24}
              value={totalrating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price text-xl mt-2">
              <span className="text-green-500">{formattedPrice}</span> &nbsp;
            </p>
            <div className="discount-till flex items-center mt-2">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="flex gap-2 items-center">
                <span className="badge rounded-full p-3 bg-danger">1</span>:
                <span className="badge rounded-full p-3 bg-danger">1</span>:
                <span className="badge rounded-full p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Produtos: {quantity}</p>
              <div className="progress h-2 bg-gray-200 rounded">
                <div
                  className="progress-bar bg-indigo-600 rounded"
                  role="progressbar"
                  style={{ width: `${(quantity / (quantity + sold)) * 100}%` }}
                  aria-valuenow={(quantity / (quantity + sold)) * 100}
                  aria-valuemin={quantity}
                  aria-valuemax={sold + quantity}
                ></div>
              </div>
            </div>
            <Link
              className="button inline-block px-4 py-2 bg-indigo-600 text-white rounded mt-2"
              to={`/product/${id}`}
            >
              Carrinho
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
