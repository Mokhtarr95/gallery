import React, { useState } from "react";
import { useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./Images.css";
import { Modal } from "react-responsive-modal";

const Images = () => {
  const images = useSelector((state) => state.allImages.images);

  const [open, setOpen] = useState(false);

  const onOpenModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);
  const [currentImage, setCurrentImage] = useState("");

  return (
    <>
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
                <button>Save</button>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        <img
          // key={image.id}
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

// function DataFetching (){
//     const [images, setImages] = useState([]);

//     useEffect(() => {

//         axios
//         .get("https://api.unsplash.com/photos/random?client_id=QGk0Fm0EWfw6xLhy6QR42rkUU4u8sf-wo796-FaVo7A&count=100")
//         .then(res => {
//             console.log(res)
//             setImages(res.data);
//         })
//         .catch(err =>{
//             console.log(err)
//         })
//     }, [])

//     return (
//         <Masonry columnsCount={5} gutter={"15px"} >
//             <Search />
//             {images.map((image) => (
//              <img src={image.urls.thumb} key={image.id} alt="" style={{width:"100%", borderRadius: "15px", minHeight: "225px"}} />
//          ))}

//         </Masonry>

//     )

// }