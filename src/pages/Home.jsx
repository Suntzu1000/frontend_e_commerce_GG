import { Link } from "react-router-dom";
import React from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="rol-6">
              <div className="main-banner position-relative  ">
                <img
                  src="images/main-banner-1.jpg"
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
            <div className="rol-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative  ">
                  <img
                    src="images/catbanner-01.jpg"
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
                    src="images/catbanner-02.jpg"
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
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="Serviços" />
                  <div>
                    <h6>Frete Grátis</h6>
                    <p className="mb-0">De todos os pedidos abaixo de R$100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="Serviços" />
                  <div>
                    <h6>Ofertas supresa diáriamente</h6>
                    <p className="mb-0">Economize em até 25% de desconto!</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="Serviços" />
                  <div>
                    <h6>Suporte em 24/7</h6>
                    <p className="mb-0">Compre com um especialista</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="Serviços" />
                  <div>
                    <h6>Preços Accesíveis</h6>
                    <p className="mb-0">Compre com preço padrão de fábrica</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="Serviços" />
                  <div>
                    <h6>Pagamentos seguros</h6>
                    <p className="mb-0"> Pagamentos 100% Protegidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homer-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.png" alt="" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Relógio Dígital </h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/watch.jpg" alt="" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Fone de Ouvido</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.png" alt="" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Relógio Dígital </h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/watch.jpg" alt="" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Fone de Ouvido</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 homer-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Coleção em Destaque</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-1.webp"
                  className="img-fluid"
                  alt="Produtos Famosos"
                />
                <div className="famous-content position-absolute">
                  <h5>Telas Grandes.</h5>
                  <h6>Série de Relógios Inteligentes.</h6>
                  <p>De R$9.999,00 ou R$883,25/mês durante 1 Ano. </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-2.webp"
                  className="img-fluid"
                  alt="Produtos Famosos"
                />
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
                <img
                  src="images/famous-3.webp"
                  className="img-fluid"
                  alt="Produtos Famosos"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Iphone.</h5>
                  <h6 className="text-dark">Iphones 13 Pro.</h6>
                  <p className="text-dark">
                    Agora em tonalidade Verde. De R$4.450,00 ou R$370,00/mês por
                    1 ano.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-4.webp"
                  className="img-fluid"
                  alt="Produtos Famosos"
                />
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
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Produtos Especiais</h3>
            </div>
          </div>
          <div className="row ">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 homer-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Produtos Populares</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper homer-wrapper-2 py-5">
        <div className="container-xll">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="Marca" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="Marca" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="Marca" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="Marca" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="Marca" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="Marca" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="Marca" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="Marca" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 homer-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Últimas Notícias</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
