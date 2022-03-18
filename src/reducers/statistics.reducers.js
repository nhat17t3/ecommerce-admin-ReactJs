import { statisticsConstants } from "../constants/statistics.constants";

const initState = {
  statistics: {},
  loading: false,
  message: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case statisticsConstants.COUNT_ELEMENT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case statisticsConstants.COUNT_ELEMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        // message:action.payload.message,
        statistics: action.payload.dataResponse,
      };
      break;
    case statisticsConstants.COUNT_ELEMENT_FAILURE:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
      
    
  }
  return state;
};