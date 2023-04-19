import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";


const ResetPassword = () => {
  return (
    <>
      <Meta title={"Redefinir Senha"} />
      <BreadCrumb title="Redefinir Senha" />
      <div className="login-wrapper py-5 home-wrapper-2">
       <div className="container-xxl">
       <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Redefinir Senha</h3>
              <p className="text-center mt-2 mb-3" >Enviamos um Email para que você possar redefinir senha!</p>
              <form action="" className="d-flex flex-column gap-15" >
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="confpassword"
                    placeholder="Confirmar Senha"
                    className="form-control"
                  />
                </div>
                <div>
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center " >
                        <button className="button border-0" type="submit">Redefinir</button>
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

export default ResetPassword;
