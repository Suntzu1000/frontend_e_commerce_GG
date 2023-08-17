import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; 



const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state.product.product);
  const [displayCount, setDisplayCount] = useState(8);
  const calculateInstallmentPrice = useCallback(
    (price) => Math.round(price / 12),
    []
  );

  const addToWishList = (id) => {
    dispatch(addWishList(id));
  };

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
      <Container class1="mx-auto px-4 sm:px-6 lg:px-8 py-5 bg-gray-300" >
        <h1 className="py-3 text-5xl font-bold" >Produtos</h1>
        <Slider
        className="flex flex-wrap -m-4"
        slidesToShow={4.1}
        slidesToScroll={4.1}
        autoplay={false}
        dots={false}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
          {productState &&
            productState?.map((item, ind) => {
              const formattedPrice = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.price);
              return (
                <div className="lg:w-100 p-4 h-[500px] bg-white" key={ind}>
                  <div className="w-100  h-full bg-white p-8 rounded shadow-lg flex flex-col justify-between">
                    <Link
                      to={`/product/${item?._id}`}
                      className="border-0 bg-transparent"
                    >
                      <img
                        src={item.images[0]?.url}
                        className="w-[100%]  h-auto rounded-t hover:scale-125 transition duration-300"
                        alt="Produtos Eletrônicos"
                      />
                    </Link>
                    <div className="mt-6">
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {item.title}
                      </h2>
                      <p className="text-xl font-semibold text-green-500">
                        {formattedPrice}
                      </p>
                      <Link className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Comprar
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services flex flex-wrap justify-between">
              {services?.map((i, j) => {
                return (
                  <div className="flex items-center gap-4 mb-4" key={j}>
                    <img src={i.image} alt="Serviços" className="w-12 h-12" />
                    <div>
                      <h6 className="font-semibold text-lg">{i.title}</h6>
                      <p className="text-gray-600">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="py-5 bg-gray-100 w-[100%] h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[100%] h-full">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8">
            Coleção em Destaque
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productState &&
              productState.map((item, index) => {
                if (item.tags === "featured") {
                  const formattedPrice = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.price);
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md">
                      <div className="relative">
                        <img
                          src={item.images[0].url ? item.images[0].url : watch2}
                          alt="Produtos"
                          className="w-100 h-auto object-cover hover:scale-110 transition duration-300"
                        />{" "}
                        <button
                          className="absolute top-2 right-2 bg-transparent border-0"
                          onClick={() => {
                            addToWishList(item._id);
                          }}
                        >
                          <span className="hover:text-red-500 hover:scale-110 transition duration-300 ">
                            ❤️
                          </span>
                        </button>
                      </div>
                      <div className="p-4">
                        <h6 className="text-gray-600 text-sm mb-2">
                          {item.brand}
                        </h6>
                        <h5 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h5>
                        <p className="text-xl font-semibold text-green-500">
                          {formattedPrice}
                        </p>
                      </div>
                      <div className="flex justify-between p-4 border-t border-gray-200">
                        <button className="border-0 bg-transparent">
                          <img src={compare} alt="Adicionar em Carrinho" />
                        </button>
                        <button className="border-0 bg-transparent">
                          <img
                            onClick={() => navigate(`/product/${item._id}`)}
                            src={view}
                            alt="Visualizar"
                          />
                        </button>
                        <button className="border-0 bg-transparent">
                          <img src={cart} alt="Adicionar em Carrinho" />
                        </button>
                      </div>
                    </div>
                  );
                }
                return true;
              })}
          </div>
        </div>
      </Container>

      <Container class1=" py-5 home-wrapper-2 ">
        <div className="grid lg:grid-cols-4 sm:grid-cols-1">
          {productState &&
            productState.slice(0, displayCount).map((product, index) => {
              const formattedPrice = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price);
              return (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden m-6 rounded shadow-lg  cursor-pointer transform hover:scale-105 transition-transform duration-200 w-[90%] h-auto "
                >
                  {" "}
                  <Link
                    to={`/product/${product?._id}`}
                    className="border-0 bg-transparent"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-auto w-100 object-cover"
                        src={
                          product.images[0]?.url
                            ? product.images[0]?.url
                            : watch2
                        }
                        alt={product.title}
                      />
                    </div>
                  </Link>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        {product.category}
                      </p>
                      <h5 className="mt-2 text-xl font-semibold text-gray-900">
                        {product.title}
                      </h5>
                      <p
                        className="mt-3 text-base text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      ></p>
                      <p className="mt-3 text-xl font-semibold ">
                        De{" "}
                        <span className="text-green-500">{formattedPrice}</span>{" "}
                        ou{" "}
                        <span className="text-green-500">
                          R${calculateInstallmentPrice(product.price)}
                        </span>
                        /mês durante 1 Ano
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <button
          onClick={() => setDisplayCount(displayCount + 8)}
          className="text-center w-full py-2 bg-indigo-600 hover:bg-indigo-800 text-white"
        >
          Mais Produtos
        </button>
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
                    id={item?._id}
                    brand={item?.brand}
                    title={item?.title}
                    totalRating={item?.totalrating.toString()}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                    images={item?.images[0]?.url}
                  />
                );
              }
              return true;
            })}
        </div>
      </Container>

      <Container class1="popular-wrapper py-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-4">Produtos Populares</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productState &&
              productState?.map((item, index) => {
                const formattedPrice = new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.price);
                if (item.tags === "popular") {
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg p-4"
                    >
                      <div className="relative">
                        <button
                          className="absolute top-2 right-2 bg-transparent border-none"
                          onClick={() => addToWishList(item._id)}
                        >
                          <img
                            src={wish}
                            alt="Wishlist"
                            className="h-5 w-5 hover:scale-150 "
                          />
                        </button>
                        <Link
                          to={`/product/${item?._id}`}
                          className="border-0 bg-transparent"
                        >
                          <img
                            src={
                              item.images[0].url ? item.images[0].url : watch2
                            }
                            alt="Product"
                            className="w-100 h-auto object-cover"
                          />
                        </Link>
                      </div>
                      <div className="mt-4">
                        <h6 className="text-lg font-semibold">{item.brand}</h6>
                        <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item.totalrating}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="text-lg font-bold text-green-500">
                          {formattedPrice}
                        </p>
                      </div>
                      <div className="flex justify-end mt-4">
                        <button className="border-none bg-transparent">
                          <img
                            src={compare}
                            alt="Compare"
                            className="h-6 w-6 mr-4"
                          />
                        </button>
                        <button
                          className="border-none bg-transparent"
                          onClick={() => navigate(`/product/${item._id}`)}
                        >
                          <img src={view} alt="View" className="h-6 w-6 mr-4" />
                        </button>
                        <button className="border-none bg-transparent">
                          <img src={cart} alt="Cart" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  );
                }
                return true;
              })}
          </div>
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
              return true;
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
