import * as actions from '../actions/types';
const initialState = {
  techs: null,
  text: null,
  loading: false,
  error: null,
};
export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.GET_TECHS:
      return {...state, techs: payload, loading: false};
    case actions.ADD_TECH:
      return {...state, techs: [...state.techs, payload], loading: false};
    case actions.DELETE_TECH:
      return {
        ...state,
        loading: false,
        techs: state.techs.filter(tech => tech.id !== payload),
      };

    case actions.SET_LOADING:
      return {...state, loading: true};
    case actions.TECHS_ERROR:
      console.error(payload);
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
