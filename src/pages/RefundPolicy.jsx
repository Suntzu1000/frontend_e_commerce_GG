import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrump";
import Container from "../components/Container";

const RefundPloicy = () => {
  return (
    <>
      <Meta title={"Politica de Reembolso"} />
      <BreadCrumb title="Politica de Reembolso" />
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

export default RefundPloicy;
