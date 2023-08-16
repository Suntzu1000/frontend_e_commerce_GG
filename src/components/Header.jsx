import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import logo from "../images/Logo.png";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getProduct } from "../features/products/productsSlice";
import { getUserCart } from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paginate, setPaginate] = useState(true);
  const [total, setTotal] = useState(null);
  const [productOpt, setProductOpt] = useState([]);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const productState = useSelector((state) => state?.product?.product);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        (Number(cartState[index]?.quantity) + Number(cartState[index]?.price));
      setTotal(sum);
    }
  }, [cartState]);
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, [productState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;
  const config2 = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${
          getTokenFromLocalStorage !== null
            ? getTokenFromLocalStorage.token
            : ""
        }`,
        Accept: "application/json",
      },
    }),
    [getTokenFromLocalStorage]
  );

  useEffect(() => {
    dispatch(getUserCart(config2));
  }, [dispatch]);

  return (
    <>
      <header className="header-top-strip py-3 bg-blue-500">
        <div className="container-xxl">
          <div className="flex items-center justify-between">
            <p className="text-white">Frete Gratis até R\$100</p>
            <p className="text-end text-white">
              Número:
              <a className="text-white" href="tel:+62 995396918">
                62 9 9539-6918
              </a>
            </p>
          </div>
        </div>
      </header>
      <header className="header-upper py-3 bg-gray-900">
        <div className="container-xxl">
          <div className="flex items-center justify-between">
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
            <div className="flex items-center gap-5">
              <Link
                to="/compare-products"
                className="text-white flex items-center gap-2"
              >
                <img src={compare} alt="Comparar" className="h-5" />
                <p className="mb-0">Comparar Produtos</p>
              </Link>
              <Link
                to="/wishlist"
                className="text-white flex items-center gap-2"
              >
                <img src={wishlist} alt="Lista de desejos" className="h-5" />
                <p className="mb-0">Favoritos</p>
              </Link>
              <Link
                to={authState?.user === null ? "/login" : "/my-profile"}
                className="text-white flex items-center gap-2"
              >
                <img src={user} alt="Login" className="h-5" />
                {authState?.user === null ? (
                  <p className="mb-0">Login</p>
                ) : (
                  <p className="mb-0">
                    Bem vindo {authState?.user?.firstname}!
                  </p>
                )}
              </Link>
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
          </div>
        </div>
      </header>
      <header className="header-bottom py-3 bg-gray-900">
        <div className="container-xxl">
          <div className="flex items-center justify-center">
            <div className="relative">
              <button
                className="btn bg-transparent border-0 text-white flex items-center gap-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={menu} alt="menu" className="h-5" />
                <span className="me-5">Categorias</span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item text-white" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5 text-white">
              <NavLink to="/">Página Inicial</NavLink>
              <NavLink to="/product">Produtos</NavLink>
              <NavLink to="/my-orders">Pedidos</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/contact">Contato</NavLink>
              <button
                className="border-0 bg-transparent text-white uppercase"
                type="button"
                onClick={(e) => {
                  handleLogout(e);
                }}
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
