import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./Images.css";
import { Modal } from "react-responsive-modal";
import { addToFavorites } from "../../Redux/Actions";

const Images = () => {
  const images = useSelector((state) => state.allImages.images);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onOpenModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);
  const [currentImage, setCurrentImage] = useState("");
  const savetoCart = (id) => {
    dispatch(addToFavorites(id));
  };

  return (
    <>
      <div className="img-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 5 }}>
          <Masonry columnsCount={5} gutter={"15px"}>
            {images.map((image) => (
              <div className="image-wrapper">
                <img
                  className="image"
                  src={image.urls.thumb}
                  onClick={() => onOpenModal(image.urls.thumb)}
                  key={image.id}
                  alt=""
                />
                <button
                  className="save-btn"
                  onClick={() => savetoCart(image.id)}
                >
                  Save
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

export default Images;
