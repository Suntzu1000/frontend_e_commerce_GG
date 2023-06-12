import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartProduct, getUserCart, updateCartProduct } from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState()
  const userCartState = useSelector((state) => state.auth?.cartProducts);

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  useEffect(() => {
    updatedACartProduct()
  }, [quantity])

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 300)
  };

  const updatedACartProduct = (id) => {
    dispatch(updateCartProduct({cartItemId: id, quantity}));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 300)
  };

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
            {userCartState &&
              userCartState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" cart-data py-3 mb-2 d-flex justify-content-between align-items-center "
                  >
                    <div className="cart-col-1 gap-15 d-flex align-items-center ">
                      <div className="w-25">
                        <img src={watch} className="img-fluid" alt="Relógio" />
                      </div>
                      <div className="w-75">
                        <h5 className="title">{item?.productId?.title}</h5>
                        <p>Tamanho: gdfad</p>
                        <p className="d-flex gap-3">
                          Cor:
                          <ul className="colors ps-0">
                            <li
                              style={{ backgroundColor: item?.color?.title }}
                            ></li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h2 className="price">R$ {item?.price}</h2>
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
                          value={quantity ? quantity :  item?.quantity}
                          onChange={(e) => {setQuantity(e.target.value)}}
                        />
                      </div>
                      <div>
                        <AiOutlineDelete
                          onClick={() => {
                            deleteACartProduct(item?._id);
                          }}
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h2 className="price">
                        R$ {item?.price * item?.quantity}
                      </h2>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline ">
              <Link to="/product" className="button">
                Continuar Compra
              </Link>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h4>Total: R$ 4000</h4>
              <p>Taxa e entrega já calculados!</p>
              <Link to="/checkout" className="button">
                Verificar
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
