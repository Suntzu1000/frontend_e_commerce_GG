import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BsBackspaceReverseFill } from "react-icons/bs";

const Checkout = () => {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />
      <div className="checkout-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">GG</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark" to="/cart">
                        Carrinho
                      </Link>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Informação
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active">Envio</li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Pagamento
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Informações de contato</h4>
                <p className="user-details">
                  Gabriel (gabrielfootze@gmail.com)
                </p>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select " id="">
                      <option value="" selected disabled>
                        País
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Nome"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Sobrenome"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Endereço"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartamenta, casa, etc...?"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Cidade"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select " id="">
                      <option value="" selected disabled>
                        Estado
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="CEP"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center ">
                      <Link to="/cart" className="text-dark">
                        <BsBackspaceReverseFill className="me-2" />
                        Retornar
                      </Link>
                      <Link to="/cart" className="button">
                        Continuar{" "}
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4 " ></div>
              <div className="border-bottom py-4 " >
                <div className="d-flex justify-content-between align-items-center ">
                  <h4>Enviado</h4>
                  <h5>R$ 1000</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center ">
                <h4>Total</h4>
                <h5>R$ 1000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
