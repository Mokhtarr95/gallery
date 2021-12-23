import { ActionTypes } from "./Action.Types";

export const setImages = (images) => {
  return {
    type: ActionTypes.SET_IMAGES,
    payload: images,
  };
};

export const addToFavorites = (id) => {
  return {
    type: ActionTypes.ADD_TO_FAVORITES,
    payload: id,
  };
};

export const removeFromFavorites = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
