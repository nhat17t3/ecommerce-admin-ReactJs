import { favouriteConstants } from "../constants/favourite.constants";

const initState = {
  listFavourite: [],
  favourite: {},
  loading: false,
  message: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case favouriteConstants.GET_FAVOURITE_BY_PAGE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case favouriteConstants.GET_FAVOURITE_BY_PAGE_SUCCESS:
      state = {
        ...state,
        loading: false,
        // message:action.payload.message,
        listFavourite: action.payload.dataResponse,
      };
      break;
    case favouriteConstants.GET_FAVOURITE_BY_PAGE_FAILURE:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    //
   
    case favouriteConstants.FILTER_FAVOURITE_BY_USER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case favouriteConstants.FILTER_FAVOURITE_BY_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        // message:action.payload.message,
        listFavourite: action.payload.dataResponse,
      };
      break;
    case favouriteConstants.FILTER_FAVOURITE_BY_USER_FAILURE:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
   
    //
    case favouriteConstants.GET_FAVOURITE_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case favouriteConstants.GET_FAVOURITE_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        // message:action.payload.message,
        favourite: action.payload.dataResponse,
      };
      break;
    case favouriteConstants.GET_FAVOURITE_BY_ID_FAILURE:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;

    case favouriteConstants.ADD_FAVOURITE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case favouriteConstants.ADD_FAVOURITE_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
        loading: false,
      };
      break;
    case favouriteConstants.ADD_FAVOURITE_FAILURE:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case favouriteConstants.UPDATE_FAVOURITE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case favouriteConstants.UPDATE_FAVOURITE_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case favouriteConstants.UPDATE_FAVOURITE_FAILURE:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case favouriteConstants.DELETE_FAVOURITE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case favouriteConstants.DELETE_FAVOURITE_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: action.payload.message,
      };
      break;
    case favouriteConstants.DELETE_FAVOURITE_FAILURE:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
  }
  return state;
};
