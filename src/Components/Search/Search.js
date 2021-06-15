import React, { useState, useEffect } from "react";
import "./Search.css";
import * as BiIcons from "react-icons/bi";
import axios from "axios";
import { setImages } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

function Search() {
  const images = useSelector((state) => state.allImages.images);
  const [query, setQuery] = useState();

  let dispatch = useDispatch();

  const searchInputRes = () => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=" +
          query +
          "&client_id=QGk0Fm0EWfw6xLhy6QR42rkUU4u8sf-wo796-FaVo7A&count=1000"
      )
      .then((res) => {
        console.log(res.data);
        dispatch(setImages(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setImages();
  }, []);

  return (
    <div className="search-box">
      <input
        className="searchInput"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-btn" onClick={searchInputRes}>
        <BiIcons.BiSearchAlt2 size="1.1rem" />
      </button>
    </div>
  );
}

export default Search;
