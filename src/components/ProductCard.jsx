import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWishList } from "../features/products/productsSlice";

const ProductCard = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const addToWishList = (id) => {
    dispatch(addWishList(id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((item, index) => {
        const formattedPrice = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(item.price);
        return (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <div className="relative">
              <button
                className="absolute top-2 right-2 bg-transparent border-0"
                onClick={() => addToWishList(item?._id)}
              >
                <span className="hover:text-red-500 hover:scale-110 transition duration-300 ">
                  ❤️
                </span>
              </button>
              <Link
                to={`/product/${item?._id}`}
                className="border-0 bg-transparent"
              >
                <img
                  src={item?.images[0]?.url}
                  alt="Product"
                  className="w-100 h-auto object-cover rounded-t-lg"
                />
              </Link>
            </div>
            <div className="p-4">
              <h6 className="text-gray-600 text-sm mb-2">{item?.brand}</h6>
              <h5 className="text-lg font-semibold mb-2">{item?.title}</h5>
              <ReactStars
                count={5}
                value={item?.totalrating}
                size={24}
                edit={false}
                activeColor={`#ffd700`}
              />
              <p className="text-xl font-semibold text-green-500">
                {formattedPrice}
              </p>
            </div>
            <div className="flex justify-between p-4 border-t border-gray-200">
              <button className="border-0 bg-transparent">
                <span className="text-gray-500">🔄</span>
              </button>
              <Link
                to={`/product/${item?._id}`}
                className="border-0 bg-transparent"
              >
                <span className="text-gray-500">👁️</span>
              </Link>
              <button className="border-0 bg-transparent">
                <span className="text-gray-500">🛒</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
