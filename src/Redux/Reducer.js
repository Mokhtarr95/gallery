import { ActionTypes } from "./Action.Types";

const initialState = {
  images: [],
  favorites: [],
};

export const imagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_IMAGES:
      console.log(payload);
      return { ...state, images: payload };
    default:
      return state;
  }
};

export const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_FAVORITES:
      const favoriteImage = state.images.find(
        (image) => image.id === payload.id
      );
      console.log(payload);
      return { ...state, favorites: favoriteImage };
    default:
      return state;
  }
};
