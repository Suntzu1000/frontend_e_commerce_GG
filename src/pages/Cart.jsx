import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <>
      <Meta title={"Carrinho"} />
      <BreadCrumb title="Carrinho" />
      <section className="cart-wrapper home-wrapper-2 py-5 ">
        <div className="container-xxl">
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
                  <div className="w-7">
                    <h5 className="title">GDSAV</h5>
                    <p className="color">gdfad</p>
                    <p className="size">gda</p>
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
              <div className=" cart-data py-3 mb-2 d-flex justify-content-between align-items-center ">
                <div className="cart-col-1 gap-15 d-flex align-items-center ">
                  <div className="w-25">
                    <img src={watch} className="img-fluid" alt="Relógio" />
                  </div>
                  <div className="w-7">
                    <p >GDSAV</p>
                    <p >gdfad</p>
                    <p className="size">gda</p>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
