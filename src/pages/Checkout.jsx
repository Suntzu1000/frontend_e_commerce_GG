import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BsBackspaceReverseFill } from "react-icons/bs";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

let shippingSchema = yup.object({
  firstname: yup.string().required("NOME OBRIGATÓRIO!"),
  lastname: yup.string().required("SOBRENOME OBRIGATÓRIO!"),
  address: yup.string().required("ENDEREÇO OBRIGATÓRIO!"),
  state: yup.string().required("ESTADO OBRIGATÓRIO!"),
  city: yup.string().required("CIDADE OBRIGATÓRIO!"),
  country: yup.string().required("PAÍS OBRIGATÓRIO!"),
  pincode: yup.number().required("CÓDIGO PIN OBRIGATÓRIO!"),
  ohter: yup.string(),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
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
      firstname: "",
      lastname: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      ohter: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
    },
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("root");
      script.src = src;
      script.onLoad = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const checkoutHandler = async () => {
    const res = await loadScript("https://sdk.mercadopago.com/js/v2");
    if (!res) {
      alert("Mercado Pago SDK FALHOU");
      return;
    }
    const result = await axios.post(
      "http://localhost:5000/api/user/order/checkout"
    );
    if (!result) {
      alert("Algo deu Errado!");
      return;
    }
    const { amount, id: order_id, currency } = result.data;
  };

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
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                    className="form-control form-select "
                    id=""
                  >
                    <option value="" selected disabled>
                      País
                    </option>
                    <option value="Brasil">Brasil</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                    name="firstname"
                    placeholder="Nome"
                    className="form-control"
                  />
                </div>
                <div className="error ms-2 my-1">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                    name="lastname"
                    placeholder="Sobrenome"
                    className="form-control"
                  />
                </div>
                <div className="error ms-2 my-1">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                    name="address"
                    placeholder="Endereço"
                    className="form-control"
                  />
                </div>
                <div className="error ms-2 my-1">
                  {formik.touched.address && formik.errors.address}
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                    name="other"
                    placeholder="Apartamenta, casa, etc...?"
                    className="form-control"
                  />
                </div>
                <div className="error ms-2 my-1">
                  {formik.touched.other && formik.errors.other}
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                    name="city"
                    placeholder="Cidade"
                    className="form-control"
                  />
                </div>
                <div className="error ms-2 my-1">
                  {formik.touched.city && formik.errors.city}
                </div>
                <div className="flex-grow-1">
                  <select
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                    className="form-control form-select "
                    id=""
                  >
                    <option value="" selected disabled>
                      Estado
                    </option>
                    <option value="Goiás">Goiás</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    name="pincode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                    placeholder="CEP"
                    className="form-control"
                  />
                </div>
                <div className="error ms-2 my-1">
                  {formik.touched.pincode && formik.errors.pincode}
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
                    <button className="button" type="submit">
                      Encomendar
                    </button>
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
