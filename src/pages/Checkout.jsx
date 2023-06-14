import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BsBackspaceReverseFill } from "react-icons/bs";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

let shippingSchema = yup.object({
    firstname: yup.string().required("NOME OBRIGATÓRIO!"),
    lastname: yup.string().required("SOBRENOME OBRIGATÓRIO!"),
    address: yup.string().required("ENDEREÇO OBRIGATÓRIO!"),
    state: yup.string().required("ESTADO OBRIGATÓRIO!"),
    city: yup.string().required("CIDADE OBRIGATÓRIO!"),
    country: yup.string().required("PAÍS OBRIGATÓRIO!"),
    pincode: yup.string().required("CODE PIN OBRIGATÓRIO!"),
  });


const Checkout = () => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(null);
  const cartState = useSelector((state) => state.auth.cartProducts);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);

    const formik = useFormik({
      initialValues: {
        fisrtname: "",
        password: "",
      },
      validationSchema: shippingSchema,
      onSubmit: (values) => {
        dispatch((values));
      },
    });

  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />
      <Container class1="checkout-wrapper py-5 home-wrapper">
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
                    <Link className="text-dark total " to="/cart">
                      Carrinho
                    </Link>
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total active"
                    aria-current="page"
                  >
                    Informação
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item total active">Envio</li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total active"
                    aria-current="page"
                  >
                    Pagamento
                  </li>
                </ol>
              </nav>
              <h4 className="title total ">Informações de contato</h4>
              <p className="user-details total">
                Gabriel (gabrielfootze@gmail.com)
              </p>
              <h4 className="mb-3">Endereço para envio</h4>
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
            <div className="border-bottom py-4 ">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 mb-2 align-items-center "
                    >
                      <div className="w-75 d-flex gap-10 ">
                        <div className="w-25 position-relative ">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute "
                          >
                            {item?.quantity}
                          </span>
                          <img
                            width={100}
                            height={100}
                            src={item?.productId?.images[0]?.url}
                            alt="Relógio"
                          />
                        </div>
                        <div>
                          <h5 className="total-price">
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">{item?.color?.title}</p>
                        </div>
                      </div>
                      <div className="flex-wrap-1">
                        <h5 className="total">
                          R$ {item?.price * item?.quantity}
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4 ">
              <div className="d-flex justify-content-between align-items-center ">
                <h4 className="mb-0 total ">SubTotal</h4>
                <h5 className="mb-0 total-price ">
                  R$ {totalAmount ? totalAmount + 5 : "0"}
                </h5>
              </div>
              <div className="d-flex justify-content-between align-items-center ">
                <h4 className="mb-0 total ">Enviado</h4>
                <h5 className="mb-0 total-price ">R$ 5</h5>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">
                {" "}
                R$ {totalAmount ? totalAmount + 5 : "0"}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
