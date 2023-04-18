import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";

const OurStore = () => {
  return (
    <>
      <Meta title={"Lojão"} />
      <BreadCrumb title="Loja" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Compra por Categoria</h3>
                <div>
                  <ul className="ps-0">
                    <li>Relógio</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filtrar por</h3>
                <div>
                  <h5 className="sub-title">Disponibilidade</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Em Estoque (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Fora de Estoque (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Preço</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="De"
                      />
                      <label htmlFor="floatingInput">De</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="Para"
                      />
                      <label htmlFor="floatingInput1">Para</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Cores</h5>
                  <div>
                    <ul className="colors">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Tamanho</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Tags de Produtos</h3>
                <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                        <span className="badge bg-secondary rounded-3 py-2 px-3">
                            Fones de Ouvido
                        </span>
                    </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Produtos Aleatórios</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
