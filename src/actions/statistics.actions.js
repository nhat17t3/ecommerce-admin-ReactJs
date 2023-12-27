import axios from "../helpers/axios";
import { statisticsConstants } from "../constants/statistics.constants";
import { toast } from "react-toastify";

export const countElement = () => {
  return async (dispatch) => {
    dispatch({ type: statisticsConstants.COUNT_ELEMENT_REQUEST });
    const res = await axios.get(`/api/statistics/count-item`);

    if (res.status === 200) {
      const { result, message } = res.data;
      dispatch({
        type: statisticsConstants.COUNT_ELEMENT_SUCCESS,
        payload: {
          dataResponse: result,
          message: message,
        },
      });

      // toast("thống kê success");
    } else {
      const {  message } = res.data;
      dispatch({
        type: statisticsConstants.COUNT_ELEMENT_FAILURE,
        payload: {
          message: message,
        },
      });
      // toast("thống kê error");
    }
  };
};

export const getRevenueByMonths = (year) => {
  return async (dispatch) => {
    dispatch({ type: statisticsConstants.REVENUE_BY_MONTHS_REQUEST });
    const res = await axios.get(`/api/statistics/revenue-by-months?year=${year}`);

    if (res.status === 200) {
      const { result, message } = res.data;
      dispatch({
        type: statisticsConstants.REVENUE_BY_MONTHS_SUCCESS,
        payload: {
          dataResponse: result,
          message: message,
        },
      });

      // toast("thống kê success");
    } else {
      const {  message } = res.data;
      dispatch({
        type: statisticsConstants.REVENUE_BY_MONTHS_FAILURE,
        payload: {
          message: message,
        },
      });
      // toast("thống kê error");
    }
  };
};

