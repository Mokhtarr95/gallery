import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { setImages } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Modal } from "react-responsive-modal";

function Food() {
  const images = useSelector((state) => state.allImages.images);
  let dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const onOpenModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);
  const [currentImage, setCurrentImage] = useState("");

  const foodImages = () => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=" +
          Food +
          "&client_id=QGk0Fm0EWfw6xLhy6QR42rkUU4u8sf-wo796-FaVo7A&count=1000"
      )
      .then((res) => {
        dispatch(setImages(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    foodImages();
  }, []);

  return (
    <>
      <h1 className="Title">Food Images</h1>
      <div className="img-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 5 }}>
          <Masonry columnsCount={5} gutter={"15px"}>
            {images.map((image) => (
              <div>
                <img
                  className="image"
                  src={image.urls.thumb}
                  onClick={() => onOpenModal(image.urls.thumb)}
                  key={image.id}
                  alt=""
                />
                <button className="save-btn">Save</button>
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
}

export default Food;
