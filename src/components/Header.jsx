import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
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
                Número:{" "}
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
                <Link className="text-white">LOJÃO GG</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Procurar Produtos "
                  aria-label="Procurar Produtos "
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white ">
                    <img src="/images/compare.svg" alt="Comparar" />
                    <p className="mb-0" >
                      Comparar <br />
                      Produtos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white ">
                    <img src="/images/wishlist.svg" alt="Lista de desejos" />
                    <p className="mb-0" >
                      Listar <br />
                      Favoritos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white ">
                    <img src="/images/user.svg" alt="Login" />
                    <p className="mb-0" >
                      Entrar em <br />
                      Minha Conta
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white ">
                    <img src="images/cart.svg" alt="Carrinho" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">R$500</p>
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
                    <div className="menu-bottom d-flex align-items-center ">
                        <div></div>
                        <div className="menu-links" >
                            <div className="d-flex align-items-center gap-15 ">
                                <NavLink className="text-white" to="/" >Página Inicial</NavLink>
                                <NavLink className="text-white" to="/" >Loja</NavLink>
                                <NavLink className="text-white" to="/" >Blogs</NavLink>
                                <NavLink className="text-white" to="/contact" >Contato</NavLink>
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
