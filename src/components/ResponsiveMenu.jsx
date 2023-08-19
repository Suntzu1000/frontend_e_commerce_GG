import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import user from "../images/user.svg";
import logo from "../images/Logo.png";
import cart from "../images/cart.svg";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import { Typeahead } from "react-bootstrap-typeahead";
import { getProduct } from "../features/products/productsSlice";
import { BsSearch } from "react-icons/bs";



const ResponsiveMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const [paginate, setPaginate] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(null);
  const [productOpt, setProductOpt] = useState([]);


  return (
    <div className="relative inline-block text-left lg:hidden">
      <div className="flex" >
        <Link to="/" className="text-white">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
        <div className="flex-1 mx-5">
                  <div className="relative">
                    <Typeahead
                      id="pagination-example"
                      onPaginate={() => console.log("Results paginated")}
                      onChange={(selected) => {
                        navigate(`/product/${selected[0]?.prod}`);
                        dispatch(getProduct(selected[0]?.prod));
                      }}
                      minLength={2}
                      options={productOpt}
                      paginate={paginate}
                      labelKey={"name"}
                      placeholder="Procurar Produtos..."
                      className="pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:shadow-outline"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <BsSearch className="text-gray-400" />
                    </div>
                  </div>
                </div>
        <Link to="/cart" className="text-white flex items-center gap-2">
          <img src={cart} alt="Carrinho" className="h-5" />
          <div className="flex flex-col gap-1">
            <span className="bg-white text-gray-900 rounded-full px-2 py-1 text-xs">
              {cartState && cartState?.length ? cartState?.length : 0}
            </span>
            <p className="mb-0">R${total ? total : 0}</p>
          </div>
        </Link>
      </div>
      <div className="py-4 text-right" >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center w-[50%] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          Funções
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              to={authState?.user === null ? "/login" : "/my-profile"}
              className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <img src={user} alt="Login" className="h-5 text-black bg-black" />
              {authState?.user === null ? (
                <p className="mb-0">Login</p>
              ) : (
                <p className="mb-0">Bem vindo {authState?.user?.firstname}!</p>
              )}
            </Link>
            <Link
              to="/compare-products"
              className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <img
                src={compare}
                alt="Comparar"
                className="h-5 text-black bg-black"
              />
              <p className="mb-0">Comparar Produtos</p>
            </Link>
            <Link
              to="/wishlist"
              className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <img
                src={wishlist}
                alt="Lista de desejos"
                className="h-5 text-black bg-black"
              />
              <p className="mb-0">Favoritos</p>
            </Link>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
