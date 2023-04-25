import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Carrinho"} />
      <BreadCrumb title="Carrinho" />
      <Container class1="cart-wrapper home-wrapper-2 py-5 ">
          <div className="row">
            <div className="col-12">
              <div className=" cart-data py-3 d-flex justify-content-between align-content-center ">
                <h4 className="cart-col-1">Produto</h4>
                <h4 className="cart-col-2">Preço</h4>
                <h4 className="cart-col-3">Quantidade</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className=" cart-data py-3 mb-2 d-flex justify-content-between align-items-center ">
                <div className="cart-col-1 gap-15 d-flex align-items-center ">
                  <div className="w-25">
                    <img src={watch} className="img-fluid" alt="Relógio" />
                  </div>
                  <div className="w-75">
                    <h5 className="title">GDSAV</h5>
                    <p>Tamanho: gdfad</p>
                    <p>Cor: gda</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h2 className="price">R$ 100</h2>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15 ">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      min={1}
                      max={10}
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <AiOutlineDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h2 className="price">R$ 100</h2>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline ">
                <Link to="/product" className="button">
                  Continuar Compra
                </Link>
              </div>
              <div className="d-flex flex-column align-items-end" >
                <h4>Total: R$ 4000</h4>
                <p>Taxa e entrega já calculados!</p>
                <Link to="/checkout" className="button">Verificar</Link>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  );
};

export default Cart;
