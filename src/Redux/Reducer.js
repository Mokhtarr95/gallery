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
      case ActionTypes.ADD_TO_FAVORITES:
        const favoriteImage = state.images.find(
          (image) => image.id === payload
        );
          return { ...state, favorites: [...state.favorites , favoriteImage] };
    default:
      return state;
  }
};

// export const favoritesReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
 
//     default:
//       return state;
//   }
// };
