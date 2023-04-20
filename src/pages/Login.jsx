import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Entrar</h3>
              <form action="" className="d-flex flex-column gap-15" >
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="mt-3" >
                  <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="form-control"
                  />
                </div>
                <div>
                    <Link to="/forgot-password">Esqueceu senha</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center " >
                        <button className="button border-0" type="submit">Login</button>
                        <Link to="/cadastrar" className="button signup" >Cadastrar</Link>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;