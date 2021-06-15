import React, { useEffect } from "react";
import "./Categories.css";
import axios from "axios";
import { setImages } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Fashion() {
  const images = useSelector((state) => state.allImages.images);
  let dispatch = useDispatch();

  const fashionImages = () => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=" +
          Fashion +
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
    fashionImages();
  }, []);

  return (
    <>
      <h1>Fashion Images</h1>

      <div className="img-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 5 }}>
          <Masonry columnsCount={5} gutter={"15px"}>
            {images.map((image) => (
              <div>
                <img
                  className="image"
                  src={image.urls.thumb}
                  key={image.id}
                  alt=""
                />
                <button>Save</button>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default Fashion;
