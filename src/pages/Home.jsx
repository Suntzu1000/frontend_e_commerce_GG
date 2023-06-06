import { Link } from "react-router-dom";
import React, { useCallback, useEffect } from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import main from "../images/main-banner-1.jpg";
import { services } from "../utils/Data";
import catbanner from "../images/catbanner-01.jpg";
import catbanner02 from "../images/catbanner-02.jpg";
import camera from "../images/camera.png";
import tv from "../images/tv.jpg";
import watch from "../images/watch.jpg";
import fone from "../images/headphone.jpg";
import famous from "../images/famous-1.webp";
import famous2 from "../images/famous-2.webp";
import famous3 from "../images/famous-3.webp";
import famous4 from "../images/famous-4.webp";
import brand from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
import { getProducts } from "../features/products/productsSlice";
import wish from "../images/wish.svg";
import compare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import cart from "../images/add-cart.svg";
import { addWishList } from "../features/products/productsSlice";
import watch2 from "../images/watch-1.avif";
import ReactStars from "react-rating-stars-component";

const Home = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state.product.product);


  const addToWishList = (id) => {
    dispatch(addWishList(id));
  }

  const getAllBlogs = useCallback(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const getAllProducts = useCallback(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    getAllBlogs();
    getAllProducts();
  }, [getAllBlogs, getAllProducts]);

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3 ">
              <img
                src={main}
                className="img-fluid rounded-3"
                alt="Produtos Eletrônicos"
              />
              <div className="main-banner-content position-absolute">
                <h4>O Melhor valor está aqui!</h4>
                <h5>IPAD S3</h5>
                <p>De R$ 999 ou R$41,62/mês</p>
                <Link className="button">Comprar</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative  p-3">
                <img
                  src={catbanner}
                  className="img-fluid rounded-3"
                  alt="Produtos Eletrônicos"
                />
                <div className="small-banner-content position-absolute">
                  <h4>O Melhor valor está aqui!</h4>
                  <h5>IPAD S3</h5>
                  <p>De R$ 999 ou R$41,62/mês</p>
                </div>
              </div>

              <div className="small-banner position-relative  ">
                <img
                  src={catbanner02}
                  className="img-fluid rounded-3"
                  alt="Produtos Eletrônicos"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Novos Produtos</h4>
                  <h5>IPAD S3</h5>
                  <p>De R$ 999 ou R$41,62/mês</p>
                </div>
              </div>

              <div className="small-banner position-relative  p-3">
                <img
                  src={catbanner}
                  className="img-fluid rounded-3"
                  alt="Produtos Eletrônicos"
                />
                <div className="small-banner-content position-absolute">
                  <h4>O Melhor valor está aqui!</h4>
                  <h5>IPAD S3</h5>
                  <p>De R$ 999 ou R$41,62/mês</p>
                </div>
              </div>

              <div className="small-banner position-relative  ">
                <img
                  src={catbanner02}
                  className="img-fluid rounded-3"
                  alt="Produtos Eletrônicos"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Novos Produtos</h4>
                  <h5>IPAD S3</h5>
                  <p>De R$ 999 ou R$41,62/mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="Serviços" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="homer-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src={tv} alt="TV" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Relógio Dígital </h6>
                  <p>10 items</p>
                </div>
                <img src={watch} alt="" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Fone de Ouvido</h6>
                  <p>10 items</p>
                </div>
                <img src={fone} alt="" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={camera} alt="" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src={tv} alt="" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Relógio Dígital </h6>
                  <p>10 items</p>
                </div>
                <img src={watch} alt="" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Fone de Ouvido</h6>
                  <p>10 items</p>
                </div>
                <img src={fone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 homer-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Coleção em Destaque</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous} className="img-fluid" alt="Produtos Famosos" />
              <div className="famous-content position-absolute">
                <h5>Telas Grandes.</h5>
                <h6>Série de Relógios Inteligentes.</h6>
                <p>De R$9.999,00 ou R$883,25/mês durante 1 Ano. </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous2} className="img-fluid" alt="Produtos Famosos" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Laptop.</h5>
                <h6 className="text-dark">De Última Geração.</h6>
                <p className="text-dark">
                  De R$2.999,00 ou R$250,50/mês durante 1 Ano.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous3} className="img-fluid" alt="Produtos Famosos" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Iphone.</h5>
                <h6 className="text-dark">Iphones 13 Pro.</h6>
                <p className="text-dark">
                  Agora em tonalidade Verde. De R$4.450,00 ou R$370,00/mês por 1
                  ano.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous4} className="img-fluid" alt="Produtos Famosos" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Som</h5>
                <h6 className="text-dark">Caixa de Som</h6>
                <p className="text-dark">
                  {" "}
                  De R$1.450,00 ou R$120,00/mês durante 1 ano.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Produtos Especiais</h3>
          </div>
        </div>
        <div className="row ">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "special") {
                return (
                  <SpecialProduct
                    key={index}
                    brand={item?.brand}
                    title={item?.title}
                    totalRating={item?.totalrating.toString()}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />
                );
              }
            })}
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 homer-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Produtos Populares</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div
            key={index}
            className={"col-3"}
          >
            <Link
             /* to={`${
                location.pathname === "/"
                  ? "/product/:id"
                  : location.pathname === "/product/:id"
                  ? "product/:id"
                  : ":id"
              }`}*/
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button
                  className="border-0 bg-transparent "
                  onClick={(_id) => {
                    addToWishList(item?._id);
                  }}
                >
                  <img src={wish} alt="Produtos" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images[0].url ? item?.images[0].url : watch2}
                  className="img-fluid  mx-auto"
                  alt="Produtos"
                  width={160}
                />
                <img
                  src={watch2}
                  className="img-fluid mx-auto "
                  alt="Produtos"
                  width={160}
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-card">{item?.title}</h5>
                <ReactStars
                  count={5}
                  value={item?.totalrating}
                  size={24}
                  edit={false}
                  activeColor={`#ffd700`}
                />
                <p className="price">R${item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent ">
                    <img src={compare} alt="Adicionar em Carrinho" />
                  </button>
                  <button className="border-0 bg-transparent ">
                    <img src={view} alt="Visualizar" />
                  </button>
                  <button className="border-0 bg-transparent ">
                    <img src={cart} alt="Adicionar em Carrinho" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
                );
              }
            })}
        </div>
      </Container>

      <Container class1="marquee-wrapper homer-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand} alt="Marca" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand2} alt="Marca" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand3} alt="Marca" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand4} alt="Marca" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand5} alt="Marca" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand6} alt="Marca" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand7} alt="Marca" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand8} alt="Marca" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 homer-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Últimas Notícias</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="col-3 mb-3 " key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.image[0].url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm a "
                      )}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
