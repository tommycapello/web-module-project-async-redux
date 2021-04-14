import {
  FETCH_SUCCESS,
  FETCH_START,
  FETCH_FAILURE
} from "../actions/index"

const initialState = {
  breweries: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};