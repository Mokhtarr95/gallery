import { combineReducers } from "redux";
import { imagesReducer } from "./Reducer";
import { favoritesReducer } from "./Reducer";

export const reducers = combineReducers({
  allImages: imagesReducer,
  favoriteImages: favoritesReducer,
});
