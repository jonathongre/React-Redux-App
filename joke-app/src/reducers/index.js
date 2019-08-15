import {
    FETCH_JOKES_START,
    FETCH_JOKES_SUCCESS,
    FETCH_JOKES_FAILURE
  } from '../actions';

const initialState = {
    jokes: {},
    test: 'test',
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOKES_START:
        return {
          ...state,
          error: ''
        };
      case FETCH_JOKES_SUCCESS:
        return {
            ...state,
            jokes: action.payload,
            error: ''
        };
      default:
        return state;
    }
  };