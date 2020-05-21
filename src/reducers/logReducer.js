import * as actions from '../actions/types';
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};
export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.SET_LOADING:
      return {...state, loading: true};
    case actions.GET_LOGS:
      return {...state, logs: payload, loading: false};
    case actions.ADD_LOG:
      return {...state, logs: [...state.logs, payload], loading: false};
    case actions.DELETE_LOG:
      return {
        ...state,
        loading: false,
        logs: state.logs.filter (log => log.id !== payload),
      };
    case actions.UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map (
          log => (log.id === action.payload.id ? action.payload : log)
        ),
      };
    case actions.SEARCH_LOGS:
      return {
        ...state,
        logs: payload,
      };
    case actions.SET_CURRENT:
      return {...state, current: payload};
    case actions.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case actions.LOGS_ERROR:
      console.log (payload);
      return {...state, error: payload};
    default:
      return state;
  }
};
