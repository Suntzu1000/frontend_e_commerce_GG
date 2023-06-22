import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { resetPass } from "../features/user/userSlice";

let passwordSchema = yup.object({
  password: yup.string().required("SENHA OBRIGATÓRIA!"),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPass({ token: getToken, password: values.password }));
      navigate("/login");
    },
  });
  const getToken = location?.state?.pathname.split("/")[2];
  //console.log(getToken);

  return (
    <>
      <Meta title={"Redefinir Senha"} />
      <BreadCrumb title="Redefinir Senha" />
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
                  type="password"
                  name="password"
                  placeholder="Nova Senha"
                  className="mt-3"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center ">
                    <button className="button border-0" type="submit">
                      Redefinir
                    </button>
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

export default ResetPassword;
