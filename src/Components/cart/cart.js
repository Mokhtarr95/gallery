import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../Redux/Actions";
import "./cart.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Modal } from "react-responsive-modal";

const Cart = () => {
  const favImages = useSelector((state) => state.allImages.favorites);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const onOpenModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);
  const [currentImage, setCurrentImage] = useState("");

  const removeFromCart = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <>
      <div className="img-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 5 }}>
          <Masonry columnsCount={5} gutter={"15px"}>
            {favImages.map((image) => (
              <div>
                <img
                  className="image"
                  src={image.urls.thumb}
                  onClick={() => onOpenModal(image.urls.thumb)}
                  key={image.id}
                  alt=""
                />
                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(image.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        <img
          src={currentImage}
          alt=""
          style={{
            width: "100%",
            borderRadius: "15px",
            minHeight: "225px",
          }}
        />
      </Modal>
    </>
  );
};

export default Cart;
