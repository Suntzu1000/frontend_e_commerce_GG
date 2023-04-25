import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Redefinir Senha"} />
      <BreadCrumb title="Redefinir Senha" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
       <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Redefinir Senha</h3>
              <p className="text-center mt-2 mb-3" >Enviamos um Email para que você possar redefinir senha!</p>
              <form action="" className="d-flex flex-column gap-15" >
                <CustomInput 
                 type="password"
                 name="password"
                 placeholder="Senha"/>
               <CustomInput 
                type="password"
                name="confpassword"
                placeholder="Confirmar Senha"/>
                <div>
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center " >
                        <button className="button border-0" type="submit">Redefinir</button>
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
