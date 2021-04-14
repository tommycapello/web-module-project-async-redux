import axios from 'axios';

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_START = "FETCH__START";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchData = () => {
    return (dispatch) => {
      dispatch({type: FETCH_START})
      axios
        .get('https://api.openbrewerydb.org/breweries')
        .then((res) => (
          dispatch({ type: FETCH_SUCCESS, payload: res.data })
        ))
        .catch((err) => (
          console.log(err)
      ))
    }
  }