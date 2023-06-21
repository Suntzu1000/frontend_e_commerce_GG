import React, { useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrump";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state.auth?.getOrderedProduct?.orders
  );

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <>
      <BreadCrumb title="Meus Pedidos" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h5>ID DO PEDIDO</h5>
              </div>
              <div className="col-3">
                <h5>MONTANTE TOTAL</h5>
              </div>
              <div className="col-3">
                <h5>VALOR TOTAL PÓS DESCONTO</h5>
              </div>
              <div className="col-3">
                <h5>STATUS</h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div style={{backgroundColor: "#febd69"}} className="row pt-3 my-3" key={index}>
                    <div className="col-3">
                      <p>{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalPrice}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.orderStatus}</p>
                    </div>
                    <div className="col-12">
                      <div className="row bg-secondary p-3 ">
                        <div className="col-3">
                          <h6>NOME DE PRODUTO</h6>
                        </div>
                        <div className="col-3">
                          <h6>QUANTIDADE</h6>
                        </div>
                        <div className="col-3">
                          <h6>PREÇO</h6>
                        </div>
                        <div className="col-3">
                          <h6>COR</h6>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row p-3 " style={{backgroundColor: "#232f3e"}}>
                          <div className="col-3">
                            <p className="text-white">NOME DE PRODUTO</p>
                          </div>
                          <div className="col-3">
                            <p className="text-white">QUANTIDADE</p>
                          </div>
                          <div className="col-3">
                            <p className="text-white">PREÇO</p>
                          </div>
                          <div className="col-3">
                            <p className="text-white">COR</p>
                          </div>
                          {item?.orderItems?.map((i, index) => {
                            return (
                              <div className="col-12" key={index}>
                                <div className="row p-3 ">
                                  <div className="col-3">
                                    <p className="text-white">{i?.product?.title}</p>
                                  </div>
                                  <div className="col-3">
                                    <p className="text-white">{i?.quantity}</p>
                                  </div>
                                  <div className="col-3">
                                    <p className="text-white">{i?.price}</p>
                                  </div>
                                  <div className="col-3">
                                    <ul className="colors ps-0">
                                      <li
                                        style={{
                                          backgroundColor: i?.color
                                        }}
                                      ></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
