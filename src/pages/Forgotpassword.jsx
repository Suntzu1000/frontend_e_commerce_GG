import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { forgotPass } from "../features/user/userSlice";

let emailSchema = yup.object({
  email: yup
    .string()
    .email("EMAIL DEVE SER VÁLIDO!")
    .required("EMAIL OBRIGATÓRIO!"),
});

const Forgotpassword = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      dispatch(forgotPass(values));
    },
  });

  return (
    <>
      <Meta title={"Senha Esquecida"} />
      <BreadCrumb title="Senha Esquecida" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Redefinir Senha</h3>
              <p className="text-center mt-2 mb-3">
                Enviamos um Email para que você possar redefinir senha!
              </p>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error text-center ">
                  {formik.touched.email && formik.errors.email}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center ">
                    <button className="button border-0" type="submit">
                      Enviar
                    </button>
                    <Link to="/login">Cancelar</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
