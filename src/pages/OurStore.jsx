import BreadCrumb from "../components/BreadCrump";
import React, { useState } from "react";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Nossa Loja"} />
      <BreadCrumb title="Loja" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
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
                   <Color/>
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
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Fones de Ouvido
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Apple´s
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Produtos Aleatórios</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="Relógio"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Fones de Ouvido de cores variadas.</h5>
                      <ReactStars
                        count={5}
                        value={3}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>R$300</b>
                    </div>
                  </div>

                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="Relógio"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Fones de Ouvido de cores variadas.</h5>
                      <ReactStars
                        count={5}
                        value={3}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>R$300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Ordenar:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Destaque</option>
                      <option value="best-selling">Mais Vendidos</option>
                      <option value="title-ascending">
                        Ordem Alfabética, A-Z
                      </option>
                      <option value="title-descending">
                        Ordem A. Decrescente , Z-A
                      </option>
                      <option value="price-ascending">
                        Preço, baixo para alto
                      </option>
                      <option value="price-descending">
                        Price, auto para baixo
                      </option>
                      <option value="created-ascending">
                        Data, antigo para novo
                      </option>
                      <option value="created-descending">
                        Data, novo para antigo
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Produtos</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(2);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />

                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default OurStore;
