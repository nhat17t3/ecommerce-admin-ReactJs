import axios from "../helpers/axios";
import { statisticsConstants } from "../constants/statistics.constants";
import { toast } from "react-toastify";

export const countElement = () => {
  return async (dispatch) => {
    dispatch({ type: statisticsConstants.COUNT_ELEMENT_REQUEST });
    const res = await axios.get(`/api/statistics/revenue?year=2022`);

    if (res.status === 200) {
      const { dataResponse, message } = res.data;
      dispatch({
        type: statisticsConstants.COUNT_ELEMENT_SUCCESS,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });

      toast("thống kê success");
    } else {
      const { dataResponse, message } = res.data;
      dispatch({
        type: statisticsConstants.COUNT_ELEMENT_FAILURE,
        payload: {
          dataResponse: dataResponse,
          message: message,
        },
      });
      toast("thống kê error");
    }
  };
};

