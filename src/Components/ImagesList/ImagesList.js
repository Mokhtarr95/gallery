import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setImages } from "../../Redux/Actions";
import Images from "../Images/Images";

const ImagesList = () => {
  const images = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchImages = () => {
    axios
      .get(
        "https://api.unsplash.com/photos/random?client_id=QGk0Fm0EWfw6xLhy6QR42rkUU4u8sf-wo796-FaVo7A&count=100"
      )
      .then((res) => {
        console.log(res);
        dispatch(setImages(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  console.log("images:", images);

  return (
    <>
      <Images />
    </>
  );
};

export default ImagesList;
