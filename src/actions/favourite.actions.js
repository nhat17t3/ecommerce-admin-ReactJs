import axios from "../helpers/axios";
import { favouriteConstants } from "../constants/favourite.constants";
import { toast } from "react-toastify";

export const getListFavouriteByPage = (limit=10,page=0) => {
  return async (dispatch) => {
    dispatch({ type: favouriteConstants.GET_FAVOURITE_BY_PAGE_REQUEST });
    const res = await axios.get(`/api/favourites?limit=${limit}&page=${page}&sortBy=createdAt`);

    if (res.status === 200) {
      const { dataResponse, message } = res.data;
      dispatch({
        type: favouriteConstants.GET_FAVOURITE_BY_PAGE_SUCCESS,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });

      // toast("get list favourite by page success");
    } else {
      const { dataResponse, message } = res.data;
      dispatch({
        type: favouriteConstants.GET_FAVOURITE_BY_PAGE_FAILURE,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });
      // toast("get list favourite by page error");
    }
  };
};

export const getFavouriteById = (id) => {
  return async (dispatch) => {
    dispatch({ type: favouriteConstants.GET_FAVOURITE_BY_ID_REQUEST });
    const res = await axios.get(`/api/favourites/${id}`);

    if (res.status === 200) {
      const { dataResponse, message } = res.data;
      dispatch({
        type: favouriteConstants.GET_FAVOURITE_BY_ID_SUCCESS,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });

      // toast("get favourite by id success");
    } else {
      const { dataResponse, message } = res.data;
      dispatch({
        type: favouriteConstants.GET_FAVOURITE_BY_ID_FAILURE,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });
      // toast("get favourite by id error");
    }
  };
};

export const filterFavouriteByUser = (userId,limit,page) => {
  return async (dispatch) => {
    dispatch({ type: favouriteConstants.FILTER_FAVOURITE_BY_USER_REQUEST });
    const res = await axios.get(`/api/favourites/user/${userId}?limit=${limit}&page=${page}`);

    if (res.status === 200) {
      const { dataResponse, message } = res.data;
      dispatch({
        type: favouriteConstants.FILTER_FAVOURITE_BY_USER_SUCCESS,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });

      // toast("filter favourite by user success");
    } else {
      const { dataResponse, message } = res.data;
      dispatch({
        type: favouriteConstants.FILTER_FAVOURITE_BY_USER_FAILURE,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });
      // toast("filter favourite by user error");
    }
  };
};


export const createFavourite = (form) => {
  return async (dispatch) => {
    dispatch({
      type: favouriteConstants.ADD_FAVOURITE_REQUEST,
    });
    const res = await axios.post(`/api/favourites`, form);

    if (res.status === 201) {
      const { dataResponse, message } = res.data;

      dispatch({
        type: favouriteConstants.ADD_FAVOURITE_SUCCESS,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });
      toast.success("tạo yêu thích thành công");
      // dispatch(getListFavourite());
    } else {
      const { dataResponse, message } = res.data;
      dispatch({
        type: favouriteConstants.ADD_FAVOURITE_FAILURE,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });

      toast.error("tạo yêu thích thất bại");
    }
  };
};
export const deleteFavourite = (form) => {
  return async (dispatch) => {
    dispatch({ type: favouriteConstants.DELETE_FAVOURITE_REQUEST });
    const res = await axios.delete(`/api/favourites/${form.id}`);
    if (res.status === 200) {
      const { dataResponse, message } = res.data;

      dispatch({
        type: favouriteConstants.DELETE_FAVOURITE_SUCCESS,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });
      toast.success("xóa yêu thích thành công");

      // dispatch(getListFavouriteByPage());
    } else {
      const { dataResponse, message } = res.data;

      dispatch({
        type: favouriteConstants.DELETE_FAVOURITE_FAILURE,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });
      toast.error("xóa yêu thích thất bại");
    }
  };
};

export const updateFavourite = (id,form) => {
  return async (dispatch) => {
    // const id = form.get("id");
    dispatch({ type: favouriteConstants.UPDATE_FAVOURITE_REQUEST });
    const res = await axios.put(`/api/favourites/${id}`, form);

    if (res.status === 200) {
      const { dataResponse, message } = res.data;

      dispatch({
        type: favouriteConstants.UPDATE_FAVOURITE_SUCCESS,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });
      toast.success("cập nhật yêu thích thành công");

      // dispatch(getListFavourite());
    } else {
      const { dataResponse, message } = res.data;

      dispatch({
        type: favouriteConstants.UPDATE_FAVOURITE_FAILURE,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });
      toast.error("cập nhật yêu thích thất bại");
    }
  };
};
