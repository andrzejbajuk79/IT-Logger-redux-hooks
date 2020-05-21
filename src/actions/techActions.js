import * as actions from './types';

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();
    dispatch({type: actions.GET_TECHS, payload: data});
  } catch (err) {
    dispatch({type: actions.TECHS_ERROR, payload: err.response.statusText});
  }
};

// Add techs toserver
export const addTech = tech => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({type: actions.ADD_TECH, payload: data});
  } catch (err) {
    dispatch({type: actions.TECHS_ERROR, payload: err.response.statusText});
  }
};
// Delete  techs from server
export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({type: actions.DELETE_TECH, payload: id});
  } catch (err) {
    dispatch({type: actions.TECHS_ERROR, payload: err.response.statusText});
  }
};

//Loading
export const setLoading = () => {
  return {type: actions.SET_LOADING};
};
