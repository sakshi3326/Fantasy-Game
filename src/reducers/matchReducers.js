// src/reducers/matchReducer.js
import { ADD_MATCH, EDIT_MATCH, DELETE_MATCH, LOAD_MATCHES } from '../actions/matchActions';

const initialState = {
  matches: [],
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCH:
      return {
        ...state,
        matches: [...state.matches, action.payload],
      };
    case EDIT_MATCH:
      return {
        ...state,
        matches: state.matches.map((match) =>
          match.id === action.payload.id ? action.payload : match
        ),
      };
    case DELETE_MATCH:
      return {
        ...state,
        matches: state.matches.filter((match) => match.id !== action.payload),
      };
    case LOAD_MATCHES:
      return {
        ...state,
        matches: action.payload,
      };
    default:
      return state;
  }
};

export default matchReducer;
