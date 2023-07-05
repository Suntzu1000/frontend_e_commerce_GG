import React, { useEffect, useMemo, useState } from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const userCartState = useSelector((state) => state?.auth?.cartProducts);


  const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;
  const config2 = useMemo(() => ({
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  }), [getTokenFromLocalStorage]);
  

 useEffect(() => {
  dispatch(getUserCart(config2));
}, []);

useEffect(() => {
  if (productUpdateDetail !== null) {
    dispatch(
      updateCartProduct({
        cartItemId: productUpdateDetail?.cartItemId,
        quantity: productUpdateDetail?.quantity,
      })
    );
    setTimeout(() => {
      dispatch(getUserCart(config2));
    }, 300);
  }
}, [dispatch, productUpdateDetail, config2]);


  

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct({id: id, config2: config2 }));
    setTimeout(() => {
      dispatch(getUserCart(config2));
    }, 300);
  };

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        (Number(userCartState[index].quantity) * userCartState[index].price);
        setTotalAmount(sum)
    }
  }, [userCartState]);

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
                        <div className="d-flex gap-3">
                          Cor:
                          <ul className="colors ps-0">
                            <li
                              style={{ backgroundColor: item?.color?.title }}
                            ></li>
                          </ul>
                        </div>
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
                          value={
                            productUpdateDetail
                              ? productUpdateDetail
                              : item?.quantity
                          }
                          onChange={(e) => {
                            setProductUpdateDetail({
                              cartItemId: item?._id,
                              quantity: e.target.value,
                            });
                          }}
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
           {
            (totalAmount !== null || totalAmount !== 0) && 
             <div className="d-flex flex-column align-items-end">
              <h4>Total: R$</h4>
              <p>Taxa e entrega já calculados!</p>
              <Link to="/checkout" className="button">
                Verificar
              </Link>
            </div>
           }
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
