import * as actions from './types';

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({type: actions.GET_LOGS, payload: data});
  } catch (err) {
    dispatch({type: actions.LOGS_ERROR, payload: err.response.statusText});
  }
};

// Add logs
export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({type: actions.ADD_LOG, payload: data});
  } catch (err) {
    dispatch({type: actions.LOGS_ERROR, payload: err.response.statusText});
  }
};

// Delete logs from server
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });
    dispatch({type: actions.DELETE_LOG, payload: id});
  } catch (err) {
    dispatch({type: actions.LOGS_ERROR, payload: err.response.statusText});
  }
};
// Update log on server
export const updateLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: actions.UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actions.LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};
// Search logs from server
export const searchLogs = text => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    console.log('test');

    dispatch({type: actions.SEARCH_LOGS, payload: data});
  } catch (err) {
    dispatch({type: actions.LOGS_ERROR, payload: err.response.statusText});
  }
};

// Set Current log export
export const setCurrent = log => {
  return {type: actions.SET_CURRENT, payload: log};
};
// Clear Current log export
export const clearCurrent = () => {
  return {type: actions.CLEAR_CURRENT};
};

//Loading
export const setLoading = () => {
  return {type: actions.SET_LOADING};
};
