import React, { useCallback, useEffect } from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import Container from "../components/Container";
import cross from "../images/cross.svg";
import watch from "../images/watch.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishList } from "../features/products/productsSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishtlistState = useSelector((state) => state.auth.wishlist);

  const getWishlistFromDB = useCallback(() => {
    dispatch(getUserProductWishlist());
  }, [dispatch]);

  useEffect(() => {
    getWishlistFromDB();
  }, [getWishlistFromDB]);

  const removeFromWishlist = (id) => {
    setTimeout(() => {
      dispatch(addToWishList(id));
    }, 300);
  };
  return (
    <>
      <Meta title={"Favoritos"} />
      <BreadCrumb title="Favoritos" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
        {
            wishtlistState.length === 0 && <div className="text-center fs-3" >
              Sem Dados
            </div>
          }
          {wishtlistState?.map((item, index) => {
            return (
              <>
                <div className="col-3" key={index}>
                  <div className="wishlist-card position-relative">
                    <img
                      onClick={() => {
                        removeFromWishlist(item?._id);
                      }}
                      src={cross}
                      alt="Fechar"
                      className="position-absolute cross img-fluid"
                    />
                    <div className="wishlist-card-image bg-white">
                      <img
                        src={item?.images[0].url ? item?.images[0].url : watch}
                        className="img-fluid w-100"
                        alt="Relógio"
                        width={160}
                      />
                    </div>
                    <div className=" px-2 py-3">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price">{item?.price}</h6>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
