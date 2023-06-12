import BreadCrumb from "../components/BreadCrump";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/products/productsSlice";
import { toast } from "react-toastify";
import { addProductToCart, getUserCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.singleProduct);
  const cartState = useSelector((state) => state.auth?.cartProducts);

  useEffect(() => {
    dispatch(getProduct(getProductId));
    dispatch(getUserCart());
  }, [dispatch, getProductId]);

  /*useEffect(() => {
    for (let index = 0; index < cartState.length; index++) {
      if (getProductId === cartState[index]?.productId?._) {
        setAlreadyAdded(true);
      }
    }
  }, [cartState, getProductId]);*/

  const uploadCart = () => {
    if (color === null) {
      toast.error("ESCOLHA UMA COR!");
      return false;
    } else {
      dispatch(
        addProductToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://brmotorolanew.vtexassets.com/arquivos/ids/162264-800-auto?v=637963526595000000&width=800&height=auto&aspect=true",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Nome de Produto"} />
      <BreadCrumb title="Nome de Produto" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item?.url} className="img-fluid" alt="" />{" "}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState && productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">R$ {productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    value={productState?.totalrating.toString()}
                    size={24}
                    edit={true}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">Visualizações</p>
                </div>
                <a className="review--btn" href="#review">
                  Escreva sua visualização
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2 ">
                  <h3 className="product-heading">Tipo:</h3>
                  <p className="product-data">Relógio</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2 ">
                  <h3 className="product-heading">Marca:</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2 ">
                  <h3 className="product-heading">Categoria:</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2 ">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2 ">
                  <h3 className="product-heading">Disponibilidade:</h3>
                  <p className="product-data">Em Estoque</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3 ">
                  <h3 className="product-heading">Tamanho:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary ">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary ">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary ">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary ">
                      GG
                    </span>
                  </div>
                </div>
                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                      <h3 className="product-heading">Color:</h3>
                      <Color
                        setColor={setColor}
                        colorData={productState?.color}
                      />
                    </div>
                  </>
                )}
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantidade:</h3>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          className="form-control"
                          style={{ width: "70px" }}
                          id=""
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "d-flex align-items-center gap-30 ms-5 "
                    }
                  >
                    <button
                      className="button border-0"
                      /*data-bs-toggle="modal" data-bs-target="#staticBackdrop"*/ type="button"
                      onClick={() => {
                        alreadyAdded ? navigate("/cart") : uploadCart();
                      }}
                    >
                      {alreadyAdded
                        ? "Ir para Carrinho"
                        : "Adicionar no Carrinho"}
                    </button>
                    <button to="/cadastrar" className="button signup">
                      Comprar
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <div>
                    <a href="#">
                      <TbGitCompare className="fs-5" />
                      Adicionar para Comparar
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <AiOutlineShoppingCart className="fs-5" />
                      Adicionar em Lista
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3 ">
                  <h3 className="product-heading">Envio e Devoluções:</h3>
                  <p className="product-data">
                    Envio: Nós nos esforçamos para processar e enviar todos os
                    pedidos o mais rápido possível. Os pedidos geralmente são
                    enviados em até 48 horas após a confirmação do pagamento.
                    Oferecemos frete grátis para pedidos acima de R$ 100,00 para
                    todo o Brasil. <br /> <br />
                    Devoluções: Se por algum motivo você não estiver satisfeito
                    com sua compra, aceitamos devoluções dentro de 30 dias a
                    partir da data de recebimento do produto.
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2 ">
                  <h3 className="product-heading">Link de Produto:</h3>
                  <p className="product-data">
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard(window.location.href);
                      }}
                    >
                      Copiar link de imagem
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div class1="row">
          <div className="col-12">
            <h4>Descrição</h4>
            <div className="bg-white p-3 ">
              <p
                dangerouslySetInnerHTML={{
                  __html: productState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h4 id="review">Avaliações</h4>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Avaliações do cliente</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={4}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Baseado em 2 comentários</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a
                      className="text-dark text-decoration-underline "
                      href="#"
                    >
                      Escrever comentário
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4 className="mb-2">Escreva sua Avaliação</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <ReactStars
                    count={5}
                    value={3}
                    size={24}
                    edit={true}
                    activeColor="#ffd700"
                  />
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comentários"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">
                      Enviar Avaliação
                    </button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="d-flex gap-10 align-items-center ">
                  <h6 className="mb-0">GG</h6>

                  <div className="review d-flex ">
                    <ReactStars
                      count={5}
                      value={3}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />{" "}
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 homer-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Produtos Populares</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
