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
    dispatch(getUserCart(config2))
  }, [dispatch])

  return (
    <>
      <header className="header-top-strip py-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Frete Gratis até R$100</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Número:
                <a className="text-white" href="tel:+62 995396918">
                  62 9 9539-6918
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
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
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-products"
                    className="d-flex align-items-center gap-10 text-white "
                  >
                    <img src={compare} alt="Comparar" />
                    <p className="mb-0">
                      Comparar <br />
                      Produtos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white "
                  >
                    <img src={wishlist} alt="Lista de desejos" />
                    <p className="mb-0">Favoritos</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={authState?.user === null ? "/login" : "/my-profile"}
                    className="d-flex align-items-center gap-10 text-white "
                  >
                    <img src={user} alt="Login" />
                    {authState?.user === null ? (
                      <p className="mb-0">Login</p>
                    ) : (
                      <p className="mb-0">
                        Bem vindo {authState?.user?.firstname}!
                      </p>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white "
                  >
                    <img src={cart} alt="Carrinho" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {cartState && cartState?.length ? cartState?.length : 0}
                      </span>
                      <p className="mb-0">R${total ? total : 0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30 ">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="menu" />{" "}
                      <span className="me-5 d-inline-block">Categorias</span>
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
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15 ">
                    <NavLink to="/">Página Inicial</NavLink>
                    <NavLink to="/product">Produtos</NavLink>
                    <NavLink to="/my-orders">Pedidos</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contato</NavLink>
                    <button
                      className=" border-0 bg-transparent text-white text-uppercase "
                      type="button"
                      onClick={(e) => {handleLogout(e)}}
                    >
                      Sair
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
