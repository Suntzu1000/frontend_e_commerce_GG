import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrump";

const RefundPloicy = () => {
  return (
    <>
      <Meta title={"Politica de Reembolso"} />
      <BreadCrumb title="Politica de Reembolso" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPloicy;
