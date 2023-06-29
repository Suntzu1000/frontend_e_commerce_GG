import BreadCrumb from "../components/BreadCrump";
import React, { useCallback, useEffect, useState } from "react";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import watch from "../images/watch.jpg";
import gr4 from "../images/gr4.svg";
import gr2 from "../images/gr2.svg";
import gr3 from "../images/gr3.svg";
import gr from "../images/gr.svg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productsSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.product);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState(null);
  const [colors, setColors] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);

  const getAllProducts = useCallback(() => {
    dispatch(getProducts({sort, tag, brand, category, minPrice, maxPrice}));
  }, [dispatch]);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newtags = [];
    let newColors = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand);
      category.push(element.category);
      newtags.push(element.tags);
      newColors.push(element.colors);
    }

    setBrands(newBrands);
    setCategories(category);
    setTags(newtags);
    setColors(newColors);
  }, [productState]);
  console.log([...new Set(colors)]);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <>
      <Meta title={"Nossa Loja"} />
      <BreadCrumb title="Loja" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="sub-title">Categoria</h3>
              <div>
                <ul className="ps-0">
                  {categories &&
                    [...new Set(categories)].map((item, index) => {
                      return (
                        <li key={index} onClick={() => setCategory(item)}>
                          {item}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filtrar por</h3>
              <div>
                <h5 className="sub-title">Preço</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="De"
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput">De</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="Para"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput1">Para</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="sub-title">Tags de Produtos</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {tags &&
                    [...new Set(tags)].map((item, index) => {
                      return (
                        <span
                          key={index}
                          onClick={() => setTag(item)}
                          className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="sub-title">Produtos Aleatórios </h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {brands &&
                    [...new Set(brands)].map((item, index) => {
                      return (
                        <span
                          key={index}
                          onClick={() => setBrand(item)}
                          className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                        >
                          {item}
                        </span>
                      );
                    })}
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
                  <select
                    name=""
                    className="form-control form-select"
                    id=""
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="title">Ordenar: A-Z</option>
                    <option value="title">Ordem A. Decrescente , Z-A</option>
                    <option value="price">Preço, baixo para alto</option>
                    <option value="-price">Price, auto para baixo</option>
                    <option value="createdAt">Data, antigo para novo</option>
                    <option value="-createdAt">Data, novo para antigo</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Produtos</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src={gr4}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(2);
                      }}
                      src={gr2}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src={gr3}
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src={gr}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard
                  data={productState ? productState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
