import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermsAndCond = () => {
  return (
    <>
      <Meta title={"Termos e Condições"} />
      <BreadCrumb title="Termos e Condições" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default TermsAndCond;
